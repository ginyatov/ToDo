import { Button, Form, Input, Modal } from "antd";
import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { ITodo } from "../../context/todoReducer";
import { fakeDuration } from "../../helpers/functions";

export const TodoModalEdit = () => {
  const {
    todos,
    idChouseTodo,
    editTodo,
    handlerEditTodo,
    updateTodo,
  } = useContext(TodoContext);

  const currentTodo = todos.find((todo) => todo.id === idChouseTodo)!;

  const [fakeLoading, setFakeLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setFakeLoading(true);
    const todo: ITodo = {
      ...currentTodo,
      title: values[`title-${currentTodo.id}`].trim(),
      description:
        values[`description-${currentTodo.id}`] &&
        values[`description-${currentTodo.id}`].trim(),
      completed: false,
    };

    fakeDuration(200).then(() => {
      updateTodo(todo);
      setFakeLoading(false);
      handlerEditTodo();
    });
  };

  const htmlModal = editTodo ? (
    <Modal
      centered
      title="Редактирование задачи"
      visible={editTodo}
      destroyOnClose={true}
      onCancel={() => {
        handlerEditTodo();
      }}
      width={675}
      className="todo-modal"
      footer={null}
    >
      <Form
        name={`todoEditForm-${currentTodo.id}`}
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          [`title-${currentTodo.id}`]: currentTodo.title,
          [`description-${currentTodo.id}`]:
            currentTodo.description && currentTodo.description,
        }}
      >
        <Form.Item
          label="Задача"
          name={`title-${currentTodo.id}`}
          rules={[
            {
              required: true,
              message: "Пустое поле!",
              whitespace: true,
            },
          ]}
        >
          <Input autoFocus />
        </Form.Item>

        <Form.Item label="Описание" name={`description-${currentTodo.id}`}>
          <Input.TextArea autoSize={{ minRows: 3 }} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={fakeLoading}
            loading={fakeLoading}
          >
            Обновить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  ) : null;

  return htmlModal;
};
