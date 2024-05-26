// ----- for Hour hand ----
// total angle = 360 deg
// in 12 hour = 360deg (angle made)
// in 1 hour = 360 /12 = 30deg
// in h hours = 30h deg + m / 2 (m/2: because for minute hand hour hand also affects)


// ------- for minute hand -------
// 1 hour = 60 min
// if in 60 min = 30 deg
// 1 min = 30 / 60 = 1/2 deg
// m min = (1/2)m

//  minute hand rotation
// In 60 min = 360 deg rotate
//     1 min = 360 / 60 = 6 deg
//     m min = 6m deg

// second hand rotation
// In 60 sec = 360 deg rotate
//     1 sec = 360 / 60 = 6 deg in one second
//     s sec = 6s deg

let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function display() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(display, 1000);