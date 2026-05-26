# EventFlow Project Advancement Roadmap

This document outlines the security review findings and a strategic roadmap for advancing the EventFlow project using modern technical recommendations.

## Security Review Findings

1.  **Authentication Persistence:** Initially, authentication state was volatile and lost on app restart. This has been addressed by implementing `zustand/middleware/persist` with `AsyncStorage`.
2.  **Sensitive Data Storage:** While `AsyncStorage` is suitable for non-sensitive data, any sensitive tokens (like JWTs) should be stored using `expo-secure-store` which provides hardware-encrypted storage.
3.  **Input Validation:** The project uses `zod` and `react-hook-form`, which is a best practice for client-side validation. Ensure that server-side validation mirror these schemas.
4.  **Data Fetching:** Currently, the app uses a manual `handleAuth` mock. For real API calls, a secure and robust fetching strategy like `TanStack Query` (React Query) should be implemented to handle caching, retries, and loading states.
5.  **Environment Variables:** Ensure that sensitive API keys or base URLs are not hardcoded but managed via `expo-constants` or `.env` files.

## Technical Roadmap

### 1. Adoption of TypeScript
Transitioning the codebase from `.jsx` to `.tsx` will provide:
- Type safety for store states and actions.
- Improved developer experience with better Autocomplete and early error detection.
- Clearer documentation of data structures (e.g., Event and User objects).

### 2. Enhanced Data Management
- **TanStack Query:** Implement for all API interactions to reduce boilerplate and improve performance.
- **Zustand Optimizations:** Continue using Zustand for global UI state, ensuring selectors are used to prevent unnecessary re-renders.

### 3. Improved UI/UX
- **Loading & Error States:** Implement global loading overlays and error boundary components.
- **Theming:** Leverage NativeWind v4 features for more dynamic theming and better support for dark mode across all components.
- **Expo Router Features:** Utilize advanced Expo Router features like shared element transitions and API routes for backend-less experiments.

### 4. Advanced Security
- **SecureStore Integration:** Move authentication tokens from `AsyncStorage` to `expo-secure-store`.
- **Biometric Authentication:** Consider adding `expo-local-authentication` for sensitive actions or app entry.

### 5. Testing Strategy
- **Unit Testing:** Implement `jest` and `react-test-renderer` for business logic and component testing.
- **End-to-End Testing:** Use `Maestro` or `Playwright` (for web) to ensure critical user journeys (Sign In -> Create Event) remain functional.

## Summary of Changes Made
- Updated branding from "TicketFlow" to "EventFlow".
- Upgraded Zustand usage to latest named exports.
- Added `isLoading` state to `useAuthStore` for better UI synchronization.
- Implemented persistent storage for authentication state using `AsyncStorage`.
- Resolved dependency conflict with `@react-native-community/datetimepicker`.

## Backend Integration

A Node.js/Express backend has been initialized in the `server/` directory.

### How to Start the Server
1. Navigate to the server directory: `cd server`
2. Install dependencies: `npm install`
3. Start the server: `node index.js`

The server runs on port 3000 by default and includes a `/health` endpoint for monitoring.

### Future Server Tasks
- Implement real JWT authentication.
- Integrate with a database (e.g., PostgreSQL or MongoDB) for event and user data.
- Implement file uploads for event images.
