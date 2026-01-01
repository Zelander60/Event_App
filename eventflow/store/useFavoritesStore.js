import create from "zustand";

const useFavoritesStore = create((set) => ({
  favorites: [],
  addToFavorites: (event) =>
    set((state) => ({ favorites: [...state.favorites, event] })),
  removeFromFavorites: (eventId) =>
    set((state) => ({
      favorites: state.favorites.filter((event) => event.id !== eventId),
    })),
  isFavorite: (eventId) =>
    set((state) => state.favorites.some((event) => event.id === eventId)),
}));

export default useFavoritesStore;
