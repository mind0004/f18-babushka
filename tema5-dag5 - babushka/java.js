let menukort;


document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
    let jsonData = await fetch("menu.json");
    menukort = await jsonData.json();


    // find og filtrer retter efter kategori og gem dem i et nyt array
    let forretter = menukort.filter(ret => ret.kategori == "forretter");
    let hovedretter = menukort.filter(ret => ret.kategori == "hovedretter");
    let desserter = menukort.filter(ret => ret.kategori == "desserter");
    let drikkevarer = menukort.filter(ret => ret.kategori == "drikkevarer");

    document.querySelector("#filter-alle").addEventListener("click", () => {
        vis(menukort, "Menu")
    });

    document.querySelector("#filter-forretter").addEventListener("click", () => {
        vis(forretter, "Forretter")
    });

    document.querySelector("#filter-hovedretter").addEventListener("click", () => {
        vis(hovedretter, "Hovedretter")
    });

    document.querySelector("#filter-desserter").addEventListener("click", () => {
        vis(desserter, "Desserter")
    });

    document.querySelector("#filter-drikkevarer").addEventListener("click", () => {
        vis(drikkevarer, "Drikkevarer")
    });


    vis(menukort, "Menu");


};


function vis(menukort, overskrift) {

    document.querySelector("#overskrift").textContent = overskrift;

    let temp = document.querySelector(".menutemplate");
    let dest = document.querySelector(".menukort");

    dest.innerHTML = "";


    menukort.forEach(madret => {
        let klon = temp.cloneNode(true).content;

        klon.querySelector(".navn").textContent = madret.navn;

        klon.querySelector(".billede").setAttribute("src", "imgs/medium/" + madret.billede + "-md.jpg");
        klon.querySelector(".billede").alt = "Billede af" + madret.billede;

        klon.querySelector(".kortbeskrivelse").textContent = madret.kortbeskrivelse;

        klon.querySelector(".pris").textContent = "Pris: " + madret.pris + " kr.";

        dest.appendChild(klon);

    });

};
