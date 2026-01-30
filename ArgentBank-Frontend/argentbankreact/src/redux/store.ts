import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./feature/authSlices";




const persistConfig = {
    key: "auth", // clé stocké sous le nom de auth dans le localStorage
    storage, // utilise le local
};

const persistAuthReducer = persistReducer(persistConfig, authReducer); // Sauvegarde du localStorage et réhydratation du state au démarrage

const store = configureStore({
    reducer: {
        auth: persistAuthReducer,
    },
    middleware: (getDefaultMiddleware: (arg0: { serializableCheck: { ignoredActions: string[]; }; }) => any) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"], //ignore les actions spécifique à Redux Persist
            },
        }),
});

//Redux Persistore pour synchroniser le store avec le stockage local
export const persistor = persistStore(store);
//Typage du store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hook pour utiliser dispatch avec le bon typage
export const useAppDispatch = () => useDispatch<AppDispatch>();


//Exportation du store
export default store;