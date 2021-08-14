let nums = [1, 1, 0, 1, 1, 1];

class FirstExercise {
  maxConsecutivesOnes(nums) {
    let max = 0;
    let current = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        current = 0;
      } else {
        current++
      }
      if (current > max) {
        max = current;
      }
    }
    return max;
  }
}

let resultado = new FirstExercise().maxConsecutivesOnes(nums);
console.log(resultado)
