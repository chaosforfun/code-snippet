function lastIndexValue(arr, i) {
  let l = arr.children.length - 1;
  let index = l - i;
  return arr.children[index].innerText;
}
function printTime() {
  coderMap = {}
  let total = [].slice.apply(document.querySelectorAll('.confluenceTable tr')).map(tr => {
  let h = lastIndexValue(tr, 1)
  let coder = lastIndexValue(tr, 0)
  coderMap[coder] = coderMap[coder] || 0
  coderMap[coder] += parseInt(h)
  h = parseInt(h, 10) || 0
  return h
  }).reduce((s, h) => s + h, 0)
  console.log(total, coderMap)
}
printTime()
