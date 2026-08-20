export const normalizeSearch = (value) => value.trim().toLowerCase();
export const matchesSearch = (text, query) => normalizeSearch(text).includes(normalizeSearch(query));
