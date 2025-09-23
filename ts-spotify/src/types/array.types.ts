import type { TableHTMLAttributes } from "react";
import type { Itrack } from "./music.types";

const recentlyPlyed: Itrack[] = []

const topTracks: ReadonlyArray<Itrack[]> = []
 
type TAudioVisualizerBar = [frequency:number, amplitude:number];
const bars: TAudioVisualizerBar[] = [

    [20, 0.3],
    [40, 0.99]
]