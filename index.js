console.log("connecting");

const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const seconds = document.getElementById('seconds')
const session = document.getElementById('session')

const clock = setInterval(function time(){
    let element = new Date();
    // console.log(element);
    let hr = element.getHours();
    let min = element.getMinutes();
    let sec = element.getSeconds();
    // let ampm = hr >= 12 ? 'pm' : 'am';
    // var hours = element .getHours();
    // var ses = element.getSession();

    // console.log(hr, min, sec);
    if(hr <  10){
        hr= '0' + hr;
    }

    if(min <  10){
        min = '0' + min;
    }

    if(sec <  10){
        sec = '0' + sec;
    }

    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
    // session.textContent = session;

    if(hr>12)
    {
        document.getElementById('goodMsg').innerText = "Good morning Sir";
        document.getElementById('eatMsg').innerText = "Running time";
        document.getElementById('imageAt').src = "goodnight.png";

    }
    if(hr>16)
    {
        document.getElementById('goodMsg').innerText = "Good afternoon sir";
        document.getElementById('eatMsg').innerText = " Your Lunch are Ready";
        document.getElementById('imageAt').src = "goodafternoon.png";

    }
    if(hr>20)
    {
        document.getElementById('goodMsg').innerText = "Good Evening Sir";
        document.getElementById('eatMsg').innerText = " Your Tea is Ready";
        document.getElementById('imageAt').src = "goodevening.png";

    }
    if(hr>=20)
    {
        document.getElementById('goodMsg').innerText = "Good Night Sir";
        document.getElementById('eatMsg').innerText = "Take good sleep";
        document.getElementById('imageAt').src = "goodnight.png";

    }

   

},1000)

function updateDiv(){
    let wakeElem = document.getElementById('wake');
    let lunchElem = document.getElementById('lunch');
    let napElem = document.getElementById('evening');
    let nightElem = document.getElementById('night');

    document.getElementById('wakeShow').innerText = wakeElem.options[wakeElem.selectedIndex].text;

        console.log(wakeElem.options);

    document.getElementById('lunchShow').innerText = lunchElem.options[lunchElem.selectedIndex].text;

    document.getElementById('napShow').innerText = napElem.options[napElem.selectedIndex].text;

    document.getElementById('nightShow').innerText = nightElem.options[nightElem.selectedIndex].text;
   
}

