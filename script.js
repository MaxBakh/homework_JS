function drawChess(){

var mainBlock = document.querySelector(".main-block");
var block;
var flag = true;

for(var i = 0; i < 8; i++){
 for(var j = 0; j < 8; j++){
 
 if(j == 0){
 flag = !flag;
 }
 
 block = document.createElement("div");
 
 if(flag){
 block.className = "block black";
 }else{
  block.className = "block white";
 }
 
;

mainBlock.appendChild(block);
 flag = !flag;
 
 }
}


}


drawChess();