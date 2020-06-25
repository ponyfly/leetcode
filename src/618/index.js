// 两个数组的交集
// 示例
/*
* 输入: nums1 = [1,2,2,1], nums2 = [2,2]
  输出: [2,2]
  *
  输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出: [4,9]
* */

// 方法一：遍历前者，返回结果
const calc = function (arr1, arr2) {
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (arr2.indexOf(item) > -1) {
      result.push(item)
    }
  }
  return result
}
// 方法二：
const calc2 = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (arr2.indexOf(item) === -1) {
      arr1.splice(i, 1)
      i--
    }
  }
  return arr1
}
// 方法三
const calc3 = function (arr1, arr2) {
  let p1 = 0
  let p2 = 0
  const res = []
  arr1 = arr1.sort()
  arr2 = arr2.sort()
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      res.push(arr1[p1])
      p1++
      p2++
    } else if (arr1[p1] < arr2[p2]) {
      p1++
    } else {
      p2++
    }
  }
  return res
}
const nums1 = [1,2,2,1]
const nums2 = [2,2]
console.log(calc3(nums1, nums2))
