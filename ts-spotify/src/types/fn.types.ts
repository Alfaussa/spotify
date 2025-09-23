import type { Itrack } from "./music.types"

type TPlayFunction = (track:string) => void
type TVolumeFunction = (level:number) => void

const play:TPlayFunction= (track) => {
    console.log(`playing track: ${track}`)
}

function addToQueue(
    track: Itrack,
    position: number = 1,
    isPlayNext: boolean=false
):void{
    //logic
}