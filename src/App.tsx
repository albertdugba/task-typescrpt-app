import React from "react";
import { AppContainer } from "./styles/styles";
import Column from "./components/Column";
import Card from "./components/Card";

const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="App Scafold" />
      </Column>
      <Column text="In Progress">
        <Card text="Adding Google maps to app" />
      </Column>
      <Column text="To Do">
        <Card text="App Scafold" />
      </Column>
      <Column text="Done">
        <Card text="Write unit testing" />
      </Column>
    </AppContainer>
  );
};

export default App;
