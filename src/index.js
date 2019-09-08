import React from 'react';

import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import fbConfig from './config/fbConfig'


import {reduxFirestore,getFirestore} from 'redux-firestore';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import  './index.css';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './Reducers/index';
import thunk from 'redux-thunk';

const initialState={}
const composeEnhancers = process.env.NODE_ENV? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;

const store=createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk.withExtraArgument({
getFirebase,getFirestore
})),
reduxFirestore(fbConfig),
reactReduxFirebase(fbConfig,{
    attachAuthIsReady:true,
    useFirestoreForProfile:true,
    userProfile:'users'
})


))

const app=(
    <Provider store={store}>
       <App />
       </Provider>)


store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(app, document.getElementById('root'));


})






