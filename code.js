var box = document.getElementById("outputBox");
box.addText = function(text,endline){this.value+=text;if(endline){this.value+="\n";}};

function loadDoc(fname){
  var xhttp; //xhttp object
  var fileObj;
  if(window.XMLHttpRequest){
    //modern browsers
    xhttp = new XMLHttpRequest();
  }else{
    //ie6 and ie5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function(){if(this.readyState==4&&this.status==200){fileObj=this.responseText;}};
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
  return fileObj;
}

doNothing(v){
  return undefined;
}

function getFile(file){
  var x;
  try{
    x = JSON.parse(getFile(file));
  }
  catch(err){
    doNothing(err);
    x = getFile(file);
  }
}

function start(){
  var ver = getFile("version.json");
  box.addText(ver.name,true);
  box.addText(ver.version,true);
}

function enter(text){
  box.addText(text, true);
}

function Handle(e, text){
  if(e.keyCode=13){
    e.preventDefault();
    
    enter(text);
  }
  return false;
}
