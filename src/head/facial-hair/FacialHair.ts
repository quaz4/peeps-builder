import { Part } from "../../Part";

export abstract class FacialHair implements Part {
    build(): string {
        throw new Error("Method not implemented.");
    }
}