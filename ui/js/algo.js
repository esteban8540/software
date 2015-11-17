function run(){

var entrada = document.getElementById("stdin");
var n = entrada.value;

var arr = n.split("");
var len = arr.len;

for (var i=0, len=arr.length; i<len; i++) {
    var str = arr[i];
    for (var j=1; j<arr.length; j++)
        str += ","+arr[(i+j)%len];
    alert(str);
     var salida = document.getElementById("stdout");
salida.value = str;
}
   

}	

		
