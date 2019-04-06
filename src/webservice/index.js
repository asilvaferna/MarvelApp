import axios from 'axios';
import { BASE_URL, AUTH_TOKEN, AUTH_PRIVATE } from '../config/api';
import md5 from 'js-md5';

const FETCH_LIMIT = 10;

export function configure() {
    axios.defaults.baseURL = BASE_URL;
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}

export function fetchCharacters(offset) {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + AUTH_PRIVATE + AUTH_TOKEN);
    const url = `/characters?ts=${timestamp}&apikey=${AUTH_TOKEN}&hash=${hash.hex()}&limit=${10}&offset=${offset}`;
    return axios.get(url)
}

export function fetchComics(characterId) {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + AUTH_PRIVATE + AUTH_TOKEN);
    const url = `/characters/${characterId}/comics?ts=${timestamp}&apikey=${AUTH_TOKEN}&hash=${hash.hex()}`;
    return axios.get(url);
}