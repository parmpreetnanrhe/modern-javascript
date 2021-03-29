"use strict;";

class Pipe {
  constructor(size, label, unit) {
    this.size = size;
    this.label = label;
    this.unit = unit;
  }
}
class PipeSet {
  constructor(number, pipe) {
    this.number = number;
    this.pipe = pipe;
  }
}
class PipeStation {
  constructor(distance, unit) {
    this.distance = distance;
    this.unit = unit;
  }

  calculatePipesRequired(pipes) {
    let length = this.distance;
    const pipesRequired = new Array();
    for (let pipe of pipes) {
      const number = parseFloat(Math.trunc(length / pipe.size));
      const prod = number * pipe.size;
      length = (length - prod).toFixed(2);
      pipesRequired.push(new PipeSet(number, pipe));
    }
    this.pipesRequired = pipesRequired;
  }

  get details() {
    let output = `Pipes required are: `;
    let total = 0;
    this.pipesRequired.forEach((pipeSet) => {
      total += pipeSet.number;
      output += `
        ${pipeSet.number} ${pipeSet.pipe.label} ${pipeSet.pipe.unit} lengths`;
    });
    output += `
    Total pipes required are: ${total} lengths of pipes`;
    return output;
  }
}
const pipes = new Array();
pipes.push(new Pipe(10, "ten", "meter"));
pipes.push(new Pipe(5, "five", "meter"));
pipes.push(new Pipe(1, "one", "meter"));
pipes.push(new Pipe(0.25, "twenty-five", "centimeter"));
pipes.push(new Pipe(0.1, "ten", "centimeter"));
pipes.push(new Pipe(0.05, "five", "centimeter"));
pipes.push(new Pipe(0.01, "one", "centimeter"));
console.log(pipes);
const station = new PipeStation(37.72, "meter");
station.calculatePipesRequired(pipes);
console.log(station.details);
