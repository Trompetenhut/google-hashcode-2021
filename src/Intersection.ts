import {TrafficLight} from "./TrafficLight";

export class Intersection {

    constructor(
        public id: number,
        public trafficLights: TrafficLight[],
    ) {
    }

}
