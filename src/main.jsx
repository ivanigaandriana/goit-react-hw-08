// import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'
import  App  from './app.jsx'
import {store} from './redux/store.js'
import ReactDom from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'

ReactDom.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <App/>
        {/* </PersistGate> */}
    </Provider>
);
