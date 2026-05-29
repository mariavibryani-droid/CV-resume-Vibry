// 2. Menampilkan pesan di console
console.log("CV Online siap");

// 3. Variabel const
const namaLengkap = "Vibry Tirta";
console.log("Nama Lengkap:", namaLengkap);

// 4. Variabel let
let tahunMasuk = 2023;

console.log("Tahun masuk sebelum diubah:", tahunMasuk);

tahunMasuk = 2025;

console.log("Tahun masuk sesudah diubah:", tahunMasuk);


// 5. Tiga variabel dengan tipe data berbeda
let jurusan = "Rekam Medis";
let semester = 6;
let statusAktif = true;

console.log("Tipe data jurusan:", typeof jurusan);
console.log("Tipe data semester:", typeof semester);
console.log("Tipe data statusAktif:", typeof statusAktif);

// 6. Fungsi sapaPengunjung()
function sapaPengunjung() {
    console.log("Selamat datang di CV saya!");
}
sapaPengunjung();

// 7. Fungsi hitungUmur(tahunLahir)
function hitungUmur(tahunLahir) {
    let tahunSekarang = 2025;
    return tahunSekarang - tahunLahir;
}

console.log("Umur saya:", hitungUmur(2004));

// 8. Array skills
let skills = ["HTML", "CSS", "JavaScript"];

// Menampilkan elemen kedua
console.log("Skill kedua:", skills[1]);

// 9. Menambahkan skill baru
skills.push("Bootstrap");

console.log("Panjang array:", skills.length);
console.log("Isi array terbaru:", skills);