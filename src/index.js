
const MASK_4BITS = 0x0F;
const MASK_5BITS = 0x1F;
const MASK_6BITS = 0x3F;
const MASK_7BITS = 0x7F;

module.exports = {
    fromDate, fromFat
};

/**
 * Converts a Date to a Fat DateTime 32bits UInt
 * @param {Date} date
 * @returns {number}
 */
function fromDate(date) {
    if (!(date instanceof Date)) {
        throw new Error('First argument must be a Date object');
    }

    let dateObj = dateToObj(date);

    // Round to near odd seconds
    let secondsFloat = dateObj.seconds + (dateObj.millis / 1000);
    dateObj.seconds = 2 * Math.round(secondsFloat / 2);

    // Convert to Fat DateTime
    let frameDate = 0;
    frameDate |= (dateObj.hours & MASK_5BITS);
    frameDate <<= 6;
    frameDate |= (dateObj.minutes & MASK_6BITS);
    frameDate <<= 5;
    frameDate |= (Math.floor(dateObj.seconds / 2) & MASK_5BITS);
    frameDate <<= 7;
    frameDate |= ((dateObj.year - 1980) & MASK_7BITS);
    frameDate <<= 4;
    frameDate |= (dateObj.month & MASK_4BITS);
    frameDate <<= 5;
    frameDate |= (dateObj.day & MASK_5BITS);

    return frameDate;
}

/**
 * Converts a Fat DateTime 32bits UInt to a Javascript Date
 * @param {number} fatDate
 * @returns {Date}
 */
function fromFat(fatDate) {
    if (typeof fatDate != 'number') {
        throw new Error('First argument must be a number');
    }

    // Lower 16 bits
    let day = fatDate & MASK_5BITS;
    let month = (fatDate >> 5) & MASK_4BITS;
    let year = 1980 + ((fatDate >> 9) & MASK_7BITS);

    // Upper 16 bits
    fatDate >>= 16;
    let seconds = 2 * (fatDate & MASK_5BITS);
    let minutes = (fatDate >> 5) & MASK_6BITS;
    let hours = (fatDate >> 11) & MASK_5BITS;

    return new Date(Date.UTC(year, month, day, hours, minutes, seconds, 0));
}

/**
 * Extracts the data (seconds, millis, hours, etc) from a Date object
 * @param {Date} date
 * @returns {Object}
 */
function dateToObj(date) {
    return {
        millis: date.getUTCMilliseconds(),
        seconds: date.getUTCSeconds(),
        minutes: date.getUTCMinutes(),
        hours: date.getUTCHours(),
        day: date.getUTCDate(),
        month: date.getUTCMonth(),
        year: date.getUTCFullYear()
    };
}