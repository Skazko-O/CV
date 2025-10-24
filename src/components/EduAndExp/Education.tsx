import { useEffect, useState } from "react";
import type { EducationEntry } from "../../types/education";
import { getEducation } from "../../utils/getEducation";

function Education() {
    const [education, setEducation] = useState<EducationEntry[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getEducation().then(setEducation).catch((err) => setError(err.message));

    }, []);

    if (error) return <div>Error: {error}</div>

    return (
        <>
            <h2 className="heading">Education</h2>
            <div>
                {education.map((edu, index) => (
                    <div key={index} className="eduex-grid">
                        <div> <img src={edu.logo} alt="Logo" /> </div>
                        <div>
                            <h3>{edu.institution}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Education;