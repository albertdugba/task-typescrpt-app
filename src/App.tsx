import React from "react";
import { AppContainer } from "./styles/styles";
import Column from "./components/Column";
import Card from "./components/Card";
import AddNewItem from "./components/AddNewItem";

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="App Scafold" />
      </Column>
      <Column text="In Progress">
        <Card text="Adding Google maps to app" />
      </Column>
      <Column text="Done">
        <Card text="Write unit testing" />
      </Column>
      <AddNewItem toggleButtonText="+Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
