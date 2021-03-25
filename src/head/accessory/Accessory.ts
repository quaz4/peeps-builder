import { Part } from "../../Part";

export class Accessory implements Part {
    constructor(
        protected strokeColor?: string,
        protected fillColor?: string
    ) {}

    build(): string {
        throw new Error("Method not implemented.");
    }
}