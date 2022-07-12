import { writable } from "svelte/store";
import { browser } from "$app/env";

export const cart = writable(
    browser && (localStorage.cart || JSON.stringify([]))
);
cart.subscribe((val) => browser && (localStorage.cart = val));