import type { Itrack } from "./music.types";

export interface IPlayerState {
    currentTrack: Itrack | null,
    queue: Itrack[],
    history: Itrack[],
    isPlaying: boolean,
    volume: number,
    currentTime: number,
    repeatMode: 'off' | 'one' | 'all',
    isShuffling: boolean
}