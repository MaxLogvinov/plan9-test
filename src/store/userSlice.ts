import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: UserState = {
  username: null,
  isAuthenticated: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string; password: string }>) {
      const { username, password } = action.payload;
      if (username && password) {
        state.username = username;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = 'Введите логин и пароль';
      }
    },
    logout(state) {
      state.username = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  }
});

export const { login, logout, setError } = userSlice.actions;
export default userSlice.reducer;
