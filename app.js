alert("Hello and Welcome to AMD CPUs Website")

function userPickedCPU(){
var pickedcpu = prompt("What CPU would u like to know about? , Please choose one of these CPUs: Ryzen 5, Ryzen 7, Ryzen 9")

while(pickedcpu != "Ryzen 5" && pickedcpu != "Ryzen 7" && pickedcpu != "Ryzen 9" && pickedcpu != "ryzen 5" && pickedcpu != "ryzen 7" && pickedcpu != "ryzen 9" ){
var pickedcpu = prompt("What CPU would u like to know about? , Please choose one of these CPUs: Ryzen 5, Ryzen 7, Ryzen 9")
}
var numberOfPic = prompt("How many times would like to see the cpu? max of 5 times")
while(numberOfPic >5){numberOfPic = prompt("We said less than 6 and max of 5!")}

if(pickedcpu == "Ryzen 5"){
      alert('Nice pick somthing good and not expensive!')
  for (var i = 0; i <numberOfPic;i++){
document.write(
  "<div>" + "<h3>" +pickedcpu+"</h3>"
+ "<img  src='https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=BD740h11' width='150' height='150'/>" + "</div>")
  }
}
else if(pickedcpu == "ryzen 5"){
      alert('Nice pick somthing good and not expensive!')
  for (var i = 0; i <numberOfPic;i++){
document.write(
  "<div>" + "<h3>" +pickedcpu+"</h3>"
+ "<img  src='https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=BD740h11' width='150' height='150'/>" + "</div>")
  }
}
else if (pickedcpu =="Ryzen 7"){
  alert('Oh good pick fast CPU with good amunt of cores and threads, can handle many things at the same time!')
  for (var i = 0; i <numberOfPic;i++){
document.write(
  "<div>" + "<h3>" +pickedcpu+"</h3>"
+ "<img  src='https://www.techinn.com/f/13795/137954422/amd-ryzen-7-5800x-3.8ghz-cpu.jpg' width='150' height='150'/>" + "</div>")

  }
}
else if (pickedcpu =="ryzen 7"){
  alert('Oh good pick fast CPU with good amunt of cores and threads, can handle many things at the same time!')
    for (var i = 0; i <numberOfPic;i++){
document.write(
  "<div>" + "<h3>" +pickedcpu+"</h3>"
+ "<img  src='https://www.techinn.com/f/13795/137954422/amd-ryzen-7-5800x-3.8ghz-cpu.jpg' width='150' height='150'/>" + "</div>")

  }
}
else if(pickedcpu =="Ryzen 9"){
      alert('Oooo you went all in with this, the most powerfull CPU in the world right now but at high cost, look at the bright side you got a beast in your PC!')
    for (var i = 0; i <numberOfPic;i++){
document.write(
  "<div>" + "<h3>" +pickedcpu+"</h3>"
+ "<img  src='https://sphinxpc.in/wp-content/uploads/2021/04/AMD-Ryzen-9-5950X-Desktop-Processor.jpg' width='150' height='150'/>" + "</div>")
  }
}
else if(pickedcpu =="ryzen 9"){
      alert('Oooo you went all in with this, the most powerfull CPU in the world right now but at high cost, look at the bright side you got a beast in your PC!')
      for (var i = 0; i <numberOfPic;i++){
document.write(
  "<div>" + "<h3>" +pickedcpu+"</h3>"
+ "<img  src='https://sphinxpc.in/wp-content/uploads/2021/04/AMD-Ryzen-9-5950X-Desktop-Processor.jpg' width='150' height='150'/>" + "</div>")

  }
}
}
userPickedCPU();
function rate(){
var Stars = prompt("How many stars would u rate my website? 0-5");

if(Stars == 0){
var zero = prompt("Oh no, give us feedback on what we can improve!");
alert("feedback submitted!")
document.write(
 "<img  src='https://smurfdok.files.wordpress.com/2013/04/0stars.png' width='150' height='30'/>" + "</div>")
}
else if(Stars == 1){
var one = prompt("Oh no, give us feedback on what we can improve!");
alert("feedback submitted!")
document.write(
 "<img  src='https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png' width='150' height='30'/>" + "</div>")
}
else if(Stars == 2){
var two = prompt("Oh that's sad. Give us feedback on what we can improve! So we can get a higher rating than this!");
alert("feedback submitted!")
document.write(
 "<img  src='https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png' width='150' height='30'/>" + "</div>")
}
else if(Stars == 3){
var three = prompt("That's decent, but can you tell us what  can we improve with?");
alert("feedback submitted!")
document.write(
 "<img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/3_stars.svg/1024px-3_stars.svg.png' width='150' height='30'/>" + "</div>")
}
else if(Stars == 4){
alert("That's nice from you, hope we can achive this 5 stars soon ^-^")
document.write(
 "<img  src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png' width='150' height='30'/>" + "</div>")
}
else if(Stars == 5){
alert("OH WE DID IT! Hope you liked our website!")
document.write(
 "<img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/535px-5_stars.svg.png' width='150' height='30'/>" + "</div>")
}
}
rate();