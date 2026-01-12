import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Get from localStorage or default to 'es'
        return localStorage.getItem('preferred-language') || 'es';
    });

    const toggleLanguage = () => {
        setLanguage(prev => {
            const newLang = prev === 'es' ? 'en' : 'es';
            localStorage.setItem('preferred-language', newLang);
            return newLang;
        });
    };

    useEffect(() => {
        // Update document lang attribute
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
