// jest won't error out on DOM calls.

const allReservations = () => {
    axios.get('/reservations')
        .then((response) => {
            console.log(response.data)
        })
}

const postReservation = () => {
    axios.post('/reservations')
        .then((response) => {
            console.log(response.data)
        })
}

let calendarDate; 

let reserveCalendar = new VanillaCalendar({
    selector: "#reserveCalendar",
    pastDates: false,
    onSelect: (data, ele) => {
        calendarDate = data.date; 
        let fixedDate = data.date.split(" ").slice(0,3).join(" ")
        let selectedDate = document.getElementById("dateSelector")
        selectedDate.value = fixedDate; 
    }
})

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
// calendar date: "Fri Feb 14 2020 14:53:56 GMT-0500 
// backend date format new Date('21 Feb 2020 17:00:00 GMT-0500')
function reservationSubmit(calendarDate) {
    let date, finalDate, time, firstName, lastName, fullName, email, guests;
    date = document.getElementById("dateSelector").value;
    time = document.getElementById("timeSelector").value;
    firstName = document.getElementById("firstNameSelector").value;
    lastName = document.getElementById("lastNameSelector").value;
    email = document.getElementById("emailSelector").value;
    guests = document.getElementById("guestCountSelector").value;
    fullName = firstName + " " + lastName; 
    finalDate = new Date(dateFormatter(calendarDate, time)); 
    if (reservationFormFilled(date, time, firstName, lastName, email, guests)) {
        axios.post('/reservations', {
            name: fullName,
            slot: finalDate
        })
        .then(function (response) {
            console.log(response)
        })
    } else {
        //error handling
        console.log("failed");
    }
}

function reservationFormFilled(date, time, firstName, lastName, email, guests) {
    if ((Boolean(date) && date !== "Pick from Calendar") &&
        (Boolean(time) && time !== "Click for Availability") &&
        (Boolean(firstName) && Boolean(lastName)) &&
        Boolean(email) && Boolean(guests)) {
            return true;
        } else {
            return false; 
        }
}

function dateFormatter(date, time) {
    // console.log(date, "Formatting"); 
    let splitDate, splitTime, militaryHour, militaryMins, newTime, newDate, finalDate; 
    splitDate = date.split(" ");
    splitTime = time.split(":")
    militaryHour = (parseInt(splitTime[0]) + 12).toString();
    militaryMins = splitTime[1]; 
    newTime = militaryHour + ":" + militaryMins + ":00"
    newDate = [
        splitDate[2], 
        splitDate[1], 
        splitDate[3],
        newTime, 
        splitDate[5]
    ]; 
    finalDate = newDate.join(" ");
    return finalDate;
} 

// console.log(document.querySelector('p').innerHTML);
