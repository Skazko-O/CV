export type SupportedLang = 'en' | 'uk';
export interface EduexEntry {
    institution: string;
    spacialty: string;
    start_year: number;
    end_year?: number;    
    logo: string;
    text: Record<SupportedLang, string>;
    type: 'education' | 'experience';
}