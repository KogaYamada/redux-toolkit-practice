import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSkill, updateName, asyncUpdateUser } from './stores/user';

const App = () => {
  const { name, skill } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  return (
    <>
      <h1>ようこそ、{name}</h1>
      <h3>あなたのスキル</h3>
      <ul>
        {skill.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          dispatch(asyncUpdateUser('まいど'));
        }}>
        更新
      </button>
    </>
  );
};

export default App;
