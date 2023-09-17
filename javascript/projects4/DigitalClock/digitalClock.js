let clock = document.getElementById('clock');



setInterval(function()
{
    let date = new Date();
    let time = date.toLocaleTimeString();
    clock.innerHTML = time;
})