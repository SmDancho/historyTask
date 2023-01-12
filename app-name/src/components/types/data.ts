export interface dataType {
    id:number,
    number: number,
    FromYear: string,
    toYear: string,
    type: string,
    sliderTopics:sliderTypes 
      
}

export interface sliderTypes{
    id:number
        slideryear:string
        event:string
    
}

export interface sliderTypes extends Array<sliderTypes> {};