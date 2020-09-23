const getData = async (url) =>{
    const res = await fetch(url)

    if(!res.ok){
        alert('fetch error')
    }
    
    return await res.json();
}
const getStats = async () =>{
    const res = await (fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=1&player_ids[]=2`))
    if(!res.ok){
        alert('fetch error')
    }
    
    return await res.json();
}
export  {getData,getStats}