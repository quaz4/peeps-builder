import { Head } from "./head/Head";
import { HeadFactory } from "./head/HeadFactory";
import { PeepConfig } from "./PeepConfig";
import { Pose } from "./pose/Pose";
import { PoseConfig } from "./pose/PoseConfig";
import { PoseFactory } from "./pose/PoseFactory";

export class Peep {
    constructor(
        private config: PeepConfig
    ) {}

    build(): string {
        let poseConfig: PoseConfig;
        
        if (typeof this.config.pose === "string") {
            poseConfig = { name: this.config.pose }
        } else {
            poseConfig = this.config.pose;
        }

        if (!poseConfig.fillColor) {
            poseConfig.fillColor = this.config.fillColor;
        }

        if (!poseConfig.strokeColor) {
            poseConfig.strokeColor = this.config.strokeColor;
        }

        return (
            `<?xml version="1.0" standalone="no"?>
            <svg viewBox="${this.config.x} ${this.config.y} ${this.config.width} ${this.config.height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                    ${PoseFactory.buildPose(poseConfig)?.build()}
                    ${HeadFactory.buildHead({...this.config.head, fillColor: this.config.fillColor, strokeColor: this.config.strokeColor}).build()}
                </g>
            </svg>`
        );
    }
}