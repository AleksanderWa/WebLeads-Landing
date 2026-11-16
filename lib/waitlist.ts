export const WAITLIST_ENDPOINT = "https://app.webleads.site/api/public/form";

export async function submitWaitlist(email: string): Promise<boolean> {
  try {
    const response = await fetch(WAITLIST_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { email }, form_type: "WAITLIST" }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
