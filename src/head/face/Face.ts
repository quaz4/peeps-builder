import { Cheeky } from "./Cheeky";

export abstract class Face {
    constructor(protected strokeColor?: string, protected accentColor?: string) {}

    abstract build(): string;
}