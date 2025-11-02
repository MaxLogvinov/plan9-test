import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

const loadFromLocalStorage = (): UserState => {
  const savedState = localStorage.getItem('userState');
  return savedState
    ? JSON.parse(savedState)
    : {
        username: null,
        isAuthenticated: false,
        error: null
      };
};

const saveToLocalStorage = (state: UserState) => {
  localStorage.setItem('userState', JSON.stringify(state));
};

const initialState: UserState = loadFromLocalStorage();

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
        saveToLocalStorage(state);
      } else {
        state.error = 'Введите логин и пароль';
      }
    },
    logout(state) {
      state.username = null;
      state.isAuthenticated = false;
      state.error = null;
      saveToLocalStorage(state);
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  }
});

export const { login, logout, setError } = userSlice.actions;
export default userSlice.reducer;
