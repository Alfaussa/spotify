export type TId = string
export type TDuration = number
export type TImageUrl = string

type isPublished = boolean
type artist = null | string
type album = undefined | string

export type TStatus = 'idle' | 'loading' | 'succeeded' | 'failed'
export interface IBase {
    id: ID,
    createdAt: string,
    updatedAt: string
}

export interface IArtist extends IBase{
    id: TId,
    name: string,
    image: TImageUrl,
    isVerified:boolean

}
export interface Itrack extends IBase { 
    id: TId,
    artist: IArtist,
    title: string,
    duration: number,
    isPublished: boolean,
    audioUrl: string
}


