// DATA BARANG 
   var e = "(estimasi)" 
const dataBarang = [
        { 
            nama: "majmu'atudawah", 
            harga: "Rp 30.000 " + e,
            link: "https://vt.tokopedia.com/t/ZS9RTNDftku51-UO1Ua/", 
            foto: "img/majmu.png" 
        },
   {
      nama : " Al Majmu'atul Mubarokah",
      harga : "Rp. 25.000 " + e,
      link : "https://vt.tokopedia.com/t/ZS98dVT6wQYnG-fAXQm/",
      foto : "img/barokah.jpg"
   },
       
    ];

    function jalankanRender() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const grid = document.getElementById('productGrid');
        let htmlHasil = '';

        const hasilFilter = dataBarang.filter(item => item.nama.toLowerCase().includes(input));

        if(hasilFilter.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 50px; color:#999;">Barang nggak ada bro 🔍</div>';
            return;
        }

        hasilFilter.forEach(item => {
            htmlHasil += `
                <div class="card">
                    <img src="${item.foto}" onerror="this.src='https://via.placeholder.com/300?text=Foto+Gak+Ada'">
                    <div class="info">
                        <div class="title">${item.nama}</div>
                        <div class="price">${item.harga}</div>
                        <a href="${item.link}" target="_blank" class="btn">Beli Sekarang</a>
                    </div>
                </div>`;
        });

        grid.innerHTML = htmlHasil;
    }

    //  langsung muncul pas buka web
    window.onload = jalankanRender;
