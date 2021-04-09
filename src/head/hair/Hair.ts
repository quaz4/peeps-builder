import { Part } from "../../Part"

export class Hair implements Part {
    constructor(
        protected strokeColor?: string,
        protected skinColor?: string,
        protected hairColor?: string,
        protected accentColor?: string
    ) {}

    build(): string {
        throw new Error("Method not implemented.");
    }
}