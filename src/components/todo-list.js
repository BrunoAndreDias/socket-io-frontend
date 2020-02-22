import React, { Suspense } from 'react';
import { List } from 'antd';
import { useTranslation } from 'react-i18next';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function Title() {
  const { t } = useTranslation();
  return <div style={{ textAlign: 'center' }}>
    {t('title')}
  </div>
}

function TodoList() {
  return (
    <div style={styles.container}>
      <List
        header={<Suspense fallback="loading">
          <Title />
        </Suspense>}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
}

export default TodoList;
