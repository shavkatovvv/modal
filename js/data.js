const url = "http://localhost:3600"

export const getdata = async (name) => {
    try {
        const res = await fetch(`${url}/${name}`)
        const data = await res.json()
        return data
    } catch (error) {
        
    }
}


export const getitem = async (name,id) => {
    try {
        const res = await fetch(`${url}/${name}/${id}`)
        const data = await res.json()
        return data
    } catch (error) {
        
    }
}