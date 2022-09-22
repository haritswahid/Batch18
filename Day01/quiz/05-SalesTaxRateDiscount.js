 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

 function getSalesDiscount(price,tax,discount){
    if(isNaN(price) && isNaN(tax) && isNaN(discount)){
      return "Price, Tax & Discount harus dalam angka"
    }
    if(isNaN(price)){
      return "Price harus dalam angka"
    }
    if(isNaN(tax)){
      return "Pajak harus dalam angka"
    }
    if(isNaN(discount)){
      return "Discount harus dalam angka"
    }
    const discPrice = price*discount/100
    const priceAftDisc = price-discPrice
    const taxPriceTotal =  priceAftDisc*tax/100
    return `Total Sales : Rp.${price}\n`
        +`Discount (${discount}%) : Rp.${discPrice}\n`
        +`PriceAfterDiscount : Rp.${priceAftDisc}\n`
        +`Pajak (${tax}%) : Rp.${taxPriceTotal}\n`
        +`TotalHarga+Pajak : Rp.${priceAftDisc+taxPriceTotal}`

 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */