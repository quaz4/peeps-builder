import { Face } from "./face/Face";
import { Part } from "../Part";
import { FacialHair } from "./facial-hair/FacialHair";
import { Hair } from "./hair/Hair";
import { Accessory } from "./accessory/Accessory";
import { Mask } from "./mask/Mask";

export class Head implements Part {
    constructor(
        private face?: Face,
        private facialHair?: FacialHair,
        private hair?: Hair,
        private mask?: Mask,
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

    setMask(mask: Mask) {
        this.mask = mask;
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
                    ${this.mask && this.mask.build()}
                </g>
                <g transform='translate(123 338)'>
                    ${this.facialHair && this.facialHair.build()}
                </g>
                <g transform='translate(47 241)'>
                    ${this.accessory && this.accessory.build()}
                </g>
            </g>
        `);
    }
}