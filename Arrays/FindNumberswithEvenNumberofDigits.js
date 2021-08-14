// Given an array nums of integers, return how many of them contain an even number of digits.

const nums = [12, 345, 22, 66, 7896, 1, 2, 33, 44, 55, 66];
// const nums = [222];

class SecondExercise {
  findNumbers(nums) {
    let total = [];
    for (let i = 0; i < nums.length; i++) {
      let numLength = nums[i].toString().length;
      if (numLength % 2 === 0) {
        total.push(i);
      }
    }
    return total.length;
  }
}

let resultado = new SecondExercise().findNumbers(nums);
console.log(resultado);
