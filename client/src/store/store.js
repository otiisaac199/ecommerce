const { configureStore } = require("@reduxjs/toolkit");
const authReducer = require("./auth-slice");

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
