import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "../redux/filtersSlice"; // Змінено на filterReducer
import { contactsReducer } from "../redux/contactsSlice";
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     whitelist: ['items'],
   
// }
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer, // Змінено на filterReducer
    }})
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })
// export const persistor = persistStore(store);