export interface EduexEntry {
    institution: string;
    spacialty: string;
    start_year: number;
    end_year?: number;    
    logo: string;
    text: string;
    type: 'education' | 'experience';
}