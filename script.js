let songInfo =document.querySelector('#songInfo')

function Serch(){
let songName = document.querySelector('#song').value;
let sname = document.querySelector('#sname')  
   fetch('https://song.panditsiddharth.repl.co/lyrics?song='+songName)
   .then((responce)=>{
        return responce.text()
   })
   .then((result)=>{
       sname.innerHTML= songName;
       songInfo.innerHTML=result;
   })
   .catch((error)=>{
      console.log("cant found song")
   })

}
