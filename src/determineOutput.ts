import {Context} from "./Context";
import {Output} from "./Output";
import {Intersection} from "./Intersection";
import {TrafficLight} from "./TrafficLight";

export function determineOutput(context: Context): Output {
    const output: Output = new Output();

    const intersections: Intersection[] = [];

    intersections.push(this.addIntersection());

    output.addIntersections(intersections);

    return output;
}

this.addIntersection = function () {
    const trafficLights: TrafficLight[] = [];

    const trafficLight: TrafficLight = {
        streetName: 'rue-d-amsterdam',
        greenInSeconds: 2
    };

    trafficLights.push(trafficLight);
    const intersection: Intersection = {
        id: 1,
        trafficLights
    };

    return intersection;
}
