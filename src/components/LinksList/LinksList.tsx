import styles from './LinksList.module.scss'

interface LinkItem {
    label: string;
    icon: string;
    link: string;
}

interface LinkListProps {
    title: string;   
    items: LinkItem[];
}

function LinksList({ title, items }: LinkListProps) {

    return (
        <div>
            <h2>{title}</h2>
            <div className={styles.links}>
                {items.map(({ label, icon, link }, index) => (
                    <div key={index} className={styles.itemLink}>
                        <svg>
                            <use href={`/images/icons/sprite.svg#${icon}`} />
                        </svg>
                        <a href={link} target="_blank" title={label} rel="nofolow noreferrer">{label}</a>
                    </div>
                )
                )}
            </div>
        </div>
    )

}

export default LinksList