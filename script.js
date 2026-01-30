let chosenVenue = "";

function selectVenue(venue) {
    chosenVenue = venue;
    alert(`You have selected ${venue} as your wedding venue.`);
    document.querySelector("#selectedVenue").textContent = venue;
    document.querySelector("#bookingForm").classList.remove("hidden");
    document.querySelector("#confirmation").classList.add("hidden");
}

document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();

    const booking = {
        venue: chosenVenue,
        date: event.target[0].value,
        guests: event.target[1].value,
        name: event.target[2].value,
        email: event.target[3].value
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    document.querySelector("#bookingForm").classList.add("hidden");
    document.querySelector("#confirmation").classList.remove("hidden");
});