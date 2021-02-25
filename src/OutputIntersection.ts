import {TrafficLight} from "./TrafficLight";

export class OutputIntersection {

    constructor(
        public id: number,
        public trafficLights: TrafficLight[],
    ) {
    }

}
