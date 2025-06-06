export const SITE_CONFIG = {
  domain: 'https://www.webleads.site',
  name: 'WebLeads',
  description: 'Powerful lead generation platform designed specifically for digital agencies',
  social: {
    twitter: '',
    linkedin: '',
    github: ''
  }
} as const

export const { domain: WEBLEADS_DOMAIN } = SITE_CONFIG 