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

/**
 * 解法一：双循环，外层取第一元素，内层取相加元素
 * @param nums
 * @param target
 * @returns {number[]}
 */
function findIndex (nums, target) {
  nums = nums.sort((a, b) => a - b )
  for (let i = 0; i < nums.length; i++) {
    const numFroent = nums[i];
    if (numFroent >= target) return
    for (let j = i + 1; j < nums.length; j++) {
      const numBehiend = nums[j];
      if (numFroent + numBehiend > target) return
      if (target === numFroent + numBehiend) {
        return [ i, j ]
      }
    }
  }
}

console.log(findIndex( [2, 7, 11, 15], 3))

/**
 * 替换法，先复制一份原数组，然后循环原数组，为了防止重复，将复制的数组中的对应值替换为null,并且在复制后的数组中寻找另一个相加的值，找到索引，即可找到结果索引
 * @param nums
 * @param target
 * @returns {[]}
 */
function findIndex2(nums, target) {
  let list = [...nums]
  let arr = []
  nums.forEach((item, i) => {
    list.splice(i ,1, null)
    const anthoer = target - item
    if (list.includes(anthoer)) {
      arr = [ i, list.indexOf(anthoer)]
    }
  })
  return arr
}
console.log(findIndex2( [2, 7, 11, 15], 22))

/**
 * map数据类型，每次循环拿当前循环的值和map中的元素进行比较，寻找是否有需要相加的元素，如果有则返回索引，如果没有则推入map
 * 例如：2+7=9  第一次循环map{2:0},第二次循环，当前循环元素时7，map中有2，所以返回搜因
 * @param nums
 * @param target
 * @returns {(any|number)[]}
 */
function findIndex3(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [ map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
}
console.log(findIndex3( [2, 7, 11, 15], 22))
