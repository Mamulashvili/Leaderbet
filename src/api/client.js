import axios from 'axios';

const BASE_URL = 'https://leader.bet/api/';

const client = axios.create({
  baseURL: BASE_URL
});

export const fetchData = async () => {
  const { data } = await client.get('?app=test');

  return data;
};