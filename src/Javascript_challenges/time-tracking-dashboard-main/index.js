const weeklyRoutine=()=>{

    document.querySelector(".play .current_hours").innerHTML="10hrs";
    document.querySelector(".play .previous_hours").innerHTML="Previous - 8hrs";

    document.querySelector(".work .current_hours").innerHTML="32hrs";
    document.querySelector(".work .previous_hours").innerHTML="Previous - 36hrs";

    document.querySelector(".study .current_hours").innerHTML="4hrs";
    document.querySelector(".study .previous_hours").innerHTML="Previous - 7hrs";

    document.querySelector(".exercise .current_hours").innerHTML="4hrs";
    document.querySelector(".exercise .previous_hours").innerHTML="Previous - 5hrs";

    document.querySelector(".social .current_hours").innerHTML="5hrs";
    document.querySelector(".social .previous_hours").innerHTML="Previous - 10hrs";

    document.querySelector(".self_care .current_hours").innerHTML="2hrs";
    document.querySelector(".self_care .previous_hours").innerHTML="Previous - 2hrs";

    document.getElementById("weekly").style.color="aliceblue";
    document.getElementById("daily").style.color="rgb(153, 153, 153)";
    document.getElementById("monthly").style.color="rgb(153, 153, 153)";
    
}


const dailyRoutine=()=>{
    document.querySelector(".play .current_hours").innerHTML="1hr";
    document.querySelector(".play .previous_hours").innerHTML="Previous - 2hrs";

    document.querySelector(".work .current_hours").innerHTML="5hrs";
    document.querySelector(".work .previous_hours").innerHTML="Previous - 7hrs";

    document.querySelector(".study .current_hours").innerHTML="0hrs";
    document.querySelector(".study .previous_hours").innerHTML="Previous - 1hr";

    document.querySelector(".exercise .current_hours").innerHTML="1hr";
    document.querySelector(".exercise .previous_hours").innerHTML="Previous - 4hrs";

    document.querySelector(".social .current_hours").innerHTML="1hr";
    document.querySelector(".social .previous_hours").innerHTML="Previous - 3hrs";

    document.querySelector(".self_care .current_hours").innerHTML="0hrs";
    document.querySelector(".self_care .previous_hours").innerHTML="Previous - 1hr";

    document.getElementById("daily").style.color="aliceblue";
    document.getElementById("weekly").style.color="rgb(153, 153, 153)";
    document.getElementById("monthly").style.color="rgb(153, 153, 153)";

}

const monthlyRoutine=()=>{
    document.querySelector(".play .current_hours").innerHTML="23hrs";
    document.querySelector(".play .previous_hours").innerHTML="Previous - 29hrs";

    document.querySelector(".work .current_hours").innerHTML="103hrs";
    document.querySelector(".work .previous_hours").innerHTML="Previous - 128hrs";

    document.querySelector(".study .current_hours").innerHTML="13hrs";
    document.querySelector(".study .previous_hours").innerHTML="Previous - 19hrs";

    document.querySelector(".exercise .current_hours").innerHTML="11hrs";
    document.querySelector(".exercise .previous_hours").innerHTML="Previous - 18hrs";

    document.querySelector(".social .current_hours").innerHTML="21hrs";
    document.querySelector(".social .previous_hours").innerHTML="Previous - 23hrs";

    document.querySelector(".self_care .current_hours").innerHTML="7hrs";
    document.querySelector(".self_care .previous_hours").innerHTML="Previous - 11hrs";

    document.getElementById("monthly").style.color="aliceblue";
    document.getElementById("daily").style.color="rgb(153, 153, 153)";
    document.getElementById("weekly").style.color="rgb(153, 153, 153)";
}