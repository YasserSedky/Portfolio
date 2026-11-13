// src/utils/contact.js

export const CONTACT_INFO = {
  email: 'yassersedky07@gmail.com',
  phone: '+20 100 763 5462',
  whatsappUrl: 'https://wa.me/201007635462',
  linkedinUrl: 'https://www.linkedin.com/in/yasser-wael-sedky-a521a3326/',
  githubUrl: 'https://github.com/YasserSedky',
  emailSubject: 'Project Inquiry — Yasser Wael Sedky',
  emailBody: 'Hi Yasser,\n\nI would like to discuss a project with you.\n\nBest regards,',
};

/**
 * Returns a web Gmail Compose URL with pre-filled recipient, subject, and body.
 * Works seamlessly in all desktop browsers without needing an OS email client.
 */
export const getGmailComposeUrl = () => {
  const to = encodeURIComponent(CONTACT_INFO.email);
  const su = encodeURIComponent(CONTACT_INFO.emailSubject);
  const body = encodeURIComponent(CONTACT_INFO.emailBody);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`;
};

/**
 * Returns a mailto: URL with pre-filled recipient, subject, and body.
 * Useful for native desktop clients (Outlook/Apple Mail) and mobile devices.
 */
export const getMailtoUrl = () => {
  const to = CONTACT_INFO.email;
  const su = encodeURIComponent(CONTACT_INFO.emailSubject);
  const body = encodeURIComponent(CONTACT_INFO.emailBody);
  return `mailto:${to}?subject=${su}&body=${body}`;
};

/**
 * Returns the best URL depending on whether the user is on mobile or desktop.
 */
export const getPreferredEmailUrl = () => {
  if (typeof window === 'undefined') return getGmailComposeUrl();
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  return isMobile ? getMailtoUrl() : getGmailComposeUrl();
};

/**
 * Directs the user to compose/send an email.
 */
export const handleEmailClick = (e) => {
  if (e && e.preventDefault) e.preventDefault();
  const url = getPreferredEmailUrl();
  if (url.startsWith('mailto:')) {
    window.location.href = url;
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

