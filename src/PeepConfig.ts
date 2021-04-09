import { HeadConfig } from "./head/HeadConfig";
import { PoseConfig } from "./pose/PoseConfig";

export interface PeepConfig {
    x: number,
    y: number,
    width: number,
    height: number,
    head: HeadConfig;
    pose: PoseConfig | string;
    strokeColor?: string;
    fillColor?: string;
    skinColor?: string;
    accentColor?: string;
}