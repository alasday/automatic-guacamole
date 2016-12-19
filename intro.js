var addItem = function(){
    var list = document.getElementById("list0");
    var newitem = document.createElement("li");
    newitem.innerHTML = text;
    list.appendChild(newitem);
    newitem.addEventListener("mouseover",replaceHeader);
    newitem.addEventListener("mouseout",returnHeader);
    newitem.addEventListener("click",removeItem);
    newitem.addEventListener("click",returnHeader);
};

var removeItem = function(n){
    var listitems = document.getElementsByTagName("li");
    listitems[n].remove();
};

var fib = function(n){
    var a = 0;
    var b = 1;
    var c = 0
    while ( c < n){
	var d = b;
	b+=a;
	a = d;
	c++;
    }
    return b;
};

var lucas = function(n){
    var a = Math.sqrt(5);
    var pt1 = ((1+a)/2);
    var pt2 = ((1-a)/2);
    return (Math.pow(pt1, n) + Math.pow(pt2, n));
};

var addFib = function(){
    var list = document.getElementById("fibList");
    var newitem = document.createElement("li");
    var text = fib(list.childElementCount) + "," + fib(list.childElementCount);
    newitem.innerHTML = fib(list.childElementCount);
    list.appendChild(newitem);
};

var addLucas = function(){
    var list = document.getElementById("lucasList");
    var newitem= document.createElement("li");
    var text = lucas(list.childElementCount) + "," + lucas(list.childElementCount);
    newitem.innerHTML = lucas(list.childElementCount);
    list.appendChild(newitem);
};


var btn = document.getElementById("btn");
btn.addEventListener("click",addItem);

var fibBtn = document.getElementById("fibBtn");
fibBtn.addEventListener("click",addFib);

var lucasBtn = document.getElementById("lucasBtn");
lucasBtn.addEventListener("click",addLucas);


var changeHead = function(text) {
    var head = document.getElementById("head");
    head.innerHTML = text;
};

var returnHead = function(text) {
    var head = document.getElementById("head");
    head.innerHTML = "Hello World!";
};

var main = function() {
    var listitems = document.getElementsByTagName("li");
    for (var i = 0; i < listitems.length; i++) {
	listitems[i].addEventListener("mouseover",changeHead);
	listitems[i].addEventListener("mouseout",returnHead);
	listitems[i].addEventListener("click",removeItem);
	listitems[i].addEventListener("click",returnHead);
    }
};

startup();



