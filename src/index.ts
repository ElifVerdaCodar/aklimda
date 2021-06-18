var dogruTahminler = 0;
var yanlisTahminler = 0;

for (var sayi = 0; sayi < 10; sayi++) {
  //0 ile 10 arasinda rastgele sayı
  var rastgeleSayi = Math.round(Math.random() * 10);
  //alert(rastgeleSayi);

  //kullanici tahmin girisi
  var kullaniciTahminNumara = Number(prompt("lutfentahmininizigiriniz", "0"));

  //karşılaştırma
  if (kullaniciTahminNumara == rastgeleSayi) {
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
