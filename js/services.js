// hide button
// show button

// div
const  particuliers = document.getElementById("services-card-particuliers");
const  professionnels = document.getElementById("services-card-professionnels");
//buttons
const btnProfessionnels = document.getElementById("btn-professionnels");
const btnParticuliers = document.getElementById("btn-particuliers");

    btnParticuliers.addEventListener('click', function(){
        particuliers.style.display = "block";
        professionnels.style.display = "none";
        btnParticuliers.style.color = "#ffc107"
        btnParticuliers.style.backgroundColor = "white"
        btnProfessionnels.style.color = "black"
        btnProfessionnels.style.backgroundColor = "#ffc107"
    });
    btnProfessionnels.addEventListener('click', function(){
        professionnels.style.display = "block";
        particuliers.style.display = "none";
        btnProfessionnels.style.color = "#ffc107"
        btnProfessionnels.style.backgroundColor = "white"
        btnParticuliers.style.color = "black"
        btnParticuliers.style.backgroundColor = "#ffc107"
    });
