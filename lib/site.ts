/** The public address of this site. Set NEXT_PUBLIC_SITE_URL at domain cutover and redeploy. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://lbrownlearning-com.netlify.app").replace(/\/+$/, "");
