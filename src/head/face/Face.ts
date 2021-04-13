import { Cheeky } from "./Cheeky";

export abstract class Face {
    constructor(protected strokeColor?: string, protected eyeColor?: string) {}

    abstract build(): string;
}