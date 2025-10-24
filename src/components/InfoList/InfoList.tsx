import styles from './InfoList.module.scss'

interface InfoListProps {
    title: string;
    items: string[];    
}

function InfoList({ title, items } : InfoListProps) {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={styles.infoList}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default InfoList