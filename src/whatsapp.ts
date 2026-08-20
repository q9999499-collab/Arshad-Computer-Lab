export const buildWhatsAppUrl = (phone: string, message: string): string => {
  const normalizedPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
};

export const openWhatsAppOrder = (phone: string, productName: string): void => {
  const message = `Assalam-o-Alaikum, mujhe ${productName} ke bare mein maloomat chahiye.`;
  window.open(buildWhatsAppUrl(phone, message), '_blank', 'noopener,noreferrer');
};
