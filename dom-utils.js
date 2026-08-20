export const byId = (id) => document.getElementById(id);
export const setText = (id, value) => {
    const element = byId(id);
    if (element)
        element.textContent = value;
};
export const onReady = (callback) => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback, { once: true });
    }
    else {
        callback();
    }
};
