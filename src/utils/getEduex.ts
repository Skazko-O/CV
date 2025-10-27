import type { EduexEntry } from "../types/eduex"; 

export const getEduex = async (): Promise<EduexEntry[]> => {
    const res = await fetch('data/eduex.json');
    if (!res.ok) throw new Error('Failed to download eduex.json');
    return res.json();
}