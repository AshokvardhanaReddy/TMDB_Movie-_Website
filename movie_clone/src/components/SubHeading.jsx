
import styles from "../component-modules/ComponentModules.module.css"

 const SubHeading = ({text}) => {
    return (
        <>
        <p className = {styles.sub_heading}  >{text}</p>
        </>
    )
}

const FooterContent = ({text}) => {
    return (
        <>
        <p classNam = {styles.footer_content} >{text}</p>
        </>
    )
}

const Icon = ({url, icon}) => {
    return (
        <>
        <a href={url} className = {styles.social_icon}  >{icon}</a>
        </>
    )
}



export {SubHeading, FooterContent, Icon}