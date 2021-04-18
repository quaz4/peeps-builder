import { Face } from "../head/face/Face";
import { Part } from "../Part";

export abstract class Pose implements Part {
    constructor(
        protected strokeColor?: string,
        protected fillColor?: string,
        protected skinColor?: string,
        protected accentColor?: string
    ) {}

    build(): string {
        throw new Error("Method not implemented.");
    }
}