import { Angry } from "./Angry";
import { Cheeky } from "./Cheeky";
import { Face } from "./Face";
import { FaceConfig } from "./FaceConfig";

export class FaceFactory {
    static buildFace(config: FaceConfig): Face | null {
        switch (config.name) {
            case "Angry":
                return new Angry(config.strokeColor);
            case "Cheeky":
                return new Cheeky(config.strokeColor);
            default:
                return null;
        }
    }
}