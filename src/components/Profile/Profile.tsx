import { useTranslation } from 'react-i18next';
import styles from './Profile.module.scss';

function Profile() {    
    const { t } = useTranslation();
    const avatar = 'images/profile/skazko.png';

    return (
    <section>
        <div className={styles.profileIcon}>
            <img
                src={avatar}
                alt={t('profile.name')}
            />
        </div>
        <div>
            <h1>{t('profile.name')}</h1>
            <p className={styles.jobTitle}>{t('profile.title')}</p>
        </div>
    </section>)    
}

export default Profile