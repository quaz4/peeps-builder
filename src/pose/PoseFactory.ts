import { BlazerBlackTee } from "./bust/BlazerBlackTee";
import { ButtonShirtOne } from "./bust/ButtonShirtOne";
import { Device } from "./bust/Device";
import { Pose } from "./Pose";
import { PoseConfig } from "./PoseConfig";

export class PoseFactory {
    static buildPose(config: PoseConfig): Pose | null {
        switch (config.name) {
            case "BlazerBlackTee":
                return new BlazerBlackTee(config.strokeColor, config.fillColor);
            case "ButtonShirtOne":
                return new ButtonShirtOne(config.strokeColor, config.fillColor);
            case "Device":
                return new Device(config.strokeColor, config.fillColor);
            default:
                return null;
        }
    }
}