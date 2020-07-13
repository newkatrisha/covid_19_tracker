import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

// data for the cards
export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } }  = await axios.get(url);
        // we take only the parts that we need from data
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {

    }
}

// data for the chart
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map(dailyData => ({
           confirmed: dailyData.confirmed.total,
           deaths: dailyData.deaths.total,
           date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {

    }
}