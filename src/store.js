import counterSlice from "./redux-toolkit/counterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});
export default store;
