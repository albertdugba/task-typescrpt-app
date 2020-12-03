import React, { createContext } from "react";

interface AppStateContextProps {
  state: AppState;
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "Todo",
      tasks: [{ id: "c0", text: "Integrate Paystack payment" }],
    },
    {
      id: "2",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Write unit test" }],
    },
    {
      id: "3",
      text: "Done",
      tasks: [{ id: "c3", text: "Prepare to deploy" }],
    },
  ],
};

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};
