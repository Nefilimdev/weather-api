export class Model {
    public temperature: number;
    public city: string;
    public date: string;
    public description: string;
    public icon: any;
    public sunrise: string;
    public sunset: any;
    public wind_spd: any;
    public rh: any;

    constructor(
        temperature: number,
        city: string,
        date: string,
        description: string,
        icon: any,
        sunrise: string,
        sunset: any,
        wind_spd: any,
        rh: any
    ) {
        this.temperature = temperature;
        this.city = city;
        this.date = date;
        this.description = description;
        this.icon = icon;
        this.sunrise = sunrise;
        this.sunset = sunset;
        this.wind_spd = wind_spd;
        this.rh = rh;
    }
}