import { Angry } from "./Angry";
import { Awe } from "./Awe";
import { Cheeky } from "./Cheeky";
import { Face } from "./Face";
import { FaceConfig } from "./FaceConfig";

export class FaceFactory {
    static buildFace(config: FaceConfig): Face | null {
        switch (config.name) {
            case "Angry":
                return new Angry(config.strokeColor);
            case "Awe":
                return new Awe(config.strokeColor, config.eyeColor);
            case "Cheeky":
                return new Cheeky(config.strokeColor);
            default:
                return null;
        }
    }
}