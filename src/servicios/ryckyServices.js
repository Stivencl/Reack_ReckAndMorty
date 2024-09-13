export async function getAllRycky(url) {
    return new Promise((resolve, reject) =>{
        fetch(url).then(res => res.json()).then(data => {resolve(data)})
    })
}

export function getRicky({url}){
    return new Promise((resolve, reject) =>{
        fetch(url).then(res => res.json()).then(data => {resolve(data)})
    })
}