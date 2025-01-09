function calendar() {
    var d = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekdayName = weekdays[d.getDay()];
    document.getElementById("dotw").innerHTML = weekdayName;

    // Get time of day
    var daytime = getTimeOfDay(d.getHours());
    document.getElementById('daytime').innerHTML = daytime;

    // Get the month, date, and year
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = months[d.getMonth()];
    var date = d.getDate();
    var year = d.getFullYear();
    document.getElementById('month').innerHTML = `${month} ${date}, ${year}`;

    // Format the current time (12-hour format)
    var formattedTime = formatTime(d);
    document.getElementById('time').innerHTML = formattedTime;

    // Update every minute
    setInterval(function() {
        location.reload();
    }, 60000);
}

// Returns time of day based on the hour
function getTimeOfDay(hour) {
    if (hour < 6) return 'Night';
    if (hour < 12) return 'Morning';
    if (hour < 18) return 'Afternoon';
    return 'Evening';
}

// Format time to 12-hour format with AM/PM
function formatTime(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    
    h = h % 12;
    h = h ? h : 12; // 0 becomes 12 for the 12-hour format
    m = checkTime(m);

    return `${h}:${m} ${ampm}`;
}

// Adds a leading zero if time is less than 10
function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}
