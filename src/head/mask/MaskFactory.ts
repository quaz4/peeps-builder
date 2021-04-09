import { Mask } from "./Mask";
import { MaskConfig } from "./MaskConfig";
import { MedicalMask } from "./MedicalMask";
import { Respirator } from "./Respirator";

export class MaskFactory {
    static buildMask(config: MaskConfig): Mask | null {
        switch (config.name) {
            case "MedicalMask":
                return new MedicalMask(config.strokeColor, config.fillColor);
            case "Respirator":
                return new Respirator(config.strokeColor, config.fillColor);
            default:
                return null;
        }
    }
}