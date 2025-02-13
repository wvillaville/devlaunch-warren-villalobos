
/*

# Description

As part of a web application development project aimed at enhancing user experience, you're assigned a task involving the implementation of a filtering feature. This feature empowers users to refine a list of products based on their specific preferences, thereby facilitating a more tailored browsing experience. It's recommended to utilize a product interface to ensure seamless integration and maintainability.

Your goal is to design and implement a function capable of filtering products based on selected tags. The function should process multiple tag selections, returning only those products that have all of the chosen tags. To achieve this efficiently, the function will use the `Set` data structure for comparing tags.

INPUTS

products = [
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    tags: ["Red", "Healthy", "Juicy"],
  },
  {
    id: 2,
    name: "Carrot",
    category: "Vegetable",
    tags: ["Orange", "Healthy", "Crunchy"],
  },
  {
    id: 3,
    name: "Bread",
    category: "Bakery",
    tags: ["Brown", "Carbs", "Fresh"],
  },
  {
    id: 4,
    name: "Cheese",
    category: "Dairy",
    tags: ["Yellow", "Protein", "Melty"],
  },
]

filter = ["Healthy", "Orange"]

OUTPUTS
id: 2, name: 'Carrot', category: 'Vegetable', tags: [ 'Orange', 'Healthy', 'Crunchy' ]

*/

interface Product {
    id: string | number
    name: string
    category: string
    tags: string[]
  }
  
  function filterProducts(products: Product[], filters: string[]): Product[] {
    const finalProduct = new Set<Product>();
  
    for (const product of products) {
      let hasAllFilters = true;
      for (const filter of filters) {
        if (!product.tags.includes(filter)) {
          hasAllFilters = false;
          break;
        }
      }
      if (hasAllFilters) {
        finalProduct.add(product);
      }
    }
  
    return Array.from(finalProduct);
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: "Apple",
      category: "Fruit",
      tags: ["Red", "Healthy", "Juicy"],
    },
    {
      id: 2,
      name: "Carrot",
      category: "Vegetable",
      tags: ["Orange", "Healthy", "Crunchy"],
    },
    {
      id: 3,
      name: "Bread",
      category: "Bakery",
      tags: ["Brown", "Carbs", "Fresh"],
    },
    {
      id: 4,
      name: "Cheese",
      category: "Dairy",
      tags: ["Yellow", "Protein", "Melty"],
    },
  ]
  
  const filter1 = ["Healthy", "Orange"]
  const filteredProducts1 = filterProducts(products, filter1)
  console.log(filteredProducts1)