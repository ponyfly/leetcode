/*
* 4、两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*
* */

function findIndex (nums, target) {
  nums = nums.sort((a, b) => a - b )
  for (let i = 0; i < nums.length; i++) {
    const numFroent = nums[i];
    if (numFroent >= target) return
    for (let j = i + 1; j < nums.length; j++) {
      const numBehiend = nums[j];
      if (numFroent + numBehiend > target) return
      console.log(numFroent, numFroent)
      if (target === numFroent + numBehiend) {
        return [ i, j ]
      }
    }
  }
}

console.log(findIndex( [2, 7, 11, 15], 3))
