import { useTranslation } from 'react-i18next';
import './LanguageSwitch.scss';

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const isUkrainian = i18n.language === 'uk';

  const toggleLanguage = () => {
    const newLang = isUkrainian ? 'en' : 'uk';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className="flipswitch">
      <input type="checkbox" id="fs" checked={isUkrainian} 
      onChange={toggleLanguage}  className="flipswitch-cb" name="flipswitch"/>
      <label htmlFor="fs" className="flipswitch-label">
        <div  className="flipswitch-inner" />
        <div  className="flipswitch-switch" />
      </label>
    </div>
  );
}
