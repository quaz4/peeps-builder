import { Angry } from "./Angry";
import { Cheeky } from "./Cheeky";
import { Face } from "./Face";

export class FaceFactory {
    static buildFace(face: string): Face | null {
        switch (face) {
            case "Angry":
                return new Angry();
            case "Cheeky":
                return new Cheeky();
            default:
                return null;
        }
    }
}