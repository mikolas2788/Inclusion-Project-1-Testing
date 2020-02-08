// jest won't error out on DOM calls.

const allReservations = () => {
    axios.get('/reservations')
        .then((response) => {
            console.log(response.data)
        })
}

// console.log(document.querySelector('p').innerHTML);
