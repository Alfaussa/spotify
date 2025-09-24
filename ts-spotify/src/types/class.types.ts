import { Howl } from 'howler'
import type { Itrack } from './music.types'
import type { IPlayerState } from './player.types'

export class SpotifyPlayer {
	private audio: Howl | null = null
	private state: IPlayerState

	constructor() {
		this.state = {
			currentTrack: null,
			queue: [],
			history: [],
			isPlaying: false,
			volume: 0.7,
			currentTime: 0,
			repeatMode: 'off',
			isShuffling: false
		}
	}

	play(track?: Itrack): void {
		if (track) {
			this.loadTrack(track)
		}
		this.audio?.play()
		this.state.isPlaying = true
	}

	private loadTrack(track: Itrack): void {
		this.audio = new Howl({
			src: [track.audioUrl],
			volume: this.state.volume
		})
		this.state.currentTrack = track
	}

	seek(time: number): void {
		this.audio?.seek(time)
	}
}
