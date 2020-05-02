import * as actionType from "./const/index"

let initState = {
    data: [],
    keyword: "",
    comment: {}
}
const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_DATA:
            state.data = action.data
            return { ...state }
        case actionType.SEARCH:
            state.keyword = action.data
            console.log(action.data)
            return { ...state }
        case actionType.GET_COMMENT:
            state.comment = action.data
            return { ...state }
        default:
            return { ...state }
    }
}
export default itemReducer