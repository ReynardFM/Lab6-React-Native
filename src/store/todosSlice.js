import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: 1, text: 'Learn Redux', status: 'pending' },
        { id: 2, text: 'Build Todo App', status: 'pending' },
        { id: 3, text: 'Master State Management', status: 'pending' },
    ],
    filter: 'all', // 'all', 'pending', 'ongoing', 'completed'
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                status: 'pending',
            });
        },
        startTodo: (state, action) => {
            const todo = state.items.find(t => t.id === action.payload);
            if (todo) {
                todo.status = 'ongoing';
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find(t => t.id === action.payload);
            if (todo) {
                if (todo.status === 'completed') {
                    todo.status = 'pending';
                } else {
                    todo.status = 'completed';
                }
            }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(t => t.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addTodo, startTodo, toggleTodo, deleteTodo, setFilter } = todosSlice.actions;
export default todosSlice.reducer;
