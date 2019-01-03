document.write("<center><h2>Addition & Factorial using Javascript in HTML</h2></center>");
function add(){
var x = prompt("Number 1 : ");
var y = prompt("Number 2 : ");
alert(parseInt(x)+parseInt(y));

var res=confirm("calculate again ?");

if(res==true){
	add();
}
else{
	document.write("<center><h1>Thankyou :)</center></h1>");
}
}

function factorial(num){
var i, no, fact;

fact=1;
no=prompt("Input number : ");
i=1;
while(i<=no){
	fact=fact*i;
	i++;
}
if(no == 0){
	alert("0");
}
else if(no == 1){
	alert("1");
}
else{
	alert(fact);
}

var res=confirm("calculate factorial again ?");

if(res==true){
	factorial(num);
}
else{
	document.write("<center><h1>Thankyou :)</center></h1>");
}
}

