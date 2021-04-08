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
            name: "BangsOne",
            hairColor: "#f0c9aa",
            strokeColor: "black",
            skinColor: "#FFDBB4"
        },
        face: {
            name: "Cheeky",
        },
        accessory: "Glasses",
        mask: {
            name: "Respirator",
            fillColor: "lightblue",
            strokeColor: "grey"
        }
    },
    pose: "Device",
    strokeColor: "black",
    fillColor: "#FFDBB4"
}

fs.writeFile('test/test.svg', new Peep(peep).build(), "utf8", () => {
    console.log("Written to test.svg");
});