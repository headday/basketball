
const initialState = {
    auth:true,
    teams : [[]],
    activePage : 0,
    counter: 0,
    loading:true,
    players:[]
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
        case 'LOAD_PLAYERS':
            return{
                ...state,
                players: action.payload
            }
        default:
            return state;

    }
        
}
export default reducer