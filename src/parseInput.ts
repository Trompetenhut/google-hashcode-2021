import fs from 'fs';
import path from 'path';
import {Context} from "./Context";
import consola from "consola";

export function parseInput(fileName: string): Context {
    const filePath: string = path.join('input', fileName);
    const content: string = fs.readFileSync(filePath, {encoding: 'utf8'});
    const [...lines] = content.split('\n');

    const ingredientsAll = new Set<string>();
    let ingredientsArrays: string[];
    const pizzas: string[] = [];

    for (let i = 1; i < lines.length; i++) {
        const ingredients = lines[i].split(' ');
        ingredients.splice(0, 1);

        for (let ingredient of ingredients) {
            consola.start('ingredient ' + ingredient);
            ingredientsAll.add(ingredient);
        }
    }
    ingredientsArrays = [...ingredientsAll.values()];
    consola.start('ingredient ' + ingredientsArrays.toString());

    for (let i = 1; i < lines.length - 1; i++) {
        const ingredients = lines[i].split(' ');
        ingredients.splice(0, 1);

        pizzas[i - 1] = '';

        for (let asd of ingredientsArrays) {
            if (ingredients.indexOf(asd) !== -1) {
                pizzas[i - 1] += '1';
            } else {
                pizzas[i - 1] += '0';
            }
        }
    }
    consola.start('ingredient ' + pizzas.toString());

    const teams = lines[0].split(' ');

    return new Context(
        pizzas,
        Number(teams[1]),
        Number(teams[2]),
        Number(teams[3]),
    );
}
