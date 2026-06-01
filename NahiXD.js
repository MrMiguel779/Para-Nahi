function lanzarPetalos(){

for(let i=0;i<40;i++){

let p=document.createElement("div");

p.className="petalo";

p.innerHTML="🌸";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=
(4+Math.random()*4)+"s";

document
.getElementById("petalos")
.appendChild(p);

}

}
function continuarFinal(){

let texto =
document.getElementById("respuestaLibre").value;

if(texto.trim() !== ""){

document.getElementById("n3").classList.add("hidden");
document.getElementById("final").classList.remove("hidden");

lanzarPetalos();

}
else{

alert("Escribe algo 😭");

}

}
function respuestaDerivada(correcta){

    if(correcta){

        document.getElementById("msg1").innerHTML =
        "<span class='correct'>Correcto 😎</span>";

        setTimeout(() => {

            document.getElementById("n1").classList.add("hidden");
            document.getElementById("n2").classList.remove("hidden");

            actualizarBarra(66);

        }, 1000);

    }else{

        document.getElementById("msg1").innerHTML =
        "<span class='error'>Nope 😭</span>";

    }

}