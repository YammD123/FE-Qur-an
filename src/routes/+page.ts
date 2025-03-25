import { PUBLIC_API_URL } from '$env/static/public'

export async function load({fetch}){
    try {
        console.log('fecthing data on server')
        const res = await fetch(`${PUBLIC_API_URL}/surat`)
        const surats = await res.json()
        return {surats}
    } catch (error) {
        
    }
}