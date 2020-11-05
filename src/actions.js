

const teamsLoaded = (teams) =>{
    console.log(teams);
    return{
        type: 'LOAD_TEAMS',
        payload : teams
    }
}
const loadElems = () =>{
    return{
        type:'LOADING'
    }
}
const activePageSet = (index) =>{
    return{
        type:'ACTIVE_PAGE',
        payload:index
    }
}
const playersLoaded = (players) =>{
    return{
        type: 'LOAD_PLAYERS',
        payload:players
    }
}

export {
    teamsLoaded,
    loadElems,
    activePageSet,
    playersLoaded
};
