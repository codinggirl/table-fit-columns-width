/**
 * fit a table's columns width according to another table's columns width
 * @param {String} targetTableSelector a target table selector, it's coumns's width will changed
 * @param {String} sourceTableSelector a source table selector, it's columns's width will used
 */
function fitCoumnsWidth(targetTableSelector, sourceTableSelector) {
    if (!targetTableSelector) {
        throw new Error('parameter targetTableSelector expected')
    }

    if (!sourceTableSelector) {
        throw new Error('parameter sourceTableSelector expected')
    }

    var colCount = 0;
    let items = document.querySelectorAll(`${sourceTableSelector} tr:nth-child(1) td`)
    for(e of items) {
        let colspan = e.getAttribute('colspan')
        if (colspan) {
            colCount += colspan;
        } else {
            colCount++;
        }
    }

    for(var i = 1; i <= colCount; i++) {
        let e = document.querySelector(`${sourceTableSelector} > tbody > tr:first-child > td:nth-child(${i})`)
        const thW = window.getComputedStyle(e).width
        let he = document.querySelector(`${targetTableSelector} > thead th:nth-child(${i})`)
        he.style.width = thW
    }
}

module.exports = fitCoumnsWidth
