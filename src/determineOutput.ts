import {Context} from "./Context";
import {Output} from "./Output";
import {OutputIntersection} from "./OutputIntersection";
import {TrafficLight} from "./TrafficLight";
import {Intersection} from "./Intersection";
import {Car} from "./Car";
import {Street} from "./Street";

export function determineOutput(context: Context): Output {
    const output: Output = new Output();

    const outputInteractions: OutputIntersection[] = [];

    context.cars.sort((a, b) => {
        if (a.streets < b.streets) {
            return -1;
        }
        return 1;
    });

    for (let interaction of context.intersections) {
        outputInteractions.push(this.addIntersection(interaction, context.cars, context.maxSeconds));
    }

    output.addIntersections(outputInteractions);

    return output;
}

this.addIntersection = function (interaction: Intersection, cars: Car[], maxSeconds: number) {
    const trafficLights: TrafficLight[] = [];

    const filteredStreets: Street[] = interaction.inputStreets.filter(s => cars.filter(c => c.streetNames.includes(s.name)));

    for (let street of filteredStreets) {
        const trafficLight: TrafficLight = {
            streetName: street.name,
            duration: 1
        };

        trafficLights.push(trafficLight);
    }

    const intersection: OutputIntersection = {
        id: interaction.id,
        trafficLights
    };

    return intersection;
}
