import { AccessoryConfig } from "./accessory/AccessoryConfig";
import { FaceConfig } from "./face/FaceConfig";
import { FacialHairConfig } from "./facial-hair/FacialHairConfig";
import { HairConfig } from "./hair/HairConfig";
import { MaskConfig } from "./mask/MaskConfig";

export interface HeadConfig {
    face?: FaceConfig | string;
    hair?: HairConfig | string;
    facialHair?: FacialHairConfig | string;
    accessory?: AccessoryConfig | string;
    mask?: MaskConfig | string;
    strokeColor?: string;
    fillColor?: string;
    skinColor?: string;
}