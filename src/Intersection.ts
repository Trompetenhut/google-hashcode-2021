import {Street} from "./Street";

export class Intersection {

    constructor(
        public id: number,
        public inputStreets: Street[],
        public outputStreets: Street[],
    ) {
    }

}
