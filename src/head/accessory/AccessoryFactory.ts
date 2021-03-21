import { Accessory } from "./Accessory";
import { Glasses } from "./Glasses";

export class AccessoryFactory {
    static buildAccessory(accessory: string): Accessory | null {
        switch (accessory) {
            case "Glasses":
                return new Glasses();
            default:
                return null;
        }
    }
}