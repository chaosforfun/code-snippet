coderMap = {}
let total = [].slice.apply(document.querySelectorAll('.confluenceTable tr')).map(tr => {
let h = tr.children[3].innerText
let coder = tr.children[4].innerText
coderMap[coder] = coderMap[coder] || 0
coderMap[coder] += parseInt(h)
h = parseInt(h, 10) || 0
return h
}).reduce((s, h) => s + h, 0)
console.log(total, coderMap)
