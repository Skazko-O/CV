import { useEffect, useState } from "react";
import type { EduexEntry } from "../../types/eduex";
import { getEduex } from "../../utils/getEduex";
import styles from './Eduex.module.scss';

type Props = {
    type: 'education' | 'experience';
    title: string;
}

function Eduex({type, title}: Props) {
    const [education, setEduex] = useState<EduexEntry[]>([]);
    const [error, setError] = useState<string | null>(null);

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
                        <div style={{height:"64px"}}> <img src={eduex.logo} alt="Logo" /> </div>
                        <div className={styles.infoSection}>
                            <h3>{eduex.institution}</h3>                            
                            <p>{eduex.spacialty} | {eduex.start_year} - {eduex.end_year}</p>                            
                            <p className="text">{eduex.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Eduex;