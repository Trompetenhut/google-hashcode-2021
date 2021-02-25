export class Output {

    private readonly outputLibraries: OutputLibrary[] = [];

    public addTeam(teamSize: number, pizzas: number[]): void {
        const library = new OutputLibrary(teamSize, pizzas);

        this.outputLibraries.push(library);
    }

    public toString(): string {
        const lines: string[] = [`${this.outputLibraries.length}`];

        for (const team of this.outputLibraries) {
            lines.push(`${team.id} ${team.pizzas.join(' ')}`);
        }

        return lines.join('\n');
    }
}

class OutputLibrary {

    constructor(
        public readonly id: number,
        public readonly pizzas: number[]
    ) {
    }

}
