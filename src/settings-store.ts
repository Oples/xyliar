import { writable } from "svelte/store";

export const store = writable({
    debug: import.meta.env.DEV || false,
});

store.subscribe((value) => {
    // console.log(value);
});

declare global {
    interface Window {
        debug: () => void;
    }
}

window.debug = () => {
    store.update((value) => {
        value.debug = !value.debug;
        return value;
    });
};
