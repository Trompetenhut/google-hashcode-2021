import {Intersection} from "./Intersection";

export class Output {

    private intersections: Intersection[] = [];

    public addIntersections(intersections: Intersection[]): void {
        this.intersections = intersections;
    }

    public toString(): string {
        const lines: string[] = [`${this.intersections.length}`];

        for (const intersection of this.intersections) {
            lines.push(`${intersection.id}`);
            lines.push(`${intersection.trafficLights.length}`);
            for (const trafficLight of intersection.trafficLights) {
                lines.push(`${trafficLight.streetName} ${trafficLight.greenInSeconds}`);
            }
        }

        return lines.join('\n');
    }
}
