const btnNode= document.querySelector(".btn")
const outoutNode = document.querySelector(".output")
const listNode = document.querySelector(".list")

btnNode.addEventListener('click', useRequest)

function useRequest(){
  clearTable ()
  
  if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(position,error)
      }else{
    outoutNode.innerHTML="Браузер не поддерживает геолокацию"
   }
function position (position){
fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${position.coords.latitude}&long=${position.coords.longitude}`)
.then(response=> {return response.json()})
.then(data=>{addOutput(data)})
}

function addOutput (data){
  outoutNode.innerHTML=""
   listNode.innerHTML+=`<li>Временная зона, в которой находится пользователь:  ${data.timezone}.</li>`
   listNode.innerHTML+=`<li>Местные дата и время:  ${data.date_time_txt}.</li>`
}

function  clearTable (){
  let list=document.querySelectorAll('li')
  if (list.length==0){
    return
  }else{
    list.forEach((element)=>{
      listNode.removeChild(element)
    })
  }
}

function error(){
  outoutNode.innerHTML=`Информация о местоположении недоступна`
}
   }

