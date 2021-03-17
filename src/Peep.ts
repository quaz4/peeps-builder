import { Head } from "./head/Head";
import { HeadFactory } from "./head/HeadFactory";
import { PeepConfig } from "./PeepConfig";
import { Pose } from "./pose/Pose";

export class Peep {
    constructor(
        private config: PeepConfig
    ) {

    }

    build(): string {
        return (`
            <?xml version="1.0" standalone="no"?>
            <svg viewBox="${this.config.x} ${this.config.y} ${this.config.width} ${this.config.height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                    ${HeadFactory.buildHead(this.config.head).build()}
                </g>
            </svg>
        `);
    }
}