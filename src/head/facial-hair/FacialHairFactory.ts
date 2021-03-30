import { FacialHair } from "./FacialHair";
import { FacialHairConfig } from "./FacialHairConfig";
import { Full } from "./Full";

export class FacialHairFactory {
    static buildFacialHair(config: FacialHairConfig): FacialHair | null {
        switch (config.name) {
            case "Full":
                return new Full(config.strokeColor, config.fillColor);
            default:
                return null;
        }
    }
}