
const initialState = {
    teams : [[]],
    activePage : 0,
    counter: 0,
    loading:true
}
const reducer = (state = initialState,action) =>{
    switch(action.type){
        case'LOAD_TEAMS':
            return{
                ...state,
                teams :action.payload
            };
        case'ACTIVE_PAGE':
            return{
                ...state,
                activePage: action.payload
            }
        case'LOADING':
            return{
                ...state,
                loading:false
            }
        default:
            return state;

    }
        
}
export default reducer