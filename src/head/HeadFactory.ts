import { Cheeky } from "./face/Cheeky";
import { Face } from "./face/Face";
import { FaceFactory } from "./face/FaceFactory";
import { Hair } from "./hair/Hair";
import { HairFactory } from "./hair/HairFactory";
import { Head } from "./Head";
import { HeadConfig } from "./HeadConfig";

export class HeadFactory {
    static buildHead(config: HeadConfig): Head {
        let head: Head = new Head();
        
        if (config.hair) {
            
            let hair: Hair | null = HairFactory.buildHair(config.hair);

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

        return head;
    }
}