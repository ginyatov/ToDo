import { Checkbox, Modal } from "antd";
import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export const TodoModalDetail = () => {
  const {
    todos,
    idChouseTodo,
    showDetail,
    handlerDetail,
    handlerCompleted,
  } = useContext(TodoContext);

  const currentTodo = todos.find((todo) => todo.id === idChouseTodo);

  const classes = ["todo"];

  if (currentTodo?.completed) {
    classes.push("todo_completed");
  }

  const htmlModal = showDetail ? (
    <Modal
      centered
      title="Задача"
      visible={showDetail}
      onCancel={() => {
        handlerDetail();
      }}
      width={675}
      className="todo-modal"
      footer={null}
    >
      <div className={classes.join(" ")}>
        <Checkbox
          onChange={() => handlerCompleted(currentTodo!.id)}
          checked={currentTodo?.completed}
          className="todo__status"
        />

        <div
          className="todo__title todo-modal__title"
          onClick={() => handlerCompleted(currentTodo!.id)}
        >
          {currentTodo?.title}
        </div>
      </div>

      {currentTodo?.description && (
        <div className="todo-modal__description">
          <span>Описание:</span>
          {currentTodo?.description}
        </div>
      )}
    </Modal>
  ) : null;

  return htmlModal;
};
