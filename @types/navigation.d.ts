import Package from "../domain/entities/Package";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      ShoppingCart:
        | {
            vehicleName?: string;
            tripPrice?: number;
            fare?: number;
            tax?: number;
          }
        | undefined;
      MapCar: undefined;
    }
  }
}
