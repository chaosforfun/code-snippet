function getEn(table) {
    let str = '';
    Array.from(table.querySelectorAll('tr'))
        .forEach((tr) => {
            let tds = Array.from(tr.children).filter((td) => {
                console.log(td.rowSpan);
                return td.rowSpan <= 1;
            });
            str += `"${tds[0].innerText}":"${tds[1].innerText}",\n`;
        });
    console.log(str);
    return str;
}
