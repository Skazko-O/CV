import styles from './Information.module.scss';

function Information() {
    const contactData = [
        { type: 'date', value: 'May 25, 1982' },
        { type: 'phone', value: '+380677257114' },
        { type: 'email', value: 'skazko@outlook.com' },
        { type: 'location', value: 'Bilohorodka, Ukraine' }
    ];
    return (
        <div>
            {contactData.map(({ type, value }, index) => {
                let content;

                switch (type) {

                    case 'date':
                        content = <time dateTime="1982-05-25">{value}</time>;
                        break;

                    case 'phone':
                        content = <a href={`tel:${value}`} className={styles.link}>{value}</a>;
                        break;

                    case 'email':
                        content = <a href={`mailto:${value}`} className={styles.link}>{value}</a>;
                        break;

                    default:
                        content = <span>{value}</span>;
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