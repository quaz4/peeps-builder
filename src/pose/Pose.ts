import { Face } from "../head/face/Face";
import { Part } from "../Part";

export abstract class Pose implements Part {
    constructor(
        protected strokeColor?: String,
        protected backgroundColor?: String
    ) {}

    build(): string {
        throw new Error("Method not implemented.");
    }
}