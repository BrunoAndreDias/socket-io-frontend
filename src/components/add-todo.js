import React, { useState } from 'react';
import { Input, Button } from 'antd';

export function AddTodo({ socket }) {
  const [description, setDescription] = useState('');

  function createTodo() {
    socket.emit('create-Todo', { description });
    setDescription('')
  }

  return (
    <div style={styles.container}>
      <Input style={styles.input} placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
      <Button style={styles.button} onClick={createTodo}>Create</Button>
    </div>)
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    width: '200px'
  },
  button: {
    width: '100px',
    marginTop: '10px'
  }
}
