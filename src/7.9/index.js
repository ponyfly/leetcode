/*
* 二进制求和

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
*/
function add(a, b) {
  a = a.split('').reverse().map(i => parseInt(i))
  b = b.split('').reverse().map(i => parseInt(i))
  const l = a.length - b.length
  for (let i = 0; i < Math.abs(l); i++) {
    if (l > 0) {
      b.push(0)
    }
    if (l < 0) {
      a.push(0)
    }
  }

  const res = []
  let tmp = 0
  for (let i = 0; i < a.length; i++) {
    const curA = a[i]
    const curB = b[i]

    if (curA + curB === 2) {
      if (tmp === 1) {
        res.push(1)
      } else {
        res.push(0)
      }
      tmp = 1
    } else if (curA + curB === 1) {
      if (tmp === 1) {
        res.push(0)
        tmp = 1
      } else {
        res.push(1)
        tmp = 0
      }
    } else {
      res.push(tmp)
      tmp = 0
    }
  }

  if (tmp === 1) res.push(tmp)

  return res.reverse().join('')
}

console.log(add('1010', '1011'))
