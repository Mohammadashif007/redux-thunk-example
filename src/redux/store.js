import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accountSlice/accountSlice";
import bonusReducer from "./features/bonusSlice/bonusSlice";
import { adminApi } from "./api/adminSlice";

export const store = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer,
        [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(adminApi.middleware),
});
