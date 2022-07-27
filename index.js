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

