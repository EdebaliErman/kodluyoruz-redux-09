import { configureStore } from "@reduxjs/toolkit";
import makroSlice from "./makroSlice";

export const store = configureStore({
    reducer: {
        makro: makroSlice
    }
})