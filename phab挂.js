let list = document.querySelector('.phui-oi-list-view')
let aList = list.querySelectorAll('.phui-oi-link')
let windowList = []
let limit = 30
aList.forEach((a, i) => {
  if (i >= limit) return
  windowList.push(window.open(a.href))

})

windowList.forEach(w => {
  w.eval(`
  document.querySelector('#audit-action').value = 'accept'
  document.querySelector('button[name="__submit__"]').click()
  `)
})
