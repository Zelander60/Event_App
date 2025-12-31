import create from "zustand";

const useEventStore = create((set) => ({
  events: [],
  filteredEvents: [],
  attendees: [],
  setEvents: (events) => set({ events, filteredEvents: events }),
  filterEvents: (category) =>
    set((state) => ({
      filteredEvents:
        category === "All Events"
          ? state.events
          : state.events.filter((event) => event.category === category),
    })),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  setAttendees: (attendees) => set({ attendees }),
  updateAttendeeStatus: (attendeeId, status) =>
    set((state) => ({
      attendees: state.attendees.map((attendee) =>
        attendee.id === attendeeId ? { ...attendee, status } : attendee
      ),
    })),
}));

export default useEventStore;
