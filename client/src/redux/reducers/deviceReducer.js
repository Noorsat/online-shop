const initialState = [
    {
        devices:[]
    }
]

export const deviceReducer =  (state = initialState, action) => {
    switch (action.type){
        case "FETCH_DEVICES":
            return {...state, devices: action.payload}

        default: 
            return state;
    }

}