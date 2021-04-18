import { Accessory } from "./accessory/Accessory";
import { AccessoryConfig } from "./accessory/AccessoryConfig";
import { AccessoryFactory } from "./accessory/AccessoryFactory";
import { Face } from "./face/Face";
import { FaceConfig } from "./face/FaceConfig";
import { FaceFactory } from "./face/FaceFactory";
import { FacialHair } from "./facial-hair/FacialHair";
import { FacialHairConfig } from "./facial-hair/FacialHairConfig";
import { FacialHairFactory } from "./facial-hair/FacialHairFactory";
import { Hair } from "./hair/Hair";
import { HairConfig } from "./hair/HairConfig";
import { HairFactory } from "./hair/HairFactory";
import { Head } from "./Head";
import { HeadConfig } from "./HeadConfig";
import { Mask } from "./mask/Mask";
import { MaskConfig } from "./mask/MaskConfig";
import { MaskFactory } from "./mask/MaskFactory";

export class HeadFactory {
    static buildHead(config: HeadConfig): Head {
        let head: Head = new Head();
        
        if (config.hair) {
            
            let hairConfig: HairConfig = { name: ""};

            if (typeof config.hair === "string") {
                hairConfig.name = config.hair;
            } else {
                hairConfig = config.hair;
            }

            if (!hairConfig.skinColor) {
                hairConfig.skinColor = config.skinColor;
            }

            if (!hairConfig.hairColor) {
                hairConfig.hairColor = config.fillColor;
            }

            if (!hairConfig.strokeColor) {
                hairConfig.strokeColor = config.strokeColor;
            }

            if (!hairConfig.accentColor) {
                hairConfig.accentColor = config.accentColor;
            }

            let hair: Hair | null = HairFactory.buildHair(hairConfig);

            if (hair) {
                head.setHair(hair);
            }
        }

        if (config.face) {
            
            let faceConfig: FaceConfig = { name: ""};

            if (typeof config.face === "string") {
                faceConfig.name = config.face;
            } else {
                faceConfig = config.face;
            }

            if (!faceConfig.strokeColor) {
                faceConfig.strokeColor = config.strokeColor;
            }

            if (!faceConfig.accentColor) {
                faceConfig.accentColor = config.strokeColor;
            }


            let face: Face | null = FaceFactory.buildFace(faceConfig);

            if (face) {
                head.setFace(face);
            }
        }

        if (config.accessory) {

            let accessoryConfig: AccessoryConfig = { name: ""};

            if (typeof config.accessory === "string") {
                accessoryConfig.name = config.accessory;
            } else {
                accessoryConfig = config.accessory;
            }

            if (!accessoryConfig.strokeColor) {
                accessoryConfig.strokeColor = config.strokeColor;
            }

            let accessory: Accessory | null = AccessoryFactory.buildAccessory(accessoryConfig);

            if (accessory) {
                head.setAccessory(accessory);
            }
        }

        if (config.mask) {

            let maskConfig: MaskConfig = { name: ""};

            if (typeof config.mask === "string") {
                maskConfig.name = config.mask;
            } else {
                maskConfig = config.mask;
            }

            if (!maskConfig.strokeColor) {
                maskConfig.strokeColor = config.strokeColor;
            }

            let mask: Mask | null = MaskFactory.buildMask(maskConfig);

            if (mask) {
                head.setMask(mask);
            }
        }

        if (config.facialHair) {

            let facialHairConfig: FacialHairConfig = { name: ""};

            if (typeof config.facialHair === "string") {
                facialHairConfig.name = config.facialHair;
            } else {
                facialHairConfig = config.facialHair;
            }

            if (!facialHairConfig.strokeColor) {
                facialHairConfig.strokeColor = config.strokeColor;
            }

            let facialHair: FacialHair | null = FacialHairFactory.buildFacialHair(facialHairConfig);

            if (facialHair) {
                head.setFacialHair(facialHair);
            }
        }

        return head;
    }
}