export interface UiState {
  searchQuery: string;
  currentPage: number;
  selectedCategory: string;
}

export const normalizeSearch = (value: string): string => value.trim().toLowerCase();

export const matchesSearch = (text: string, query: string): boolean =>
  normalizeSearch(text).includes(normalizeSearch(query));
