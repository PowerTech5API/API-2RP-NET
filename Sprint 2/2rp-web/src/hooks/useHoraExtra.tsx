import { useContext } from 'react';
import { HoraExtraContext } from '../contexts/horaExtraContext';
import { HoraExtraProps } from '../types';

// useAuth é um hook que definimos
// ele retorna as propriedades do value do AuthContext.Provider
export default function useHoraExtra() {
  const context = useContext<HoraExtraProps>(HoraExtraContext);

  if (!context) {
    throw new Error('hook useAuth está sendo chamado fora do AuthProvider');
  }

  return context;

}