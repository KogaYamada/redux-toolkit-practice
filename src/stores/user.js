import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

// stateの初期値
const INITIAL_STATE = { name: 'koga', id: 1234, skill: ['js'] };

const slice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // reducerを作成するとaction creatorが自動で生成される
    updateName: (state, action) => {
      return { ...state, name: action.payload };
    },
    addSkill: (state, action) => {
      return { ...state, skill: [...state.skill, action.payload] };
    },
  },
});

// 非同期処理
export const asyncUpdateUser = () => {
  return async (dispatch) => {
    const index = Math.floor(Math.random() * 10);
    try {
      const response = await axios.get(url);
      const userName = response.data[index].name;
      dispatch(updateName(userName));
    } catch (err) {
      console.log('error', err);
    }
  };
};
// reducerをexport
export default slice.reducer;

// action creator をexport
export const { addSkill, updateName } = slice.actions;
