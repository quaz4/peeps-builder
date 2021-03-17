import { Cheeky } from "./Cheeky";

export abstract class Face {
    constructor(protected strokeColor?: string) {}

    abstract build(): string;
}