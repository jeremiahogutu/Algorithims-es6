// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
//
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

const time_conversion = (s) => {

    const amPm = s.slice(-2);
    const checker = s.substring(0, s.length-2);

    let [hours, minutes, seconds] = checker.split(':');

    if (hours === '12') {
        hours = '00'
    }

    if (amPm === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return hours + ':' + minutes + ':' + seconds;
};

console.log(time_conversion('07:05:45PM'));