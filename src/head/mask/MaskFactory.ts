
import { Mask } from "./Mask";
import { MaskConfig } from "./MaskConfig";
import { Respirator } from "./Respirator";

export class MaskFactory {
    static buildMask(config: MaskConfig): Mask | null {
        switch (config.name) {
            case "Respirator":
                return new Respirator(config.strokeColor, config.fillColor);
            default:
                return null;
        }
    }
}