

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

export {
    teamsLoaded,
    loadElems,
    activePageSet
};
