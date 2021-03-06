import React, { useState } from "react";
import {
  NewItemFormContainer,
  NewItemInput,
  NewItemButton,
} from "../styles/styles";
import { useFocus } from "./hooks/useFocus";

interface NewItemFormProps {
  onAdd(text: string): void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();
  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <NewItemFormContainer>
      <NewItemInput
        onKeyPress={handleAddText}
        ref={inputRef}
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
