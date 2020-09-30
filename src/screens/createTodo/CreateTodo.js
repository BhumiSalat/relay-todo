import { commitMutation } from "react-relay";

import React, { useState } from "react";
import { environment } from "../../Environment";

export default function CreateTodo() {
  const mutation = graphql`
    mutation CreateTodoMutation($input: createTodoInput!) {
      createTodo(input: $input) {
        status
        message
      }
    }
  `;
  const [value, setValue] = useState("");

  const createTodo = () => {
    commitMutation(environment, {
      mutation,
      variables: { input: { title: value } },
      onCompleted: (res) => {
        console.log(res);
        setValue("");
      },
      optimisticUpdater: (store) => {},

      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todos item"
        style={{ width: "50%", height: "30px" }}
        id="title"
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      ></input>
      <button type="submit" style={{ height: "30px" }} onClick={createTodo}>
        Submit
      </button>
    </div>
  );
}
