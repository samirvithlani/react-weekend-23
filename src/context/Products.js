import React, { useEffect } from 'react'

export const Products = (props) => {

    var products = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
        },
        {
            id: 2,
            name: "Product 2",
            price: 105
        },
        {
            id: 3,
            name: "Product 3",
            price: 200,
        },
    ]

    useEffect(() => {
      
        props.getProducts(products)
      
    }, [])
    

  return (
    <div>
        <h1>Products</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) => {
                        return (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button onClick={()=>{props.addToCart(product.id)}}>ADD TO CART</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
