// TODO: https://www.w3schools.com/js/js_functions.asp
function oyunuBaslat(adim) {
  // OKU: https://www.w3schools.com/js/js_variables.asp
  var dogruTahminler = 0;
  var yanlisTahminler = 0;

  // OKU: https://www.w3schools.com/js/js_loop_for.asp
  for (var sayi = 0; sayi < adim; sayi++) {
    //0 ile 10 arasinda rastgele sayı
    // OKU: https://www.w3schools.com/js/js_math.asp - https://www.w3schools.com/js/js_random.asp
    var rastgeleSayi = Math.round(Math.random() * 10);
    //alert(rastgeleSayi);

    //kullanici tahmin girisi
    var kullaniciTahminNumara = Number(
      prompt("Lütfen tahmininizi giriniz", "0")
    );

    //karşılaştırma
    // OKU: https://www.w3schools.com/js/js_comparisons.asp
    if (kullaniciTahminNumara == rastgeleSayi) {
      // OKU: https://www.w3schools.com/js/js_assignment.asp
      dogruTahminler = dogruTahminler + 1;
    } else {
      yanlisTahminler = yanlisTahminler + 1;
    }

    //sonucu göster
    var sonuc = `
Deneme:${sayi + 1}
Tutulan Sayı:${rastgeleSayi}
Girilen Sayı:${kullaniciTahminNumara}
Doğru Tahminler:${dogruTahminler}
Yanlış Tahminler:${yanlisTahminler}
`;
    alert(sonuc);
  }
}

// index.html deki btnBaslat isimli buton elementini btnBaslat adında bir değişkene ata
var btnBaslat = document.getElementById("btnBaslat");
// btnBaslat değişkeninde tutulan bu butona tıklanınca
btnBaslat.addEventListener("click", function () {
  // txtAdim isimli html elementini bul ve value değerini adim isimli bir değişkene ata
  var adim = (document.getElementById("txtAdim") as HTMLInputElement).value;
  // oyunuBaslat isimli fonksiyona adim isimli değişkeni gönder. (numerik çevirme yaparak)
  oyunuBaslat(Number(adim));
});
