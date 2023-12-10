import { writable } from "svelte/store";

export enum LoopingMode {
    None = 0,
    Track = 1,
    Playlist = 2,
}

export const playerStore = writable({
    playerSeeker: 0,
    playerDuration: 0,
    isPlaying: true,
    volume: 0.5,
    isPaused: false,
    isMuted: false,
    loopingMode: LoopingMode.None,
    isShuffled: false,
    isSeeking: false,
});

playerStore.subscribe((value) => {
    // console.log(value);
});
