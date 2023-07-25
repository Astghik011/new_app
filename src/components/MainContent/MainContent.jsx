import styles from './MainContent.module.css'
import Index from '../Index'

function MainContent(){
    return (
        <div className={`${styles.container} ${styles.mainContent}`}>
        <Index />
    </div>)
}

export default MainContent