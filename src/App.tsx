import React from "react";
import { AppContainer } from "./styles/styles";
import Column from "./components/Column";
import Card from "./components/Card";
import AddNewItem from "./components/AddNewItem";
import { useAppState } from "./components/context/AppStateContext";

const App = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}

      <AddNewItem toggleButtonText="+Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
