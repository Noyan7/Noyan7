// ÖDEV-1 --> 3 adet sayı tanımla ve bu sayıların karelerinin toplamını hesaplayıp console a yazdır.
var sayi1 = Math.pow(4, 2);
var sayi2 = Math.pow(5, 2);
var sayi3 = Math.pow(12, 2);
console.log(sayi1+sayi2+sayi3);


// ÖDEV-2 --> 5 elemanlı bir number dizi tanımla ve dizinin son 2 elemanını sil (array method)
var sayi4 = [1,2,3,4,5];
sayi4.splice(sayi4.length -2);
// sayi4.pop();
// sayi4.pop();
console.log(sayi4);


// ÖDEV-3 --> 5 elemanlı bir string dizi tanımla ve diziye “Çağatay” elemanını ekleyip console a diziyi yazdır. ( push method )
var isim = ["Eren","Abdullah","Efe","Batu","Malik"];
isim.push("Çağatay");
console.log(isim);


// ÖDEV-4 --> [3,55,1,2,3] bu dizideki elemanların ortalama sayısını hesapla ve ekrana yazdır.**
var sayi5 = [3,55,1,2,3];
var toplam = 0;
for (var i = 0; i < sayi5.length; i++) {
    toplam += Number(sayi5[i]/5);
}
// alert(toplam);


// ÖDEV-5 --> “Çağatay” isimli string değeri büyütüp ekrana yazdır. ( js to uppercase fonksiyonu )
var isimB = "Çağatay";
// alert(isimB.toUpperCase());


// ÖDEV-6 --> “+905437331470” telefon numarasındaki “+90” kısmını silip ekrana yazdır.( replace fonksiyonu )
var numara = "+905437331470";
// alert(numara.replace("+90",""));


// ÖDEV-7 --> “Çağatay” isimli değişkendeki a harflerinin hepsini x ile değiştirip console a yaz. ( replaceAll metodu )
var harf = "Çağatay";
console.log(harf.replaceAll("a","x"));


// ÖDEV-8 --> İki adet string dizi tanımla. Bu dizileri tek bir dizide birleştirip elemanları console a yazdır.
var string1 = [1,2,3,4];
var string2 = [5,6,7,811];
var string12 = string1.concat(string2);
console.log(string12);


// ÖDEV-9 --> [3,55,1,2,3,  -22, 24, -1, 0] bu dizideki elemanlardan sadece pozitif olanları ekrana yazdır
var pozitif = [3,55,1,2,3,-22,24,-1,0];
pozitif.forEach(function (element) {
    if(element>=0){
        console.log(element)
    }
});

// ÖDEV 10 --> [3,55,1,2,3,  -22, 24, -1, 0] bu dizideki elemanların pozitif olanlarının ortalaması nedir?
var yapamadımHocam = null;


// ÖDEV-11 --> 1 den 100 e kadar olan sayıları console a yazdır
var i;
for(i=1;i<101;i++)
{
    console.log(i);      
}


// ÖDEV-12 --> 1 den 100 e kadar olan çift sayıları console a yazdır
var cift;
for(cift=2;cift<101;cift=cift+2){
    console.log(cift);
}


// ÖDEV-13 --> 1 den 100 e kadar olan ASAL sayıları console a yazdır
var sayac = 0;
for(let sayi=2;sayi<=100;sayi++)
{
    var kontrol = true;
    for(let i = 2; i < sayi; i++)
    {
        if (sayi%i==0)
        {
            kontrol = false;
            break;
        }
    }
    if(kontrol==true)
    {
        console.log(sayi+"\n");
        sayac++;
    }
}


// ÖDEV-14 --> 1 den 100 e kadar 3 e bölünebilen kaç adet sayı var?
var sayac=0;
for(i=1; i<100; i++){
    if(i%3==0){
        sayac++;
    }
}
console.log("3'e tam bölünen sayı adeti=", sayac);



