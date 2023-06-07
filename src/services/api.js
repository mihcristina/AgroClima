import axios from 'axios'
import location from '../hook/location'

export default async function getCurrentWeather() {
    const accessKey = '93c49518-b600-4b64-a8cd-ae33feae1787';

    const headers = {
        'X-Meteum-API-Key': accessKey
    };

    const api = axios.create({
        baseURL: 'https://api.meteum.ai',
        headers: headers
    })

    var result = []
    // const [lat, setLatitude] = -20.398259
    // const [long, setLongitude] = -43.507726

    await api.get(`/v1/forecast?lat=52.37125&lon=4.89388`)
    .then((response) => {
        const data = response.data
        const cloudness = data.fact.cloudness
        const condition = data.fact.condition
        const humidity = data.fact.humidity
        const icon = data.fact.icon
        const season = data.fact.season
        result = [cloudness, condition, humidity, icon, season]
    })
    .catch((error) => {
        console.log(error)
    })
    return result

}