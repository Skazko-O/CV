import { useEffect, useState } from "react";
import type { EduexEntry, SupportedLang } from "../../types/eduex";
import { getEduex } from "../../utils/getEduex";
import styles from './Eduex.module.scss';
import { useTranslation } from "react-i18next";

type Props = {
    type: 'education' | 'experience';
    title: string;    
}

function Eduex({type, title}: Props) {
    const [education, setEduex] = useState<EduexEntry[]>([]);
    const [error, setError] = useState<string | null>(null);
    const { i18n } = useTranslation();
    const lang = i18n.language as SupportedLang;

    useEffect(() => {
        getEduex()
        .then((data) =>{
            const filtered = data.filter((entry)=> entry.type === type);
            setEduex(filtered);
        }).catch((err) => setError(err.message));

    }, []);

    if (error) return <div>Error: {error}</div>

    return (
        <>
            <h2 className="heading">{title}</h2>
            <div>
                {education.map((eduex, index) => (
                    <div key={index} className="eduex-grid">
                        <div className="logo"> <img src={eduex.logo} alt="Logo" /> </div>
                        <div className={styles.infoSection}>
                            <h3>{eduex.institution}</h3>                            
                            <p>{eduex.spacialty} | {eduex.start_year} - {eduex.end_year ?? 'present'}</p>                            
                            <p className="text">{eduex.text[lang] ?? eduex.text.en}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Eduex;