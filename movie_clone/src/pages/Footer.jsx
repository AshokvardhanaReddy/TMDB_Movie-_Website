

import styles from "../page-modules/Footer.module.css";

import { FaInstagram, FaFacebookSquare} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";


import { SubHeading, FooterContent, Icon } from "../components/SubHeading";

export const Footer = () => {
    return (
        <>
       <footer className = {styles.footer_container} >
        <div className = {styles.footer_main_div}  >
            <div>
                <SubHeading text = "PROFILE" />
                <FooterContent text = "FAQ's" />
                <FooterContent text = "Pricing Plans" />
                <FooterContent text = "Order Tracking" />
                <FooterContent text = "Returns" />
            </div>

            <div>
            <SubHeading text = "RECENT POSTS" />
            <FooterContent text = "Touch of Uniqueness" />
            <FooterContent text = "Office's you won't forget" />
            <FooterContent text = "Cicilan" />
            </div>

            <div>
            <SubHeading text = "CUSTOMER" />
            <FooterContent text = "Help & Contact US" />
            <FooterContent text = "Return" />
            <FooterContent text = "Online Stores" />
            <FooterContent text = "Terms & Conditions" />
            </div>

            <div>
            <SubHeading text = "CONTACT" />
            <div className = {styles.footer_social_icons} >
             <Icon icon = {<FaInstagram/>} />
             <Icon icon = {<FaFacebookSquare/>} />
             <Icon icon = {<FaSquareXTwitter/>} />
             <Icon icon = {<CiYoutube/>} />
            </div>
            </div>

        </div>
        <hr className = {styles.footer_horizontal_line} />
        <p>&copy; 2024 TMDB API Website. All Right Reserved and Designed By Ashokvardhan</p>

       </footer>
        </>
    )
}