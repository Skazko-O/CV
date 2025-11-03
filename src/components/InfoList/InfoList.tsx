import { useTranslation } from 'react-i18next';
import styles from './InfoList.module.scss'

interface InfoListProps {
    headingKey: string;
    items: string[];    
}

function InfoList({ headingKey, items } : InfoListProps) {
const { t } = useTranslation();
    return (
        <div>
            <h2>{t(headingKey)}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={styles.infoList}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default InfoList