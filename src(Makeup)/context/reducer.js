export function reducer(state, action){
    switch(action.type){
        case "BRANDLIST":
            return {
                ...state
                brandList : [...state.brandList, action.payload.brandList]
            } 

    }

}