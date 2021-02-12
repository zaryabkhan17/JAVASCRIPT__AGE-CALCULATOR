function birth() {
    let user = document.getElementById("Date").value;

    let dat = new Date(user).getTime();
    let rightnow = new Date().getTime();
    let result =  rightnow - dat ;
    console.log(result);

    let sec = Math.floor(result * 1000);
    let min = Math.floor(result / (1000 * 60));
    let hours = Math.floor(result / (1000 * 60 * 60));
    let day = Math.floor(result / (1000 * 60 * 60 * 24));
    let month = Math.floor(result / (1000 * 60 * 60 * 24 * 30));
    let age = Math.floor(result / (1000 * 60 * 60 * 24 * 30 * 12));


    document.getElementById("month").innerHTML = month;
    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("age").innerHTML = age;}