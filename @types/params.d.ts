import Package from "../domain/entities/Package";

export declare global {
  type ParamList = {
    ShoppingCart: {
      vehicleName?: string;
      tripPrice?: number;
      fare?: number;
      tax?: number;
    };
  };
}
