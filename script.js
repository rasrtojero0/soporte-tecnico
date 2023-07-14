// ----------------------------Calcular RVS-----------------------------

var inputRvs = document.getElementById("input-rvs");
var btnCalcular = document.getElementById("btn-calcular");
var resultadoRvs = document.getElementById("resulatado-rvs");


btnCalcular.addEventListener("click",evaluar)
inputRvs.addEventListener("click",()=>{
    resultadoRvs.textContent = "";
    inputRvs.value = "";
})


function evaluar(){
   let artefacto = inputRvs.value;

    if(artefacto <= 10000){
        resultadoRvs.textContent = "Valor calculado: rejilla de 100cm2"
    }
    if(artefacto > 10000){
        rvs = calcular(artefacto)
        
        resultadoRvs.textContent = "Valor calculado: " + rvs + " cm2 o superior";
    }
    
    function calcular(){
        let resultado = (artefacto - 10000) / 1000;
        console.log(resultado)
        let adicional = resultado * 3;
        console.log(adicional)
        let rvs = 100 + adicional;
        return rvs
    }
}

// ----------------------------Calcular RVI-----------------------------
var inputRvi = document.getElementById("input-rvi");
var btnCalcularRVI = document.getElementById("btn-calcular-rvi");
var resultadoRvi = document.getElementById("resulatado-rvi");


btnCalcularRVI.addEventListener("click",evaluarRVI)
inputRvi.addEventListener("click",()=>{
    resultadoRvi.textContent = "";
    inputRvi.value = "";
})


function evaluarRVI(){
   let artefacto = inputRvi.value;

    if(artefacto <= 10000){
        resultadoRvi.textContent = "Valor calculado: rejilla de 50cm2"
    }
    if(artefacto > 10000){
        rvs = calcular(artefacto)
        
        resultadoRvi.textContent = "Valor calculado: " + rvs + " cm2 o superior";
    }
    
    function calcular(){
        let resultado = (artefacto - 10000) / 1000;
        console.log(resultado)
        let adicional = resultado * 3;
        console.log(adicional)
        let rvs = 50 + adicional;
        return rvs
    }
}
// ---------------------BUSCADOR---------------------------------

document.addEventListener("keydown", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  })

  //-------------------------CALCULAR SEMI CUBIERTO--------------------------------

  libre = document.getElementById("input-libre");
  techada = document.getElementById("input-techada");
  resultadoSemi = document.getElementById("resulatado-semi");
  calcularSemi = document.getElementById("btn-calcularSemi");

  calcularSemi.addEventListener("click",calculoSemi);

  function calculoSemi(){
    
    coeficiente = libre.value / techada.value
    console.log(coeficiente)

    if(coeficiente >= 1.5){
        resultadoSemi.textContent = "SIN RESTRICCIÓN (coeficiente = " + coeficiente.toFixed(2) + ") "
    }
    if(coeficiente >= 1 && coeficiente < 1.5){
        resultadoSemi.textContent = "PUEDE VENTILAR HASTA 30.000 cal/h  (coeficiente = " + coeficiente.toFixed(2) + ") "
    }
    if(coeficiente > 0.6 && coeficiente < 1){
        resultadoSemi.textContent = "PUEDE VENTILAR HASTA 20.000 cal/h (coeficiente = " + coeficiente.toFixed(2) + ") "
    }

  }

