function inBounds(x,y){
  if(0<x<200&&0<y<100){
    return true;
  }else{
    return false
  }
}
function draw2dLine(x1,y1,x2,y2){
if(inBounds(x1,y1),inBounds(x2,y2)){
ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.stroke();
}else{
var nx1=x1;
var nx2=x2;
var ny1=y1;
var ny2=y2
var lm=(y2-y1)/(x2-x1);
var lb=y1-lm*x1;
var ay1=lb;
var ay2=200*lm+lb;
var ax1=(0-lb)/lm;
var ax2=(100-lb)/lm;
if(!inBounds(x1,y1)){
if(inBounds(0,ay1)){
nx1=0;
ny1=ay1;
}else{
nx1=ax1;
ny1=0;
}
}
  if(!inbounds(x2,y2)){
    if(inBounds(0,ay2){
      nx2=0;
      ny2=ay2;
    }else{
      nx2=ax2;
     ny2=0;
    }
}
ctx.beginPath();
ctx.moveTo(nx1,ny1);
ctx.lineTo(nx2,ny2);
ctx.stroke();
}
}
function line(ctx,x1,y1,z1,x2,y2,z2){
  ctx.beginPath();
  ctx.moveTo((x1 / z1) + 100, 100 - ((y1 / z1) + 50));
  ctx.lineTo((x2 / z2) + 100, 100 - ((y2 / z2) + 50));
  ctx.stroke();
}
function clear(ctx){
  var c=document.getElementById(id);
  ctx.fillColor='#FFFFFF';
  ctx.fillRect(0,0,200,100);
}
