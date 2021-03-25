import { Device } from "./bust/Device";
import { Pose } from "./Pose";
import { PoseConfig } from "./PoseConfig";

export class PoseFactory {
    static buildPose(config: PoseConfig): Pose | null {
        switch (config.name) {
            case "Device":
                return new Device(config.strokeColor, config.fillColor);
            default:
                return null;
        }
    }
}