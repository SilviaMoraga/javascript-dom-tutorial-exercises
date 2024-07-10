let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
for (let i = 0; i < countries.length; i++) {
    let selectCountry = document.createElement("option");
    selectCountry.textContent (countries);

    let opcionesPais = document.getElementById("mySelect");
    opcionesPais.appendChild(selectCountry);
}

const alertaPais = document.getElementById("mySelect");
alertaPais.addEventListener("change", (event) =>{
    
})