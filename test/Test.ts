import { Cheeky } from "../src/head/face/Cheeky";
import { Peep } from "../src/Peep";
import { PeepConfig } from "../src/PeepConfig";
import { Device } from "../src/pose/bust/Device";
import fs from 'fs';
// console.log(new Peep(-350, -150, 1500, 1500, new Device(new Cheeky())).build());

const peep: PeepConfig = {
    x: 0,
    y: 0,
    width: 1050,
    height: 1200,
    head: {
        hair: {
            name: "Afro",
            fillColor: "#AA6026",
            strokeColor: "black"
        },
        face: "Cheeky",
        // accessory: "Glasses"
    },
    pose: {
        
    },
    fillColor: "red"
}

fs.writeFile('test/test.svg', new Peep(peep).build(), "utf8", () => {
    console.log("Written to test.svg");

    console.log(peep.head);
});