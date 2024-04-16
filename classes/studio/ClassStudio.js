class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScores) {
        this.scores.push(newScores)
    }
    average(){
        let average = 0;
        for (let i = 0; i < this.scores.length; i++) {
            average += this.scores[i];
        };
        average = Math.round(average/this.scores.length * 10) / 10;

        return average;
    }
    status() {
        let status = '';
        if (this.average() < 70) {
            status = 'Rejected'
        } else if (this.average() < 80 && this.average() >= 70) {
            status = 'Probationary'
        } else if (this.average() < 90 && this.average() >= 80) {
            status = 'Reserve'
        } else if (this.average() >= 90) {
            status = 'Accepted'
        } else {
            return 'incorrect input'
        }
        console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`)
    }

} 

let candidate1 = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let candidate2 = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let candidate3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

// console.log(candidate1)
// console.log(candidate2)
// console.log(candidate3)

// candidate1.addScore(83);
console.log(candidate1.average());
candidate1.status();



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.