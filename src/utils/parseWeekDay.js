function parseWeekDay(num) {
    var result = ''

    switch (num) {
        case 1: result = 'mon'; break;
        case 2: result = 'tue'; break;
        case 3: result = 'wed'; break;
        case 4: result = 'thu'; break;
        case 5: result = 'fri'; break;
        case 6: result = 'sat'; break;
        case 7: result = 'sun'; break;

        default:
            break;
    }
    return result;
}

module.exports = parseWeekDay;
