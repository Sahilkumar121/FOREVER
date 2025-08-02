import { products } from "../../assets/frontend_assets/assets"

export default function SellerContainer() {
    return (
        <div className="home-seller-container">
            <div className="home-seller-container-heading" >
                <div className="home-seller-container-heading-name" >
                    <span>BEST</span> SELLERS

                </div>
                <div className="home-seller-container-heading-detail" >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </div>
            </div>
            <div className="home-seller-product-container">
                {
                    products
                        .filter(product => product.bestseller)
                        .map((product) => (
                            <div key={product._id} className="home-seller-product-preview">
                                <div className="home-seller-product-img">
                                    <img src={product.image[0]} alt={product.name} />
                                </div>
                                <div className="home-seller-product-name">
                                    {product.name}
                                </div>
                                <div className="home-seller-product-price">
                                    ${product.price}
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}