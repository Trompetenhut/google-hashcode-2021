import fs from 'fs';
import path from 'path';
import {Context} from "./Context";
import {Street} from "./Street";
import {Car} from "./Car";
import {Intersection} from "./Intersection";

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
            id: (i - 1),
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

    const intersections: Intersection[] = [];

    for (let i = 0; i < maxInteractions; i++) {
        const intersection: Intersection = {
            id: i,
            inputStreets: streets.filter(s => s.end === i),
            outputStreets: streets.filter(s => s.start  === i),
        }
        intersections.push(intersection);
    }

    return new Context(
        intersections,
        streets,
        cars,
        maxSeconds,
        maxInteractions,
        score
    );
}
