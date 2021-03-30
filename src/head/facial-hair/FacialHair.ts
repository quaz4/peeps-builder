import { Part } from "../../Part";

export abstract class FacialHair implements Part {
    constructor(
        protected strokeColor?: string,
        protected fillColor?: string
    ) {}
    
    build(): string {
        throw new Error("Method not implemented.");
    }
}