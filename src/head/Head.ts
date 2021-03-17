import { Face } from "./face/Face";
import { Part } from "../Part";
import { FacialHair } from "./facial-hair/FacialHair";
import { Hair } from "./hair/Hair";
import { Accessory } from "./accessory/Accessory";

export class Head implements Part {
    constructor(
        private face?: Face,
        private facialHair?: FacialHair,
        private hair?: Hair,
        private accessory?: Accessory
    ) {}

    setFace(face: Face) {
        this.face = face;
    }

    setFacialHair(facialHair: FacialHair) {
        this.facialHair = facialHair;
    }

    setHair(hair: Hair) {
        this.hair = hair;
    }

    setAccessory(accessory: Accessory) {
        this.accessory = accessory;
    }

    build(): string {
        return (`
            <g transform='translate(225 0)'>
                <g>
                    ${this.hair && this.hair.build()}
                </g>
                <g transform='translate(159 186)'>
                    ${this.face && this.face.build()}
                </g>
                <g transform='translate(123 338)'>
                    ${this.facialHair && this.facialHair.build()}
                </g>
                <g transform='translate(47 241)'>
                    ${this.accessory && this.accessory.build()}
                </g>
            </g>
        `);

        // let head: string = ``;
        
        // if (this.face) {
        //     head += this.face.build();
        // }

        // if (this.facialHair) {
        //     head += this.facialHair.build();
        // }

        // if (this.hair) {
        //     head += this.hair.build();
        // }

        // if (this.accessory) {
        //     head += this.accessory.build();
        // }

        // return head;
    }
}