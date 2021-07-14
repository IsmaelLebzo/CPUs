var pickedcpu = prompt("Hello and Welcome to AMD CPUs Website what CPU are you looking for?")



if(pickedcpu == "Ryzen 5"){
    alert('Nice pick somthing good and not expensive!')
document.write(
  "<div>" + "<h3>" +pickedcpu+"</h3>"
+ "<img  src='https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=BD740h11' width='150' height='150'/>" + "</div>")
}
else if (pickedcpu =="Ryzen 7"){
    alert('Oh good pick fast CPU with good amunt of cores and threads, can handle many things at the same time!')
document.write(
  "<div>" + "<h3>" +pickedcpu+"</h3>"
+ "<img  src='https://www.techinn.com/f/13795/137954422/amd-ryzen-7-5800x-3.8ghz-cpu.jpg' width='150' height='150'/>" + "</div>")
}
else if(pickedcpu =="Ryzen 9"){
    alert('Oooo you went all in with this, the most powerfull CPU in the world right now but at high cost, look at the bright side you got a beast in your PC!')
document.write(
  "<div>" + "<h3>" +pickedcpu+"</h3>"
+ "<img  src='https://sphinxpc.in/wp-content/uploads/2021/04/AMD-Ryzen-9-5950X-Desktop-Processor.jpg' width='150' height='150'/>" + "</div>")
}
else{
  alert('Do you call this a CPU?')
}