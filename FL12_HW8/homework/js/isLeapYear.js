function isLeapYear(temp) {
    let year = new Date(temp);
    if (!isNaN(year)) {
        year = year.getFullYear();
        if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
            return `${year} is a leap year`;
        } else {
            return `${year} is not a leap year`;
        }
    } else {
        return year;
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear(1213131313);
isLeapYear(12131313139999999999994534);