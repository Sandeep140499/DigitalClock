console.log("connecting");

const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const seconds = document.getElementById('seconds')
// const session = document.getElementById('session')

const clock = setInterval(function time(){
    let element = new Date();
    // console.log(element);
    let hr = element.getHours();
    let min = element.getMinutes();
    let sec = element.getSeconds();
    // let sess = element.getsession();

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

    // if(session > 12){
    //     return(AM);
    // }else(PM);

    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
    // session.textContent = session;

},1000)
