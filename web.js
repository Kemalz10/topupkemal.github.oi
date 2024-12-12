const btnLihatSelengkapnya = document.getElementById('btnLihatSelengkapnya');
const kontenSelengkapnya = document.getElementById('kontenSelengkapnya');

btnLihatSelengkapnya.addEventListener('click', () => {
  if (kontenSelengkapnya.style.display === 'none') {
    kontenSelengkapnya.style.display = 'block';
    btnLihatSelengkapnya.textContent = 'Sembunyikan';
  } else {
    
    kontenSelengkapnya.style.display = 'none';
    btnLihatSelengkapnya.textContent = 'Lihat Selengkapnya';
  }
});

function searchFunction() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const ul = document.getElementById("resultList");
    const li = ul.getElementsByTagName("li");
  
    for (let i = 0; i < li.length; i++) {
      const text = li[i].textContent || li[i].innerText;
      if (text.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }