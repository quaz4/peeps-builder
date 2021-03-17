import { Face } from "../head/face/Face";
import { Part } from "../Part";

export abstract class Pose implements Part {
    constructor(
        protected face: Face,
        protected strokeColor?: String,
        protected backgroundColour?: String
    ) {}

    build(): string {
        throw new Error("Method not implemented.");
    }
}