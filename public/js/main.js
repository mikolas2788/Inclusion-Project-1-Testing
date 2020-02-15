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

let reserveCalendar = new VanillaCalendar({
    selector: "#reserveCalendar",
    pastDates: false,
    onSelect: (data, ele) => {
        calendarDate = data.date; 
        let fixedDate = data.date.split(" ").slice(0,3).join(" ")
        let selectedDate = document.getElementById("dateSelector")
        selectedDate.value = fixedDate; 
        console.log(data.date)
    }
})

function reservationSubmit(calendarDate) {
    let date, finalDate, time, firstName, lastName, fullName, email, guests;
    date = document.getElementById("dateSelector").value;
    time = document.getElementById("timeSelector").value;
    firstName = document.getElementById("firstNameSelector").value;
    lastName = document.getElementById("lastNameSelector").value;
    email = document.getElementById("emailSelector").value;
    guests = document.getElementById("guestCountSelector").value;
    fullName = firstName + " " + lastName; 
    finalDate = dateFormatter(calendarDate, time); 
    if (reservationFormFilled(date, time, firstName, lastName, email, guests)) {
        axios.post('/reservations', {
            name: fullName,
            slot: new Date(finalDate)
        })
        .then(function (response) {
            console.log("Success")
        })
        .catch(function (error) {
            console.log(error);
        })
    } else {
        console.log("failed");
    }
}



// console.log(document.querySelector('p').innerHTML);
