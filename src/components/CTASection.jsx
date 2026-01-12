import React from 'react';
import Button from './ui/Button';
import './CTASection.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const CTASection = ({
    title,
    description,
    primaryText,
    primaryLink = "https://wa.me/5491126512436",
    secondaryText = "",
    secondaryLink = "",
    className = ''
}) => {
    const { language } = useLanguage();
    const t = translations[language].cta;

    return (
        <section className={`cta-section ${className}`}>
            <div className="cta-content">
                <h2 className="cta-title">{title || t.title}</h2>
                {(description || t.description) && <p className="cta-description">{description || t.description}</p>}
                <div className="cta-buttons">
                    <Button variant="primary" size="lg" to={primaryLink}>
                        {primaryText || t.contactButton}
                    </Button>
                    {secondaryText && (
                        <Button variant="secondary" size="lg" to={secondaryLink}>
                            {secondaryText}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CTASection;
