//Ambil Element
let btnSatu = document.getElementById('btn-tab-1');
let btnDua = document.getElementById('btn-tab-2');
let tabHeader = document.getElementsByClassName('tab-header');
let articleSatu = document.getElementById('articleSatu');
let articleDua = document.getElementById('articleDua');
//Function Hapus Dan Tambah Class
function tukarClass() { 
    let kondisi = articleSatu.classList.contains('hidden');
    if (kondisi === false) {
        articleSatu.classList.add('hidden');
        articleDua.classList.remove('hidden');
        tabHeader[0].classList.remove('tab-black');
        tabHeader[1].classList.add('tab-black');
    } else { 
        articleSatu.classList.remove('hidden');
        articleDua.classList.add('hidden');
        tabHeader[0].classList.add('tab-black');
        tabHeader[1].classList.remove('tab-black');
    }
   
}
//Jalankan Fungsi
btnSatu.addEventListener('click', tukarClass);
btnDua.addEventListener('click', tukarClass);

