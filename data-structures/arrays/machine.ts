
/*
Imagine a food vending machine that offers products categorized as type A, B, and C. Each product corresponds to a specific price: $270 for type A, $340 for type B, and $390 for type C. Additionally, the vending machine accepts and dispenses coins of three denominations: $10, $50, and $100.

Your task is to develop a program that simulates the operation of this vending machine. The program should prompt the user to select a product type (A, B, or C) and then input coins until the total amount required to purchase the selected product is reached. If the amount entered exceeds the price of the chosen product, the program should return the excess coins one by one.

For instance, if a user selects product type A (priced at $270) and inputs coins totaling $300, the program should return $30 in coins as change. If a user inputs more than the required amount (e.g., $350 for product type A), the program should return the excess coins ($80 in this case) one by one.

*/


import PromptSync = require("prompt-sync");

const promt = PromptSync()

type Product = 'A'| 'B' | 'C'

interface ProductInfo {
    price: number
    food: string
}

class VendingMachine {
    private validCoins: number[]
    private totalInserted: number
    private producSelected: Product | null
    private products: Record<Product, ProductInfo>

    constructor() {
        this.producSelected = null
        this.totalInserted = 0
        this.validCoins = [1,2,5,10]
        this.products = {
            A: {price: 14, food: '🍔'},
            B: {price: 10, food: '🍕'},
            C: {price: 8, food: '🌮'},
        }
    }
}

public selectProduct = async () => {
    this.productSelected = this.requestProduct()
  
    const { price, food} = this.products[this.productSelected]
  
    while (this.totalInserted < price) {
      console.clear()
  
      const coin = this.requestCoin(price, food)
      this.totalInserted += coin
    }
    console.clear()
    console.log(`Product ${food}`)
    console.log(`Change ${this.totalInserted-price}`)
  }

  private requestProduct = (): Product => {
    let option: string = ''
  
    const options = Object.keys(this.products) as Product[]
  
    const productList = options.reduce((text, option) => {
      return text + `${option} (${this.products[option].food})`
    }, '')
  
    while (!options.includes(option as Product)) {
      console.clear()
  
      option = prompt(`Select a product ${productList}:`)
    }
    return option as Product
  }

  private requestCoin = (price: number, food: string) => {
    const coins = this.validCoins.reduce((text, coin) => `${text}${coin}`, '')
  
    console.log(
      `Product: ${food}
       Total: $${price}
       Balance: $${this.totalInserted}`
    )
  
    const coin = prompt(`Insert Coin (${coins}):`)
  
    return parseInt(coin)
  }
  
  }
  
  const vendingMachine = new VendingMachine()
  vendingMachine.selectProduct()
