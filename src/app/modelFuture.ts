export class ModelFuture {
    public min_temp: any;
    public temp: any;
    public max_temp: any;
    public icon: any;
    public description: any;
    public valid_date:any
    public datetime:any


    constructor(

        min_temp: any,
        temp: any,
        max_temp: any,
        icon: any,
        description: any,
        datetime:any

    ) {
        this.min_temp = min_temp;
        this.temp = temp;
        this.max_temp = max_temp;
        this.icon = icon
        this.description = description
        this.datetime = datetime

    }
}