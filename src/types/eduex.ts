export type SupportedLang = 'en' | 'uk';
export interface EduexEntry {
    institution: Record<SupportedLang, string>;
    spacialty: Record<SupportedLang, string>;
    start_year: number;
    end_year?: number;    
    logo: string;
    text: Record<SupportedLang, string>;
    type: 'education' | 'experience';
}