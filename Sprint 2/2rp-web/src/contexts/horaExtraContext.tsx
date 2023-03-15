import { createContext, useState, useEffect } from "react";
import service from "../services/horaExtra";
import { HoraExtraProps } from "../types";

export const HoraExtraContext = createContext<HoraExtraProps>(
    {} as HoraExtraProps
  );

export const HoraExtraProvider = ({ children }: any) => {
  const [horaExtra, setHoraExtra] = useState([]);
    
    const list = async () => {
        const response: any = await service.list();
        if (!response.error) {
            setHoraExtra(response);
        }
    };


    const create = async (horaExtra: HoraExtraProps): Promise<{ error: string }> => {
        const response: any = await service.create(horaExtra);
        if (response.id) {
          list();
          return { error: "" };
        }
    
        return response;
      };
    


}