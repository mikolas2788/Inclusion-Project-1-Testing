// jest won't error out on DOM calls.

const allReservations = () => {
    axios.get('/reservations')
        .then((response) => {
            console.log(response.data)
        })
}

let reserveCalendar = new VanillaCalendar({
    selector: "#reserveCalendar",
    pastDates: false 
})
// console.log(document.querySelector('p').innerHTML);
