import { Part } from "../../Part"
import { Afro } from "./Afro";

export class Hair implements Part {
    constructor(
        protected strokeColor?: string,
        protected backgroundColor?: string
    ) {}

    build(): string {
        throw new Error("Method not implemented.");
    }
}