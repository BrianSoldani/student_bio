document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("").style.height = "250px";
  
  });
  
  document.getElementById("button2").addEventListener("click", function(){
  
    document.getElementById("box").style.backgroundColor = "blue";
  
  });
  
  document.getElementById("button3").addEventListener("click", function(){
  
    document.getElementById("box").style.opacity = "0.25";
  
  });
  
  document.getElementById("button4").addEventListener("click", function(){
  
    document.getElementById("box").style.backgroundColor = "black";
    document.getElementById("box").style.transitionDuration = "2s";
  
  });
  document.getElementById("button5").addEventListener("click", function(){
  
    document.getElementById("box").style.transitionDuration = "0s";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.backgroundColor = "orange";
  
  });