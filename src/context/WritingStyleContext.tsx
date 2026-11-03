import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WritingStyleKey, WritingStyleConfig, WRITING_STYLES } from '../data/printingData';

interface WritingStyleContextType {
  currentStyleKey: WritingStyleKey;
  currentStyle: WritingStyleConfig;
  setWritingStyle: (style: WritingStyleKey) => void;
  availableStyles: WritingStyleConfig[];
}

const WritingStyleContext = createContext<WritingStyleContextType | undefined>(undefined);

export const WritingStyleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStyleKey, setCurrentStyleKey] = useState<WritingStyleKey>('royal');

  const setWritingStyle = (style: WritingStyleKey) => {
    setCurrentStyleKey(style);
  };

  const currentStyle = WRITING_STYLES[currentStyleKey];
  const availableStyles = Object.values(WRITING_STYLES);

  return (
    <WritingStyleContext.Provider
      value={{
        currentStyleKey,
        currentStyle,
        setWritingStyle,
        availableStyles,
      }}
    >
      {children}
    </WritingStyleContext.Provider>
  );
};

export const useWritingStyle = () => {
  const context = useContext(WritingStyleContext);
  if (!context) {
    throw new Error('useWritingStyle must be used within a WritingStyleProvider');
  }
  return context;
};
