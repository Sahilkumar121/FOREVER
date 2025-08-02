import {assets} from "../../assets/frontend_assets/assets"

export default function TopContainer() {
    return (
        <div className="home-top-container">
            <div className="home-top-right-container">
                <div id="top-container-1">
                    <hr />
                    OUR BESTSELLERS
                </div>
                <div id="top-container-2">
                    LATEST ARRIVALS
                </div>
                <div id="top-container-3">
                    SHOP NOW
                    <hr />
                </div>
            </div>
            <div className="home-top-left-container">
                <img src={assets.hero_img} />
            </div>
        </div>
    )
}