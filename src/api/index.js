import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } }  = await axios.get(url);
        // we take only the parts that we need from data
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {

    }
}