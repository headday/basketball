

const teamsLoaded = (teams) =>{
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
const authSucces = (user) =>{
    return{
        type:'LOGIN',
        payload:user
    }
}
const trackedPlayerUpdate = (userID) =>{
    return{
        type: "TRACKED_PLAYERS_UPDATE",
        payload:userID
    }
}
const countPlayersUpdate = (count) =>{
    return{
        type: "COUNT_PLAYERS_UPDATE",
        payload:count
    }
}

export {
    teamsLoaded,
    loadElems,
    activePageSet,
    playersLoaded,
    authSucces,
    trackedPlayerUpdate,
    countPlayersUpdate
};
