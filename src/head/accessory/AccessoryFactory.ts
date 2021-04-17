import { Accessory } from "./Accessory";
import { AccessoryConfig } from "./AccessoryConfig";
import { Glasses } from "./Glasses";
import { GlassesTwo } from "./GlassesTwo";

export class AccessoryFactory {
    static buildAccessory(config: AccessoryConfig): Accessory | null {
        switch (config.name) {
            case "Glasses":
                return new Glasses(config.strokeColor, config.fillColor);
            case "GlassesTwo":
                return new GlassesTwo(config.strokeColor, config.fillColor);
            default:
                return null;
        }
    }
}