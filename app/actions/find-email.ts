'use server'

import crypto from 'crypto';

interface FindEmailsResponse {
  success: boolean;
  website: string;
  emails: string[];
  social_links: string[];
  message?: string;
}

function generatePublicApiToken(secret: string) {
  const now = new Date();
  const startOfYear = new Date(now.getUTCFullYear(), 0, 1);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay) + 1;

  const message = `${secret}${dayOfYear}`;
  const token = crypto
    .createHmac('sha256', secret)
    .update(message)
    .digest('hex');

  return token;
}

export async function findEmailsAndSocials(formData: FormData): Promise<FindEmailsResponse | { error: string }> {
  const website = formData.get('website');

  if (!website || typeof website !== 'string') {
    return { error: 'Please provide a valid website URL' };
  }

  const secret = 'a7f3e9d2c8b14f6a5e3d9c7b2a7f4e2c';
  
  if (!secret) {
    console.error('PUBLIC_SECRET is not defined');
    return { error: 'Internal server error: Configuration missing' };
  }

  try {
    const token = generatePublicApiToken(secret);
    
    // Ensure URL has protocol
    let urlToProcess = website.trim();
    if (!urlToProcess.startsWith('http://') && !urlToProcess.startsWith('https://')) {
      urlToProcess = `https://${urlToProcess}`;
    }

    const response = await fetch('https://app.webleads.site/api/public/find_emails_and_socials', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ website: urlToProcess }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      return { error: `API request failed: ${response.statusText}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error finding emails:', error);
    return { error: 'Failed to process request. Please try again later.' };
  }
}

