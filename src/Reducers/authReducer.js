const initialState={
    authError:null
}
const authreducer =(state=initialState,action)=>{
    switch(action.type)
    {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError:'Login failed'
            }

        case 'LOGIN_SUCCESS':
        console.log('login success')
        return{
            ...state,
            authError:null
        }
        case 'LOGOUT_SUCCESS':
            return state;
           
         case 'SIGNUP_SUCCESS':
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            return { 
                ...state,
                authError:action.err.message
            }
        default:
            return state
    }
}
export default authreducer;