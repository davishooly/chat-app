import { createContext } from 'react';
import { ThemesType } from './themesType';

export default createContext<ThemesType | any>(null);
