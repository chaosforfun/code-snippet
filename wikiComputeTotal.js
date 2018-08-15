[].slice.apply(document.querySelectorAll('.confluenceTable tr')).map(tr => {
let h = tr.children[6].innerText
h = parseInt(h, 10) || 0
return h
}).reduce((s, h) => s + h, 0)
