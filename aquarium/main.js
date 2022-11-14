var fish1Element=document.getElementById('riba1').style;
var riba1 = {
curx:100,
cury:100,
speed: {
x: Math.random()*5,
y: Math.random()*5,
}
};
var fish2Element=document.getElementById('riba2').style;
var riba2 = {
curx:500,
cury:200,
speed: {
x: Math.random()*5,
y: Math.random()*5,
}
};
var fish3Element=document.getElementById('riba3').style;
var riba3 = {
curx:700,
cury:345,
speed: {
x: Math.random()*5,
y: Math.random()*5,
}
};
var fish4Element=document.getElementById('riba4').style;
var riba4 = {
curx:369,
cury:452,
speed: {
x: Math.random()*5,
y: Math.random()*5,
}
};
var fish5Element=document.getElementById('riba5').style;
var riba5 = {
curx:600,
cury:500,
speed: {
x: Math.random()*5,
y: Math.random()*5,
}
};
var fish6Element=document.getElementById('riba6').style;
var riba6 = {
curx:900,
cury:220,
speed: {
x: Math.random()*5,
y: Math.random()*5,
}
};
var fish7Element=document.getElementById('riba7').style;
var riba7 = {
curx:150,
cury:100,
speed: {
x: Math.random()*5,
y: Math.random()*5,
}
};
var fish8Element=document.getElementById('riba8').style;
var riba8 = {
curx:450,
cury:300,
speed: {
x: Math.random()*5,
y: Math.random()*5,
}
};
var fish9Element=document.getElementById('riba9').style;
var riba9 = {
curx:800,
cury:400,
speed: {
x: Math.random()*5,
y: Math.random()*5,
}
};
var boxElement = document.getElementById('box');
var boxStyle = getComputedStyle(boxElement);
var box = {
width: parseFloat(boxStyle.width),
height: parseFloat(boxStyle.height)
};
var i=1;
function move() {
riba1.curx+=riba1.speed.x;
riba1.cury+=riba1.speed.y;
fish1Element.left=riba1.curx;
fish1Element.top=riba1.cury;
if (riba1.cury>box.height | riba1.cury<0 ) {
riba1.speed.y=-riba1.speed.y;
}	
if (riba1.curx>box.width | riba1.curx<0 ) {
riba1.speed.x=-riba1.speed.x;
document.getElementById('fis1').src='fish1.gif';
}
if (riba1.curx<0 ) {
document.getElementById('fis1').src='fish1_1.gif';
}
riba2.curx+=riba2.speed.x;
riba2.cury+=riba2.speed.y;
fish2Element.left=riba2.curx;
fish2Element.top=riba2.cury;
if (riba2.cury>box.height | riba2.cury<0 ) {
riba2.speed.y=-riba2.speed.y;
}
if (riba2.curx>box.width | riba2.curx<0 ) {
riba2.speed.x=-riba2.speed.x;
document.getElementById('fis2').src='fish1.gif';
}
if (riba2.curx<0 ) {
document.getElementById('fis2').src='fish1_1.gif';
}
riba3.curx+=riba3.speed.x;
riba3.cury+=riba3.speed.y;
fish3Element.left=riba3.curx;
fish3Element.top=riba3.cury;
if (riba3.cury>box.height | riba3.cury<0 ) {
riba3.speed.y=-riba3.speed.y;
}
if (riba3.curx>box.width | riba3.curx<0 ) {
riba3.speed.x=-riba3.speed.x;
document.getElementById('fis3').src='fish2.gif';
}
if (riba3.curx<0 ) {
document.getElementById('fis3').src='fish2_1.gif';
}
riba4.curx+=riba4.speed.x;
riba4.cury+=riba4.speed.y;
fish4Element.left=riba4.curx;
fish4Element.top=riba4.cury;
if (riba4.cury>box.height | riba4.cury<0 ) {
riba4.speed.y=-riba4.speed.y;
}
if (riba4.curx>box.width | riba4.curx<0 ) {
riba4.speed.x=-riba4.speed.x;
document.getElementById('fis4').src='fish1.gif';
}
if (riba4.curx<0 ) {
document.getElementById('fis4').src='fish1_1.gif';
}
riba5.curx+=riba5.speed.x;
riba5.cury+=riba5.speed.y;
fish5Element.left=riba5.curx;
fish5Element.top=riba5.cury;
if (riba5.cury>box.height | riba5.cury<0 ) {
riba5.speed.y=-riba5.speed.y;
}
if (riba5.curx>box.width | riba5.curx<0 ) {
riba5.speed.x=-riba5.speed.x;
document.getElementById('fis5').src='fish2.gif';
}
if (riba5.curx<0 ) {
document.getElementById('fis5').src='fish2_1.gif';
}
riba6.curx+=riba6.speed.x;
riba6.cury+=riba6.speed.y;
fish6Element.left=riba6.curx;
fish6Element.top=riba6.cury;
if (riba6.cury>box.height | riba6.cury<0 ) {
riba6.speed.y=-riba6.speed.y;
}	
if (riba6.curx>box.width | riba6.curx<0 ) {
riba6.speed.x=-riba6.speed.x;
document.getElementById('fis6').src='fish1.gif';
}
if (riba6.curx<0 ) {
document.getElementById('fis6').src='fish1_1.gif';
}
riba7.curx+=riba7.speed.x;
riba7.cury+=riba7.speed.y;
fish7Element.left=riba7.curx;
fish7Element.top=riba7.cury;
if (riba7.cury>box.height | riba7.cury<0 ) {
riba7.speed.y=-riba7.speed.y;
}	
if (riba7.curx>box.width | riba7.curx<0 ) {
riba7.speed.x=-riba7.speed.x;
document.getElementById('fis7').src='fish3_1.gif';
}
if (riba7.curx<0 ) {
document.getElementById('fis7').src='fish3.gif';
}
riba8.curx+=riba8.speed.x;
riba8.cury+=riba8.speed.y;
fish8Element.left=riba8.curx;
fish8Element.top=riba8.cury;
if (riba8.cury>box.height | riba8.cury<0 ) {
riba8.speed.y=-riba8.speed.y;
}	
if (riba8.curx>box.width | riba8.curx<0 ) {
riba8.speed.x=-riba8.speed.x;
document.getElementById('fis8').src='fish3_1.gif';
}
if (riba8.curx<0 ) {
document.getElementById('fis8').src='fish3.gif';
}
riba9.curx+=riba9.speed.x;
riba9.cury+=riba9.speed.y;
fish9Element.left=riba9.curx;
fish9Element.top=riba9.cury;
if (riba9.cury>box.height | riba9.cury<0 ) {
riba9.speed.y=-riba9.speed.y;
}	
if (riba9.curx>box.width | riba9.curx<0 ) {
riba9.speed.x=-riba9.speed.x;
document.getElementById('fis9').src='fish3_1.gif';
}
if (riba9.curx<0 ) {
document.getElementById('fis9').src='fish3.gif';
}
setTimeout('move()', 50);
}