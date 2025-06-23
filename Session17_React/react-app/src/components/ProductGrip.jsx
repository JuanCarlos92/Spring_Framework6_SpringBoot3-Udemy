import { ProductDetails } from "./ProductDetails"

export const ProductGrip = ({products}) => {
    return (
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return <ProductDetails product ={product}  key={product.name} />
                    })}
                </tbody>
            </table>
    )
}
