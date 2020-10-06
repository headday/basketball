const getData = async (url) =>{
    const res = await fetch(url)

    if(!res.ok){
        alert('fetch error')
    }
    
    return await res.json();
}
const getStats = async (url) =>{
    const res = await (fetch(url))
    if(!res.ok){
        alert('fetch error')
    }
    
    return await res.json();
}
export {getData,getStats}