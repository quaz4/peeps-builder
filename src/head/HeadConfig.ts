import { AccessoryConfig } from "./accessory/AccessoryConfig";
import { FaceConfig } from "./face/FaceConfig";
import { FacialHairConfig } from "./facial-hair/FacialHairConfig";
import { HairConfig } from "./hair/HairConfig";

export interface HeadConfig {
    face?: FaceConfig | string;
    hair?: HairConfig | string;
    facialHair?: FacialHairConfig | string;
    accessory?: AccessoryConfig | string;
    strokeColor?: string;
    fillColor?: string;
}