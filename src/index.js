import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import axios from 'axios'

import reducer from './reducers'
import App from './components/index'


import { Auth0Provider } from "@auth0/auth0-react";

import 'semantic-ui-css/semantic.min.css'



// const start = async () => {
//     const IP = process.env.REACT_APP_SERVER
//     let response = null
//     try {
//         response = await axios.get(`${IP}`, {
//             headers: {
//                 Authorization: localStorage.getItem('token')
//             }
//         })
//     } catch(e) {
//         console.log(e)
//     }


//     console.log("response", response)
//     const initState = {
//         auth: {
//             authenticated: response === null ? response : response.data
//         }
//     }


//     const store = createStore(reducer, initState, applyMiddleware(reduxThunk))

//     ReactDOM.render(
//         <Auth0Provider
//             domain="qianhao.us.auth0.com"
//             clientId="n7SUj53FMNjQq226jttnVYSbRYl8kIVb"
//             // redirectUri={window.location.origin}
//             redirectUri={process.env.REACT_APP_AUTH0}
//         >
//             <Provider store={store}>
//                 <BrowserRouter>
//                     <App/>
//                 </BrowserRouter>
//             </Provider>
//         </Auth0Provider>
//         , document.querySelector('#root')
//     )



// }

// start()




// function createThunkMiddleware(extraArgument) {
//     return ({ dispatch, getState }) => next => action => {
//       if (typeof action === 'function') {
//         return action(dispatch, getState, extraArgument);
//       }
  
//       return next(action);
//     };
//   }
  
//   const thunk = createThunkMiddleware();
  







// ======
const initState = {
    auth: {
        authenticated: localStorage.getItem('token')
    }
}



const store = createStore(reducer, initState, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Auth0Provider
        domain="qianhao.us.auth0.com"
        clientId="n7SUj53FMNjQq226jttnVYSbRYl8kIVb"
        // redirectUri={window.location.origin}
        redirectUri={process.env.REACT_APP_AUTH0}
    >
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Auth0Provider>
    , document.querySelector('#root')
)