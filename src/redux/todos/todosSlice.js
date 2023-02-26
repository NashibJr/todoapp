import React from "react";
import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      title: "todo one",
      body: "This is todo one",
      completed: false,
    },
    {
      id: nanoid(),
      title: "todo two",
      body: "This is todo two",
      completed: false,
    },
    {
      id: nanoid(),
      title: "todo three",
      body: "This is todo three",
      completed: false,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todosSlice;
