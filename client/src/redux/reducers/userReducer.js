const initialState = {
    isAuth: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN":
            return {
                ...state, isAuth: true
            }
        case "LEAVE_ACCOUNT" : 
            return {
                ...state, isAuth:false
            }
        default:
            return state
    }       
}