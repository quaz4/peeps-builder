import { BlazerBlackTee } from "./bust/BlazerBlackTee";
import { ButtonShirtOne } from "./bust/ButtonShirtOne";
import { ButtonShirtTwo } from "./bust/ButtonShirtTwo";
import { Coffee } from "./bust/Coffee";
import { Device } from "./bust/Device";
import { Dress } from "./bust/Dress";
import { Pose } from "./Pose";
import { PoseConfig } from "./PoseConfig";

export class PoseFactory {
    static buildPose(config: PoseConfig): Pose | null {
        switch (config.name) {
            case "BlazerBlackTee":
                return new BlazerBlackTee(config.strokeColor, config.fillColor);
            case "ButtonShirtOne":
                return new ButtonShirtOne(config.strokeColor, config.fillColor);
            case "ButtonShirtTwo":
                return new ButtonShirtTwo(config.strokeColor, config.fillColor);
            case "Coffee":
                return new Coffee(config.strokeColor, config.fillColor);
            case "Device":
                return new Device(config.strokeColor, config.fillColor);
            case "Dress":
                return new Dress(config.strokeColor, config.fillColor);
            default:
                return null;
        }
    }
}