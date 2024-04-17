import { Axios } from "axios";

const apiKey ="b46f53571aa2fd948fee168a8f2bf9e6";
const baseUrl = 'https://api.openweathermap.org';

const getWeatherData = async (city) =>{
    try{
        const response = await Axios.get(baseUrl, {
            params:{
                q: city,
                apiid: apiKey,
                units: "metric" 
            },
        });
        return response.data;
    }
    catch(error){
        throw error;
    }
};

export {getWeatherData};