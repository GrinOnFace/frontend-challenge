import axios, { AxiosInstance } from 'axios';

const apiKey = process.env.CAT_API_KEY;
const baseUrl = 'https://api.thecatapi.com/v1/images/';
const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
};

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: headers,
});
