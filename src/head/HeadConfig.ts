import { HairConfig } from "./hair/HairConfig";

export interface HeadConfig {
    face?: string;
    hair?: HairConfig | string;
    facialHair?: string;
    accessory?: string;
    strokeColor?: string;
    fillColor?: string;
}