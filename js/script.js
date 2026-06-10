// // 2. Menampilkan pesan di console
// console.log("CV Online siap");

// // 3. Variabel const
// const namaLengkap = "Vibry Tirta";
// console.log("Nama Lengkap:", namaLengkap);

// // 4. Variabel let
// let tahunMasuk = 2023;

// console.log("Tahun masuk sebelum diubah:", tahunMasuk);

// tahunMasuk = 2025;

// console.log("Tahun masuk sesudah diubah:", tahunMasuk);


// // 5. Tiga variabel dengan tipe data berbeda
// let jurusan = "Rekam Medis";
// let semester = 6;
// let statusAktif = true;

// console.log("Tipe data jurusan:", typeof jurusan);
// console.log("Tipe data semester:", typeof semester);
// console.log("Tipe data statusAktif:", typeof statusAktif);

// // 6. Fungsi sapaPengunjung()
// function sapaPengunjung() {
//     console.log("Selamat datang di CV saya!");
// }
// sapaPengunjung();

// // 7. Fungsi hitungUmur(tahunLahir)
// function hitungUmur(tahunLahir) {
//     let tahunSekarang = 2025;
//     return tahunSekarang - tahunLahir;
// }

// console.log("Umur saya:", hitungUmur(2004));

// // 8. Array skills
// let skills = ["HTML", "CSS", "JavaScript"];

// // Menampilkan elemen kedua
// console.log("Skill kedua:", skills[1]);

// // 9. Menambahkan skill baru
// skills.push("Bootstrap");

// console.log("Panjang array:", skills.length);
// console.log("Isi array terbaru:", skills);

// const heading = document.querySelector("h1");
// console.log(heading);

const links = document.querySelectorAll("nav a");
console.log("Jumlah Link:", links.length);
links.forEach((link, index) => {
    console.log(`Link ${index + 1}: ${link.textContent}`);
});

const heading = document.querySelector("h1");
heading.textContent = "Maria Vibryani Surya Tirta";

const h2Pertama = document.querySelector("h2");
h2Pertama.classList.add("highlight");

const semuaH2 = document.querySelectorAll("h2");
semuaH2[1].classList.toggle("highlight");

function buatKartu(judul, deskripsi) {
    const card = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = judul;

    const p = document.createElement("p");
    p.textContent = deskripsi;

    card.appendChild(h3);
    card.appendChild(p);

    return card;
}

const container = document.querySelector("main");

const kartuBaru = buatKartu(
    "Pengalaman Organisasi",
    "Sekretaris ORMAWA STIKES Panti Waluya Malang"
);

container.appendChild(kartuBaru);

const dataPendidikan = [
    { institusi: "SD Negeri Talun", tahun: "2012" },
    { institusi: "SMP Negeri Talun", tahun: "2015" },
    { institusi: "STIKES Panti Waluya", tahun: "2023" }
];

function renderPendidikan() {

    const ul = document.querySelector("#pendidikan-list");

    ul.innerHTML = "";

    dataPendidikan.forEach(item => {

        const li = document.createElement("li");

        li.textContent = `${item.institusi} (${item.tahun})`;

        ul.appendChild(li);

    });

}

renderPendidikan();

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const isExpanded =
        navMenu.classList.contains("active");

    hamburger.setAttribute(
        "aria-expanded",
        isExpanded
    );

    hamburger.setAttribute(
        "aria-label",
        isExpanded ? "Tutup Menu" : "Buka Menu"
    );

});

// Soal 2
const navLinks =
document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
            this.getAttribute("href");

        document.querySelector(target)
        .scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Soal 3
const nav =
document.querySelector("#nav-menu");

nav.addEventListener("click", function(e){

    if(e.target.tagName === "A"){

        e.preventDefault();

        const target =
            e.target.getAttribute("href");

        document.querySelector(target)
        .scrollIntoView({
            behavior: "smooth"
        });

    }

});

// Soal 4
const cards =
document.querySelectorAll(".kartu");

cards.forEach(card => {

    card.addEventListener("mouseover", () => {

        card.style.boxShadow =
            "0 8px 20px rgba(0,0,0,0.3)";

    });

    card.addEventListener("mouseout", () => {

        card.style.boxShadow =
            "0 2px 8px rgba(0,0,0,0.08)";

    });

});

// Soal 5
const keahlianContainer =
document.querySelector(
"#keahlian .kartu-container"
);

keahlianContainer.addEventListener(
"click",
function(e){

    if(e.target.tagName === "H3"){

        console.log(
            "Judul diklik : " +
            e.target.textContent
        );

    }

});

document.addEventListener(
"DOMContentLoaded",
function(){

    console.log("DOM Siap");

});
