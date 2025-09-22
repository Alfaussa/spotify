import type { IBase, Itrack, TId, TImageUrl } from "./music.types";

export interface IPlayList extends IBase{
    name: string,
    description?: string,
    tracks: Itrack[],
    coverImage: TImageUrl,
    owner: {
        id: TId,
        displayName: string,
        isPremium: boolean
    }
    isPublic:boolean,
    followers: number

}