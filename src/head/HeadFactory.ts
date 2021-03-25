import { Accessory } from "./accessory/Accessory";
import { AccessoryFactory } from "./accessory/AccessoryFactory";
import { Cheeky } from "./face/Cheeky";
import { Face } from "./face/Face";
import { FaceFactory } from "./face/FaceFactory";
import { Hair } from "./hair/Hair";
import { HairConfig } from "./hair/HairConfig";
import { HairFactory } from "./hair/HairFactory";
import { Head } from "./Head";
import { HeadConfig } from "./HeadConfig";

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

            if (!hairConfig.fillColor) {
                hairConfig.fillColor = config.fillColor;
            }

            if (!hairConfig.strokeColor) {
                hairConfig.strokeColor = config.strokeColor;
            }

            let hair: Hair | null = HairFactory.buildHair(hairConfig);

            if (hair) {
                head.setHair(hair);
            }
        }

        if (config.face) {
            
            let face: Face | null = FaceFactory.buildFace(config.face);

            if (face) {
                head.setFace(face);
            }
        }

        if (config.accessory) {
            
            let accessory: Accessory | null = AccessoryFactory.buildAccessory(config.accessory);

            if (accessory) {
                head.setAccessory(accessory);
            }
        }

        return head;
    }
}