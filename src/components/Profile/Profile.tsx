import styles from './Profile.module.scss';

function Profile() {    
    const avatar = 'images/profile/skazko.png';
    const description = 'Skazko Oleksandr';
    const title = 'Frontend Developer';
    return (
    <section>
        <div className={styles.profileIcon}>
            <img
                src={avatar}
                alt={description}
            />
        </div>
        <div>
            <h1>{description}</h1>
            <p className={styles.jobTitle}>{title}</p>
        </div>
    </section>)    
}

export default Profile