"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

// Define types for state and actions
interface AppState {
  isLoading: boolean;
}

interface AppAction {
  type: string;
  payload?: any;
}

interface AppContextType {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}

// Initial state
const initialState: AppState = {
  isLoading: false,
};

// Create context with a default value
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Reducer function to handle state changes
const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

// Hook to manage state with useReducer
const appHookComp = (): AppContextType => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};

// Context provider component
const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const appContext = appHookComp();

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppHook = (): AppContextType => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppHook must be used within an AppContextProvider");
  }

  return context;
};

export default AppContextProvider;
