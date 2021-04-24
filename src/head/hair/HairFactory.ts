import { Afro } from "./Afro";
import { BangsOne } from "./BangsOne";
import { Beanie } from "./Beanie";
import { Bun } from "./Bun";
import { Hair } from "./Hair";
import { HairConfig } from "./HairConfig";
import { MediumThree } from "./MediumThree";
import { NoHair } from "./NoHair";

export class HairFactory {
    static buildHair(config: HairConfig): Hair | null {
        switch (config.name) {
            case "Afro":
                return new Afro(config.strokeColor, config.skinColor, config.hairColor);
            case "BangsOne":
                return new BangsOne(config.strokeColor, config.skinColor, config.hairColor);
            case "Beanie":
                return new Beanie(config.strokeColor, config.skinColor, config.hairColor, config.accentColor);
            case "Bun":
                return new Bun(config.strokeColor, config.skinColor, config.hairColor);
            case "MediumThree":
                return new MediumThree(config.strokeColor, config.skinColor);
            case "NoHair":
                return new NoHair(config.strokeColor, config.skinColor, config.hairColor, config.accentColor);
            default:
                return null;
        }
    }
}