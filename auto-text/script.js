const text = "Java Script is awesome!!"
const inner = document.getElementById('inner')


let index = 0;

function writeText(){
  inner.innerText = text.slice(0, index);
  
  index++;

  if(index > text.length - 1) {
    index = 0; 

  }
}


setInterval(writeText, 100);