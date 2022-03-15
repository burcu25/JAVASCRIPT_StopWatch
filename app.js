const playPause = document.getElementById("play-pause");
const sıfırlaTur = document.getElementById("sıfırla-tur");
const turList = document.querySelector(".table");
const watch = document.querySelector(".watch")
const watch_sm = document.getElementById("watch-sm");


const ms = document.getElementById("miliseconds");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");


const ms_sm = document.getElementById("miliseconds-sm");
const seconds_sm = document.getElementById("seconds-sm");
const minutes_sm = document.getElementById("minutes-sm");


let span = playPause.firstElementChild.classList;
let span2 = sıfırlaTur.firstElementChild.classList;



playPause.addEventListener("click",()=>{
    watch_sm.style.visibility = "inherit";
    turList.style.visibility = "inherit";
    timeStart();
    allButtons();
}
)




function timeStart(){ 
    
    if(span.contains("play")){
        
        start = setInterval(()=>{
            
            let min = Number(minutes.innerText);
            let sec = Number(seconds.innerText);
            let mili = Number(ms.innerText);
            
            
            mili ++;
            ms.innerText = mili.toString().padStart(2,0);
            
            
            if(mili === 99){
                sec++;
                seconds.innerText = sec.toString().padStart(2,0);
                ms.innerText = "00";
                
            }else if(sec===60){
                min++;
                minutes.innerText = min.toString().padStart(2,0);
                seconds.innerText = "00";
            }
                  
        },10);
        
        start_sm = setInterval(()=>{
            
            let min = Number(minutes_sm.innerText);
            let sec = Number(seconds_sm.innerText);
            let mili = Number(ms_sm.innerText);
            
            
            mili ++;
            ms_sm.innerText = mili.toString().padStart(2,0);
            
            
            if(mili === 99){
                sec++;
                seconds_sm.innerText = sec.toString().padStart(2,0);
                ms_sm.innerText = "00";
                
            }else if(sec===60){
                min++;
                minutes_sm.innerText = min.toString().padStart(2,0);
                seconds_sm.innerText = "00";
            }
                  
        },10)
        
        
        
        
    }
    else if(span.contains("pause")){
        clearInterval(start);
        clearInterval(start_sm);
  
    }
    
}


function allButtons() {
    
    span.toggle("pause");
    if (span.contains('pause')){
        span.remove("play");
        span2.add("tur");
        span2.remove("sıfırla");
        
    }else{
        span.add("play");
        span2.add("sıfırla");
        span2.remove("tur");
    }
}



let tur = 1;
sıfırlaTur.addEventListener("click", ()=>{

        
    if(span2.contains("tur")){

    
        turList.lastElementChild.innerHTML += `<tr>
                                                <th scope="row">${tur}</th>
                                                <td>${watch_sm.innerText}</td>
                                                <td>${watch.innerText}</td>
                                            </tr>`

        
        minutes_sm.innerText = "00";
        seconds_sm.innerText ="00";
        ms_sm.innerText = "00";
         tur++;
                                            
    }
    else if(span2.contains("sıfırla")){
        turList.lastElementChild.innerHTML = "";
        minutes_sm.innerText = "00";
        seconds_sm.innerText ="00";
        ms_sm.innerText = "00";
        minutes.innerText = "00";
        seconds.innerText ="00";
        ms.innerText = "00";
        tur = 1;

    }

    
})