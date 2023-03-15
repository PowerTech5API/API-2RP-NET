import api from './api';
import { Error, HoraExtraProps } from '../types';
// Criar interfaces no index
// 
class HoraExtraService {
    
    async list(): Promise<HoraExtraProps[] | Error> {
        try {
            const { data } = await api.get("/horasextras");
            console.log(data)
            return data;
        }
        catch (e:any) {
            return { error: e.message };
        }
    }

    async create(horaExtra: HoraExtraProps): Promise<HoraExtraProps | Error> {
        try {
            const { data } = await api.post("/horasextras", horaExtra);
            return data;
        }
        catch (e:any) {
            return { error: e.message };
        }
    }
    // Verificar se vai passar o id na url
    // async update(horaExtra: HoraExtraProps): Promise<HoraExtraProps | Error> {
    //     try {
    //         const { data } = await api.put("/gasto", horaExtra);
    //         return data;
    //     }
    //     catch (e:any) {
    //         return { error: e.message };
    //     }
    // }

    // async delete(id:string): Promise<HoraExtraProps | Error> {
    //     try {
    //         const { data } = await api.delete("/gasto", {
    //             data:{id}
    //         });
    //         return data;
    //     }
    //     catch (e:any) {
    //         return { error: e.message };
    //     }
    // }
}

export default new HoraExtraService();