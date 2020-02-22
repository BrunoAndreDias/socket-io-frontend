import React, { Suspense, useState } from 'react';
import { List } from 'antd';
import { useTranslation } from 'react-i18next';
import { AddTodo } from './add-todo';

function Title() {
  const { t } = useTranslation();
  return <div style={{ textAlign: 'center', marginBottom: 20 }}>
    {t('title')}
  </div>
}

function TodoList({ socket }) {
  const [list, setList] = useState([]);
  socket.on('all-todo', list => setList(list));

  function removeTodo(item) {
    socket.emit('delete-todo', item);
  }

  return (
    <div style={styles.container}>
      <List
        style={styles.listContainer}
        header={
          <Suspense fallback="loading">
            <Title />
          </Suspense>
        }
        bordered
        dataSource={list}
        renderItem={item => (
          <List.Item
            onClick={() => removeTodo(item)}>
            {item.description}
          </List.Item>
        )}
      />
      <AddTodo socket={socket} />
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  }
}

export default TodoList;
