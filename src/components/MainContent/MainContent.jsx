import styles from './MainContent.module.css'
import Index from '../Routes/Index'

function MainContent(){
    return (
        <div className={`${styles.container} ${styles.main_content}`}>
        <Index />
    </div>)
}

export default MainContent