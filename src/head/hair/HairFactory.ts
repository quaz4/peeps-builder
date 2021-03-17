import { Afro } from "./Afro";
import { Hair } from "./Hair";

export class HairFactory {
    static buildHair(hair: string): Hair | null {
        switch (hair) {
            case "Afro":
                return new Afro();
                break;
        
            default:
                return null;
        }
    }
}