function getEn(table, baseIndex) {
    let str = '';
    Array.from(table.querySelectorAll('tr'))
        .forEach((tr) => {
            let tds = Array.from(tr.children)
            str += `"${tds[baseIndex].innerText}":"${tds[baseIndex + 1].innerText}",\n`;
        });
    console.log(str);
    return str;
}
