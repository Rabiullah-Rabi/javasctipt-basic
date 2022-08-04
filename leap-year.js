function leapYear(year) {
    if (year % 400 == 0) {
        return false;
    }
    else {
        if (year % 100 == 0) {
            return false;
        }
        else {
            if (year % 4 == 0) {
                return true;
            }
            return false;
        }
    }
}

console.log(leapYear(2024));