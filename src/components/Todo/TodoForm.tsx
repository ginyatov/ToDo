import { Button, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { ITodo } from "../../context/todoReducer";
import { fakeDuration } from "../../helpers/functions";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [fakeLoading, setFakeLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = ({ title, description }: any) => {
    setFakeLoading(true);
    const todo: ITodo = {
      title: title.trim(),
      description: description && description.trim(),
      completed: false,
      id: Date.now(),
      createdAt: new Date(),
    };

    fakeDuration(400).then(() => {
      addTodo(todo);
      setFakeLoading(false);
      form.resetFields();
    });
  };
  return (
    <Form name="todoForm" form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Задача"
        name="title"
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

      <Form.Item label="Описание" name="description">
        <Input.TextArea autoSize={{ minRows: 3 }} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={fakeLoading}
          loading={fakeLoading}
        >
          Добавить задачу
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
