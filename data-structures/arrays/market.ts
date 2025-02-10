
/*

En un supermercado se está realizando una oferta promocional en colaboración con la tarjeta
Raw Input, disponible para todos los clientes.

La promoción consiste en proporcionar descuentos en las compras en función de un número específico,
'n', de productos procesados en la caja. Inicialmente, se aplica un descuento del 20% a los primeros
'n' productos.

Posteriormente, cada lote sucesivo de 'n' productos recibe un descuento que se reduce a la mitad con
respecto al lote anterior.

Por ejemplo, si 'n = 3' y el cliente compra 11 productos, los primeros tres productos reciben un
descuento del 20%, los siguientes tres productos reciben un descuento del 10%, el lote siguiente
recibe un descuento del 5%, y los dos productos finales no califican para descuento.

Para que los clientes no ordenen de forma estratégica sus productos para sacar ventaja de un mejor
descuento, el programa debe ordenar los productos de menor precio a mayor precio primero.

Después de aplicar los descuentos, el programa debe calcular y mostrar el costo total, el monto del 
descuento y el precio final a pagar.

calculateDiscount([3000, 1000, 2000], 2)
{total: 5400, subtotal: 6000, discount: 600}

*/


function calculateDiscount(prices: number[], n: numberm, basedDiscount: number = 0.2) => {
  let total = 0;
  let discount = 0;
  let subtotal = 0;

  prices.sort((a, b) => a - b);

  for (let i = 0; i < prices.length; i++) {
    if (i % n === 0) {
      discount += prices[i] * basedDiscount;
      basedDiscount /= 2;
    }
    total += prices[i];
  }

  subtotal = total - discount;

  return { total, subtotal, discount };
}
    
console.log(calculateDiscount([3000, 1000, 2000], 2));
console.log(calculateDiscount([3000, 1000, 2000, 1000, 2000, 3000], 3));
console.log(calculateDiscount([3000, 1000, 2000, 1000, 2000, 3000, 1000, 2000, 3000], 4));





