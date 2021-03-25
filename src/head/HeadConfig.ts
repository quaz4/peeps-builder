import { FaceConfig } from "./face/FaceConfig";
import { HairConfig } from "./hair/HairConfig";

export interface HeadConfig {
    face?: FaceConfig | string;
    hair?: HairConfig | string;
    facialHair?: string;
    accessory?: string;
    strokeColor?: string;
    fillColor?: string;
}