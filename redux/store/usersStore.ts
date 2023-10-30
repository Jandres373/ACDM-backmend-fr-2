import { configureStore } from '@reduxjs/toolkit';
import { users } from '@/redux/slices/users.slice';

const usersStore = configureStore({
  reducer: {
    userReducer: users.reducer
  },
});

export default usersStore;