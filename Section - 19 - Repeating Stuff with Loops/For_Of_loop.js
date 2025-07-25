console.log("Hello")

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer','gunners']

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}

for (char of "Hello World!") {
    console.log(char)
}

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn : 91,
    marlon : 72,
    dwayne : 77,
    nadia : 83,
    elvira : 97,
    diedre : 81,
    vonnie : 60
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores)

for (let score of scores) {
    total += score;
}
console.log(total / scores.length)
