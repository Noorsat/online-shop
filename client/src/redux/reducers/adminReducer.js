const initialState = {
    isLogin:false
}

export const adminReducer = (state = initialState, action)  => {
    switch (action.type){
        case "SUCCESS_LOGIN" :
            return {...state, isLogin:true }
        case "LEAVE_ADMIN":
            return {...state, isLogin:false }
        default:
            return state;
    }
}
