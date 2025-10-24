import type { EducationEntry } from "../types/education"; 

export const getEducation = async (): Promise<EducationEntry[]> => {
    const res = await fetch('/data/education.json');
    if (!res.ok) throw new Error('Failed to download education.json');
    return res.json();
}