import React, { useState, useContext } from "react";
import { Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { TodoContext } from "../../context/TodoContext";
interface Props {
  id: number;
}

export const TodoRemove = ({ id }: Props) => {
  const [visible, setVisible] = useState(false);
  const { removeTodo } = useContext(TodoContext);

  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };

  return (
    <Popconfirm
      title="Точно удалить?"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      onConfirm={() => {
        removeTodo(id);
      }}
      onCancel={() => setVisible(false)}
      okText="Да"
    >
      <DeleteOutlined onDoubleClick={() => removeTodo(id)} />
    </Popconfirm>
  );
};
