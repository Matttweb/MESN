import { readable } from 'svelte/store';
import { navigate } from 'svelte-navigator';

export const apiURL = readable("http://localhost:3000/");

export const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if(!token) navigate("/signin", {replace: true});
}