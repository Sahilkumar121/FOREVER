import { products } from "../../assets/frontend_assets/assets"

export default function CollectionContainer() {
    return (
        <div className="home-collection-container">
            <div className="home-collection-container-heading" >
                <div className="home-collection-container-heading-name" >
                    <span>LATEST</span> COLLECTIONS

                </div>
                <div className="home-collection-container-heading-detail" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </div>
            </div>
            <div className="home-collection-product-container">
                {
                    products
                        .filter(product => product.latest)
                        .map((product) => (
                            <div key={product._id} className="home-collection-product-preview">
                                <div className="home-collection-product-img">
                                    <img src={product.image[0]} alt={product.name} />
                                </div>
                                <div className="home-collection-product-name">
                                    {product.name}
                                </div>
                                <div className="home-collection-product-price">
                                    ${product.price}
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}