# Peeps Builder

![Image generated with peeps builder](https://raw.githubusercontent.com/quaz4/peeps-builder/main/test/test.svg)

Peeps Builder is a Typescript library for building svgs using Pablo Stanley's [Open Peeps](https://www.openpeeps.com/) project.

Parts of this library are based on [react-peeps](https://github.com/CeamKrier/react-peeps) by CreamKrier.

This library doesn't include every part, I'll be adding them if/when I get time. PRs welcome.

## Installation
Available from `npm` with
``` bash
npm install peeps-builder
```

## Usage
``` Typescript
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
            name: "MediumThree",
            strokeColor: "#D698FF",
        },
        face: {
            name: "Cheeky"
        },
        accessory: "Glasses",
        mask: {
            name: "None",
            fillColor: "lightblue",
            strokeColor: "grey"
        }
    },
    pose: {
        name: "ButtonShirtOne",
        fillColor: "grey",
        accentColor: "white",
        strokeColor: "black"
    },
    strokeColor: "black",
    fillColor: "#FFDBB4",
    accentColor: "white",
    skinColor: "#FFDBB4"
}

fs.writeFile('test/test.svg', new Peep(peep).build(), "utf8", () => {
    console.log("Written to test.svg");
});
```

## Options
### Hair
|Name|skinColor|strokeColor|hairColor|accentColor|
|-----|-----|-----|-----|-----|
|Afro|Yes|Yes|No|No|
|BangsOne|Yes|Yes|Yes|No|
|Bun|Yes|Yes|Yes|No|
|Beanie|Yes|Yes|No|Yes|
|NoHair|Yes|Yes|No|No|

### Face
|Name|strokeColor|accentColor|
|-----|-----|-----|
|Angry|Yes|No|
|Awe|Yes|Yes|
|Cheeky|Yes|No|
|Smile|Yes|No|

### Facial Hair
|Name|Color|
|-----|-----|
|Full|Full|

### Accessory
|Name|strokeColor|
|-----|-----|
|Glasses|Yes|
|GlassesTwo|Yes|

### Mask
|Name|strokeColor|fillColor|
|----------|-----|-----|
|MedicalMask|Yes|Yes|
|Respirator|Yes|Yes|

### Pose
|Name|skinColor|strokeColor|fillColor|accentColor|
|-----|-----|-----|-----|-----|
|BlazerBlackTee|No|Yes|Yes|No|
|ButtonShirtOne|Yes|Yes|Yes|No|
|ButtonShirtTwo|No|Yes|Yes|No|
|Coffee|Yes|Yes|Yes|Yes|
|Device|No|Yes|Yes|No|
|Dress|No|Yes|Yes|No|
|SelenaTee|Yes|Yes|No|No|
|ShirtAndCoat|Yes|Yes|Yes|Yes|