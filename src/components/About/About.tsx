import { useTranslation } from "react-i18next"

function About() {
    const { t } = useTranslation(); 
    return (
        <div>
            <h2 className="heading">{t('about.about')}</h2>
            <p className="text">{t('about.text')}</p>
        </div>
    )
}

export default About