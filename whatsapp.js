export const buildWhatsAppUrl = (phone, message) => {
    const normalizedPhone = phone.replace(/[^0-9]/g, '');
    return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
};
export const openWhatsAppOrder = (phone, productName) => {
    const message = `Assalam-o-Alaikum, mujhe ${productName} ke bare mein maloomat chahiye.`;
    window.open(buildWhatsAppUrl(phone, message), '_blank', 'noopener,noreferrer');
};
