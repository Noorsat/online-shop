const initialState = [
    {
        types:[]
    }
]

export const typeReducer =  (state = initialState, action) => {
    switch (action.type){
        case "FETCH_TYPES":
            return {...state, types: action.payload}

        default: 
            return state;
    }

}