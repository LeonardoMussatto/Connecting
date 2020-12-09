// Clock Simulator
// should receive a timezone
/* TIME CONVERSION
*  1min = 60.000ms
*  1h = 3.600.000ms
*  24h = 8.64.00.000ms
*/
// TODO calculate number of ms = 1min, given the amount of time in which 24h should pass
// ENHANCEMENT the base-clock should be defined by the user's current time

const clock = () => {
    let mins = 0
    let hours = 0
    setInterval(() => {
        mins += 1
        if (mins===60) {
            hours += 1
            mins = 0
        }
    }, 420);
    setInterval(() => {
        console.log(hours)
    }, 60000);
}

export default clock