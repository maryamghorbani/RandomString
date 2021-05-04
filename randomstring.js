function MyText(length) {
 var t = '';
 var characters = 'abcdefghijklmnopqrstuvwxyz';
 var s = window.prompt('Input sting:');
 var sLength = s.length;

 for ( var i = 0; i < length; i++ ){
  t = t + s.charAt(Math.floor(Math.random() * sLength))  ;
 }

 t = t + characters.charAt(Math.floor(Math.random()* sLength));
  document.getElementById("Result").innerHTML = t;
}
 


 