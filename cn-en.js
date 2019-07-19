function getEn(table, baseIndex) {
    let str = '';
    Array.from(table.querySelectorAll('tr'))
        .forEach((tr) => {
            let tds = Array.from(tr.children)
            str += `"${tds[baseIndex].innerText.replace(/\n/g, '')}":"${tds[baseIndex + 1].innerText.replace(/\n/g, ''))}",\n`;
        });
    console.log(str);
    return str;
}
