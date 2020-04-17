export class Model{
    public temperature: number;
    public city: string;
    public date: string;
    public description: string;
    public icon: any;

    constructor(temperature: number, city: string, date: string, description: string, icon: any){
        this.temperature = temperature;    
        this.city = city;    
        this.date = date;    
        this.description = description;    
        this.icon = icon;    
    }
}