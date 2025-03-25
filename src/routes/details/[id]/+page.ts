import { PUBLIC_API_URL } from "$env/static/public"


export async function load({fetch, params}){
    const {id} = params
    try {
        console.log('fecthing data on server')
        const res = await fetch(`${PUBLIC_API_URL}/surat/${id}`)
        const surats = await res.json()
        console.log(surats)
        return {surats}
    } catch (error) {
        console.log(error)
    }
}