type ID = string
type Duration = number
type ImageUrl = string

type isPublished = boolean
type artist = null | string
type album = undefined | string

export type TStatus = 'idle' | 'loading' | 'succeeded' | 'failed'
interface IBase {
    id: ID,
    createdAt: string,
    updatedAt: string
}

export interface IArtist extends IBase{
    id: ID,
    name: string,
    image: ImageUrl,
    isVerified:boolean

}
export interface Itrack extends IBase { 
    id: ID,
    artist: IArtist,
    title: string,
    duration: number,
    isPublished: boolean,

}


