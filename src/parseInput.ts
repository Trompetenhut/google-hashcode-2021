import fs from 'fs';
import path from 'path';
import {Context} from "./Context";
import consola from "consola";
import {Street} from "./Street";
import {Car} from "./Car";

export function parseInput(fileName: string): Context {
    const filePath: string = path.join('input', fileName);
    const content: string = fs.readFileSync(filePath, {encoding: 'utf8'});
    const [...lines] = content.split('\n');

    const firstLine = lines[0].split(' ');
    const maxSeconds: number = Number(firstLine[0]);
    const maxInteractions: number = Number(firstLine[1]);
    const maxStreets: number = Number(firstLine[2]);
    const maxCars: number = Number(firstLine[3]);
    const score: number = Number(firstLine[4]);

    const streets: Street[] = [];
    const cars: Car[] = [];

    for (let i = 1; i <= maxStreets; i++) {
        const line = lines[i].split(' ');
        const street: Street = {
            start: Number(line[0]),
            end: Number(line[1]),
            name: line[2],
            time: Number(line[3]),
        };
        streets.push(street);
    }

    for (let i = maxStreets + 1; i < maxStreets + 1 + maxCars; i++) {
        const line = lines[i].split(' ');
        const names: string[] = [];

        for (let j = 1; j < line.length; j++) {
            names.push(lines[j])
        }

        const car: Car = {
            streets: Number(line[0]),
            streetNames: names
        };

        cars.push(car);
    }

    consola.start(JSON.stringify(streets));
    consola.start(JSON.stringify(cars));

    return new Context(
        streets,
        cars
    );
}
