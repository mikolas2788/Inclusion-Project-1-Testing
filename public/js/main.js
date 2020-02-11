// jest won't error out on DOM calls.

const allReservations = () => {
    axios.get('/reservations')
        .then((response) => {
            console.log(response.data)
        })
}

let reserveCalendar = new VanillaCalendar({
    selector: "#reserveCalendar",
    pastDates: false,
    onSelect: (data, ele) => {
        let fixedDate = data.date.split(" ").slice(0,3).join(" ")
        let selectedDate = document.getElementById("dateSelector")
        selectedDate.value = fixedDate; 
        console.log(data);
    }
})

// function dateSelector(date) {
//     let selectedDate = document.getElementsByName("dateSelector")
//     selectedDate.value = date; 
// } 

// console.log(document.querySelector('p').innerHTML);
