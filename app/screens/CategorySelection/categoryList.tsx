import { EmissionType } from "interfaces";

const categories = [
  {
    icon: "md-nutrition",
    emissionType: EmissionType.food,
  },
  {
    icon: "md-restaurant",
    emissionType: EmissionType.meal,
  },
  {
    icon: "md-airplane",
    emissionType: EmissionType.transport,
  },
  {
    icon: "md-play-circle",
    emissionType: EmissionType.streaming,
  },
  {
    icon: "md-card",
    emissionType: EmissionType.purchase,
  },
  {
    icon: "md-shirt",
    emissionType: EmissionType.fashion,
  },
  {
    icon: "md-flash",
    emissionType: EmissionType.electricity,
  },
  {
    icon: "barcode-sharp",
    emissionType: EmissionType.productScanned,
  },
  {
    icon: "md-build",
    emissionType: EmissionType.custom,
  },
];

export { categories };
