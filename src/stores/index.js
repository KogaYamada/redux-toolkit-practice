import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// 各スライスから受け取る
import userReducer from './user';

const reducer = combineReducers({
  // 作成したスライスを追加していく
  userInfo: userReducer,
});

const store = configureStore({ reducer });

export default store;
