export interface Tour {
  id:string;
  tour_Name: string;
  tour_Destination: string;
  tour_Description: string;
  tour_Price: number;
  isDeleted:number
  }

  export interface AddTour{
    tour_Name:string,
    tour_Destination:string,
    tour_Description:string,
    tour_Price:number
}

  