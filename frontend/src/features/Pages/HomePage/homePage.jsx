
import CollectionContainer from "../../../Components/homePage/collectionContainer.jsx"
import SellerContainer from "../../../Components/homePage/sellerContainer.jsx"
import TopContainer from "../../../Components/homePage/topContainer.jsx"
import './home.css'

export default function Home() {
    return (
        <div className="home">
            <TopContainer />
            <CollectionContainer />
            <SellerContainer />
        </div>
    )
}
