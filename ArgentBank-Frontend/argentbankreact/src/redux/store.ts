import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./feature/authSlices";



const persistConfig = {
    key: "auth",
    storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        auth: persistAuthReducer,
    },
    middleware: (getDefaultMiddleware: (arg0: { serializableCheck: { ignoredActions: string[]; }; }) => any) =>
        getDefaultMiddleware({
            serializableCheck: { 
                ignoredActions: [ "persist/PERSIST" ], //ignore les actions spécifique à Redux Persist
            },
        }),
});

 //Redux Persistore pour synchroniser le store avec le stockage local
 export const persistor = persistStore(store);
 //Typage du store
 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
 //Exportation du store
    export default store;