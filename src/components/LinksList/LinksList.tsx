import { useTranslation } from 'react-i18next';
import styles from './LinksList.module.scss'

interface LinkItem {
    label: string;
    icon: string;
    link: string;
}

interface LinkListProps {    
    items: LinkItem[];
}

function LinksList({ items }: LinkListProps) {
const { t } = useTranslation();

    return (
        <div>
            <h2>{t('headings.links')}</h2>
            <div className={styles.links}>
                {items.map(({ label, icon, link }, index) => (
                    <div key={index} className={styles.itemLink}>
                        <svg>
                            <use href={`images/icons/sprite.svg#${icon}`} />
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