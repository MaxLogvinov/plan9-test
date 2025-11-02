import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: number;
  name: string;
}

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [
    { id: 1, name: 'Установка плинтуса' },
    { id: 2, name: 'Проверка счетчиков' },
    { id: 3, name: 'Ремонт розетки' },
    { id: 4, name: 'Замена лампочек' },
    { id: 5, name: 'Установка выключателя' },
    { id: 6, name: 'Монтаж люстры' },
    { id: 7, name: 'Покраска стен' }
  ]
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
    removeOrder(state, action: PayloadAction<number>) {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    }
  }
});

export const { addOrder, removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
