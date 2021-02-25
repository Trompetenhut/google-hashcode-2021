import {Context} from "./Context";
import {Output} from "./Output";

export function determineOutput(context: Context): Output {
    const output: Output = new Output();

    output.addTeam(2, [1, 4]);

    return output;
}
