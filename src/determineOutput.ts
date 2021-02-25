import {Context} from "./Context";
import {Output} from "./Output";
import {OutputIntersection} from "./OutputIntersection";
import {TrafficLight} from "./TrafficLight";
import {Intersection} from "./Intersection";

export function determineOutput(context: Context): Output {
    const output: Output = new Output();


    const outputInteractions: OutputIntersection[] = [];

    for (let interaction of context.intersections) {
        outputInteractions.push(this.addIntersection(interaction));
    }

    output.addIntersections(outputInteractions);

    return output;
}

this.addIntersection = function (interaction: Intersection) {
    const trafficLights: TrafficLight[] = [];

    for (let street of interaction.inputStreets) {
        const trafficLight: TrafficLight = {
            streetName: street.name,
            greenInSeconds: 1
        };

        trafficLights.push(trafficLight);
    }

    const intersection: OutputIntersection = {
        id: interaction.id,
        trafficLights
    };

    return intersection;
}
