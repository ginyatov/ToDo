import React from "react";
import { render } from "react-dom";

import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";

import { App } from "./App";
import "./styles/index.scss";
import { TodoState } from "./context/TodoState";
import { TodoModalDetail } from "./components/Todo/TodoModalDetail";
import { TodoModalEdit } from "./components/Todo/TodoModalEdit";

render(
  <ConfigProvider locale={ruRU}>
    <TodoState>
      <TodoModalDetail />
      <TodoModalEdit />
      <App />
    </TodoState>
  </ConfigProvider>,
  document.getElementById("root")
);
