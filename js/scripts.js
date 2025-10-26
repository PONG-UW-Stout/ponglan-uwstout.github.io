function load_nav(level = ""){
    document.getElementById("header").innerHTML = 
    `<div class="flex container">
        <a href="` + level + `index.html"><img class="header_logo" src="` + level + `images/pong_banner-logo_v1.webp"></a>
        <nav>
            <ul class="flex">
                <a href="` + level + `about.html"><li class="header_button">About</li></a>
                <a href="` + level + `sponsors.html"><li class="header_button">Sponsors</li></a>
                <a href="` + level + `lan/2025_spooky.html"><li class="header_button">LAN</li></a>
                <a href="` + level + `info.html"><li class="header_button">Events/Info</li></a>
            </ul>
        </nav>
    </div> `;
}

function countdown(elementID, timeString ){
    var targetDate = new Date(timeString).getTime();
    
    setInterval(function(){
        var currentDate = new Date().getTime();

        var distance = targetDate - currentDate;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elementID).innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
    }, 1000);
}