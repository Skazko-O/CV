import { useTranslation } from 'react-i18next';
import styles from './Information.module.scss';

function Information() {
    const { t } = useTranslation();

    const contactData = [
        { type: 'date', valueKey: 'contact.dateValue', dateTime: '1982-05-25' },
        { type: 'phone', value: '+380677257114' },
        { type: 'email', value: 'skazko@outlook.com' },
        { type: 'location', valueKey: 'contact.locationValue' }
    ];
    return (
        <div>
            {contactData.map(({ type, value, valueKey, dateTime }, index) => {              
                const contentValue = valueKey ? t(valueKey) : value;

                let content;

                switch (type) {

                    case 'date':
                        content = <time dateTime={dateTime}>{contentValue}</time>;
                        break;

                    case 'phone':
                        content = <a href={`tel:${value}`} className={styles.link}>{value}</a>;
                        break;

                    case 'email':
                        content = <a href={`mailto:${value}`} className={styles.link}>{value}</a>;
                        break;

                    default:
                        content = <span>{contentValue}</span>;
                }

                return (
                    <div key={index} className={styles.contactCell}>                      
                        {content}
                    </div>
                );
            })}
        </div>
    );
}

export default Information