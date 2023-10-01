const paketWisata = {
  paket1: {
    hargaKendaraan: 0, // Ganti dengan harga awal jika ada
    hargaPerPenumpang: 150000, // Ganti dengan harga per penumpang yang sesuai
  },
  paket2: {
    hargaKendaraan: 0, // Ganti dengan harga awal jika ada
    hargaPerPenumpang: 175000, // Ganti dengan harga per penumpang yang sesuai
  },
  paket3: {
    hargaKendaraan: 0, // Ganti dengan harga awal jika ada
    hargaPerPenumpang: 100000, // Ganti dengan harga per penumpang yang sesuai
  },
  // Tambahkan paket-paket wisata lainnya di sini
};

// Fungsi untuk mengupdate harga
function updatePrice(paketId) {
  // Mengambil elemen-elemen yang diperlukan dari DOM
  // Mendapatkan elemen select yang dipilih
  const selectElement = document.getElementById(`chooseVehicle${paketId}`);
  const choosePassengers = document.getElementById(
    `choosePassengers${paketId}`
  );
  const totalPrice = document.getElementById(`totalPrice${paketId}`);

  const harga = parseFloat(
    selectElement.options[selectElement.selectedIndex].getAttribute(
      "data-harga"
    )
  );

  // Mengambil nilai harga kendaraan dari select
  const hargaKendaraan = isNaN(harga) ? 0 : harga; // Menghindari NaN jika data-harga tidak ada

  // Mengambil nilai jumlah penumpang
  let jumlahPenumpang = parseInt(choosePassengers.value);

  // Mengambil kapasitas penumpang maksimum dari opsi yang dipilih
  const kapasitasMaksimum = parseInt(
    selectElement.options[selectElement.selectedIndex].getAttribute(
      "data-max-penumpang"
    )
  );

  // Memeriksa apakah jumlah penumpang melebihi kapasitas maksimum
  if (jumlahPenumpang > kapasitasMaksimum) {
    // Jika melebihi, berikan pesan kesalahan atau atur jumlah penumpang ke kapasitas maksimum
    alert(`Kapasitas penumpang maksimum adalah ${kapasitasMaksimum}`);
    jumlahPenumpang = kapasitasMaksimum;
    choosePassengers.value = kapasitasMaksimum; // Atur kembali nilai input
  }

  // Menghitung total harga
  const totalHarga =
    hargaKendaraan +
    jumlahPenumpang * paketWisata[`paket${paketId}`].hargaPerPenumpang;

  // Memformat angka ke dalam format uang Indonesia (Rupiah)
  const formattedHarga = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalHarga);

  // Mengganti tanda titik (.) dengan tanda koma (,)
  const hargaDalamRupiah = formattedHarga;

  // Memperbarui teks pada elemen dengan id totalPrice
  totalPrice.textContent = hargaDalamRupiah;
}

// Fungsi untuk mengarahkan ke WhatsApp
function redirectToWhatsApp(paketId) {
  const selectElement = document.getElementById(`chooseVehicle${paketId}`);
  // Mendapatkan nama mobil dari atribut data-nama
  const namaMobil =
    selectElement.options[selectElement.selectedIndex].getAttribute(
      "data-nama"
    );
  const choosePassengers = document.getElementById(
    `choosePassengers${paketId}`
  );

  // Mengambil nilai jumlah penumpang sebagai angka
  const jumlahPenumpang = parseInt(choosePassengers.value);

  // Buat pesan yang akan dikirim ke WhatsApp
  const message = `Saya memesan Paket City Tour ${paketId} dengan mobil ${namaMobil} dan berjumlah ${jumlahPenumpang} penumpang.`;

  // Ganti nomor WhatsApp dengan nomor yang sesuai
  const phoneNumber = "6281220482987"; // Ganti dengan nomor WhatsApp Anda atau yang sesuai

  // Buat URL WhatsApp dengan pesan
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Redirect ke WhatsApp
  window.location.href = whatsappURL;
}

// Tambahkan event listener untuk setiap tombol "Pilih Paket"
document.getElementById("wa-button1").addEventListener("click", function () {
  const paketId = "1";
  const selectElement = document.getElementById(`chooseVehicle${paketId}`);
  const namaMobil =
    selectElement.options[selectElement.selectedIndex].getAttribute(
      "data-nama"
    );

  if (!namaMobil) {
    alert("Anda belum memilih mobil.");
    return; // Jangan lanjutkan jika mobil belum dipilih
  }

  redirectToWhatsApp(paketId);
});

document.getElementById("wa-button2").addEventListener("click", function () {
  const paketId = "2";
  const selectElement = document.getElementById(`chooseVehicle${paketId}`);
  const namaMobil =
    selectElement.options[selectElement.selectedIndex].getAttribute(
      "data-nama"
    );

  if (!namaMobil) {
    alert("Anda belum memilih mobil.");
    return; // Jangan lanjutkan jika mobil belum dipilih
  }

  redirectToWhatsApp(paketId);
});

updatePrice("1");
updatePrice("2");
