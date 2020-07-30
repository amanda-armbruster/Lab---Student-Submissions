"use strict"
// 1
let submissions = [
    {
        name: "jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    },

];
// 2
const addSubmission = (array, newName, newScore, newDate) => {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60, 
    };
    array.push(newSubmission);
}
addSubmission(submissions, "amanda", 50, "2020-02-20");
console.log(submissions);

// 3
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index,1);
};

// 4
const deleteSubmissionByName = (array, name) => {
    let targetedIndex = array.findIndex((person) =>{
        return person.name === name;
});
array.splice(targetedIndex,1);

};

// 5
const editSubmission = (array, index, updatedScore) => {
    array[index].score = updatedScore;
    array[index].passed = updatedScore >=60 ? true : false;
}
editSubmission(submissions,2,58);
console.log(submissions);

// 6
const findSubmissionByName = (array, name) => {
    let found = array.find((item) => {
        return item.name === name;
    });
    return found;
}
console.log(findSubmissionByName(submissions,"jane"));






// 7 
const letLowestScore = (array) => {
let lowestScore = array [0];
array.forEach((person)=> {
    if(person.score<lowestScore.score){
        lowestScore= person;
    }
    }); 
    return lowestScore
};

console.log(letLowestScore(submissions));

// 8
const findAverageScore = (array) =>{
let sum=0;
let counter=0;
for(let item of array){
   sum += item.score 
   counter++};   
   return sum/counter;
};

console.log(findAverageScore(submissions));

// 9
const filterPassing = (array) =>{
let scores = array.filter((percent) =>{
    return percent.score >= 60;
});
return scores;
};
console.log(filterPassing(submissions));

// 10
const filter90AndAbove = (array) => {
let scores = array.filter((percent) =>{
    return percent.score >= 90;
});
return scores;
};
console.log(filter90AndAbove(submissions));