import { assets } from "../../../assets/frontend_assets/assets"
import './footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-left-container">
                <div className="footer-logo-img">
                    <img src={assets.logo} />
                </div>
                <div className="footer-left-container-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

            </div>
            <div className="footer-middle-container">
                <div className="footer-middle-container-heading">
                    COMPANY
                </div>
                <div className="footer-middle-container-content">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Delivery</div>
                    <div>Privacy policy</div>
                </div>
            </div>

            <div className="footer-right-container">
                <div className="footer-right-container-heading">
                    GET IN TOUCH
                </div>
                <div className="footer-right-heading-content">
                    <div>+1-000-000-000-0</div>
                    <div>greatstark@gmail.com</div>
                    <div>Instagram</div>
                </div>
            </div>
        </div>
    )
}


