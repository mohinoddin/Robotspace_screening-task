console.log('hii')

const timer = document.getElementById('timer')
var h1txt=timer.innerText
const startBtn = document.getElementById('startbtn')
const stopBtn = document.getElementById('stopbtn')
let counter=0,stopTime=true;


  
const  startTimer=()=>{
    if(stopTime==true){
        stopTime=false
        startBtn.style.background='yellow'
        if(stopBtn.style.background=='yellow'){
            stopBtn.style.background='#08df1e'
        }
        timerCycle()
    }
}


const stopTimer=()=>{
    if(stopTime==false){
        stopTime=true
        startBtn.style.background='#08df1e'
        stopBtn.style.background='yellow'
    }
}
const timerCycle=()=>{
    if(stopTime==false){
        counter=parseInt(counter)
        counter=counter+1
        timer.innerHTML= h1txt + " : " + counter;
        setTimeout("timerCycle()",1000)
    }
}

function resetTimer(){
    
    stopTime=true
    startBtn.style.background='#08df1e'
    if(stopBtn.style.background=='yellow'){
        stopBtn.style.background='#08df1e'
    }
    
    counter=0
    timer.innerHTML= h1txt
  
}