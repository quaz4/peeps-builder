import { Cheeky } from "../src/head/face/Cheeky";
import { Peep } from "../src/Peep";
import { PeepConfig } from "../src/PeepConfig";
import { Device } from "../src/pose/bust/Device";

// console.log(new Peep(-350, -150, 1500, 1500, new Device(new Cheeky())).build());

const peep: PeepConfig = {
    x: 0,
    y: 0,
    width: 1050,
    height: 1200,
    head: {
        hair: "Afro",
        face: "Cheeky"
    },
    pose: {
        
    }
}

console.log(new Peep(peep).build());