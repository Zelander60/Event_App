import { create } from "zustand";

const useEventStore = create((set, get) => ({
  events: [],
  filteredEvents: [],
  attendees: [],
  cart: [],
  searchQuery: "",
  setEvents: (events) => set({ events, filteredEvents: events }),
  filterEvents: (category) =>
    set((state) => {
      const filtered =
        category === "All Events"
          ? state.events
          : state.events.filter((event) => event.category === category);
      return {
        filteredEvents: filtered.filter((event) =>
          event.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        ),
      };
    }),
  setSearchQuery: (query) =>
    set((state) => {
      const activeCategory =
        get().filteredEvents[0]?.category || "All Events";
      const filtered =
        activeCategory === "All Events"
          ? state.events
          : state.events.filter(
              (event) => event.category === activeCategory
            );
      return {
        searchQuery: query,
        filteredEvents: filtered.filter((event) =>
          event.title.toLowerCase().includes(query.toLowerCase())
        ),
      };
    }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  setAttendees: (attendees) => set({ attendees }),
  updateAttendeeStatus: (attendeeId, status) =>
    set((state) => ({
      attendees: state.attendees.map((attendee) =>
        attendee.id === attendeeId ? { ...attendee, status } : attendee
      ),
    })),

  // Cart actions
  addToCart: (event, ticket) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.event.id === event.id && item.ticket.type === ticket.type
      );
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.event.id === event.id && item.ticket.type === ticket.type
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { event, ticket, quantity: 1 }] };
    }),

  removeFromCart: (event, ticket) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.event.id === event.id && item.ticket.type === ticket.type
      );
      if (existingItem && existingItem.quantity > 1) {
        return {
          cart: state.cart.map((item) =>
            item.event.id === event.id && item.ticket.type === ticket.type
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
      return {
        cart: state.cart.filter(
          (item) =>
            item.event.id !== event.id || item.ticket.type !== ticket.type
        ),
      };
    }),

  clearCart: () => set({ cart: [] }),

  getCartTotal: () => {
    return get().cart.reduce(
      (total, item) => total + item.ticket.price * item.quantity,
      0
    );
  },
}));

export default useEventStore;
