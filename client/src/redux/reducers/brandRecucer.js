const initialState = [
    {
        brands:[]
    }
]

export const brandReducer =  (state = initialState, action) => {
    switch (action.type){
        case "FETCH_BRANDS":
            return {...state, brands: action.payload}

        default: 
            return state;
    }

}