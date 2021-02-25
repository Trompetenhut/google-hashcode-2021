import {Car} from "./Car";
import {Street} from "./Street";

export class Context {

    constructor(
        public readonly streets: Street[],
        public readonly cars: Car[],
        public readonly maxSeconds: number,
        public readonly maxInteractions: number,
        public readonly score: number,
    ) {
    }

}
