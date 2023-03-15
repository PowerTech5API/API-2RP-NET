export interface Error { error: string }

export interface HoraExtraProps { id?: string, codverba: string, dia: string, datainicio: string, datafim: string, status: string }
export interface HoraContextProps
 {
    horaExtra: HoraExtraProps[];
    createHoraExtra(horaExtra: HoraExtraProps): Promise<{error: string;}>;
    deleteHoraExtra(id: string): Promise<{error: string;}>;
 }