import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTM5MmMwMGM3NzY1MTk3ZjU2ZjIwZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzQ0NDEzOSwiZXhwIjoxNjQzNzAzMzM5fQ.tBs_WkyBWd0NWM9QLe4TZj9IalGQYjalu1C7NSIKOIw";
export const publicRequest = axios.create({
    baseURL: BASE_URL
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer${TOKEN}` }
})