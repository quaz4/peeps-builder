import { Afro } from "./Afro";
import { BangsOne } from "./BangsOne";
import { Hair } from "./Hair";
import { HairConfig } from "./HairConfig";

export class HairFactory {
    static buildHair(config: HairConfig): Hair | null {
        switch (config.name) {
            case "Afro":
                return new Afro(config.strokeColor, config.fillColor);
            case "BangsOne":
                return new BangsOne(config.strokeColor, config.fillColor);
            default:
                return null;
        }
    }
}