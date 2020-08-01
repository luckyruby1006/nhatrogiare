
const initState={
        
}
const authReducer = (state = initState, action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('loginfailll')
            return {
                ...state,
                authError: 'Login failed'

    }
        case 'LOGIN_SUCCESS':
            console.log('login sucess')
            return{
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state;
            default: 
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return{
                ...state,
                authError:action.err.message
            }
}
}
export default authReducer