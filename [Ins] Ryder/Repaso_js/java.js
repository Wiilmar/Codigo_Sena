/* // Primera Fase
let boton = document.querySelector("#Boton")
boton = addEventListener("click",datos)
function datos () {
    let nombre = document.querySelector("#Nombre_user").value;
    let meses = document.querySelector("#Lista_Meses").value;
    let años = document.querySelector("#Lista_Año").value;
    let trimestre = document.querySelector("#Texto_trimestre").value;
    let radio = document.querySelector('input[name="Premio"]:checked').value;
    console.log(radio)
    let competencia = document.querySelector("#competencia").value;

    let texto = document.querySelector("#mensaje").textContent = (`El aprendiz ${nombre} del ${trimestre} trimestre ${radio} la competencia ${competencia} en el año ${años} del mes ${meses}`)
}   */  

/* // Segunda Fase
function datos2 (Nombre_user,Lista_Meses,Lista_Año,Texto_trimestre,competencia,escoger) {
    let texto = document.querySelector("#mensaje").textContent = (`El aprendiz ${Nombre_user} del ${Texto_trimestre} trimestre ${escoger} la competencia ${competencia} en el año ${Lista_Año} del mes ${Lista_Meses}`)
}
*/

//Tercer Fase
function datos3 (Nombre_user,Lista_Meses,Lista_Año,Texto_trimestre,competencia,escoger ) {
    datos = []
    datos.push(Nombre_user,Lista_Meses,Lista_Año,Texto_trimestre,competencia,escoger)
    console.log(datos)
}