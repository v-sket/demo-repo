addEventListener(((num)=>{
    for(let index = 0; index < num; index++)
        document.getElementsByTagName("h1").innerHTML = index + "<br>";
        console.log(document.getElementsByTagName("h1").innerHTML=index + "\n");
})
(document.getElementById("txt").innerHTML))