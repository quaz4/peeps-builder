import { Peep } from "../src/Peep";
import { PeepConfig } from "../src/PeepConfig";
import fs from 'fs';

const peep: PeepConfig = {
    x: 0,
    y: 0,
    width: 1050,
    height: 1200,
    head: {
        hair: {
            name: "Afro",
            fillColor: "#f0c9aa",
            strokeColor: "orange"
        },
        face: {
            name: "Cheeky",
        },
        accessory: "Glasses"
    },
    pose: "Device",
    strokeColor: "black",
    fillColor: "yellow"
}

fs.writeFile('test/test.svg', new Peep(peep).build(), "utf8", () => {
    console.log("Written to test.svg");

    console.log(peep.head);
});