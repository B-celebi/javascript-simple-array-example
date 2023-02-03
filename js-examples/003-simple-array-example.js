/*
 2 - [1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. 
 Bu array'in sonucu bize yeni bir array döndürsün. 
 Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun. 
 [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.
 */

let newArray = param1 => {
    let narray = [];
    param1.forEach(param1 => {
        param1 = (param1 % 2 == 0) ? narray.push((param1 * 2)) : narray.push((param1 * 3));
    });
    //console.log(`Çift sayılar = ${paramc} \n Tek sayılar = ${paramt}`);
    console.log("Oluşturulan array:", narray)
}
newArray([1, 2, 3, 4, 5]);
