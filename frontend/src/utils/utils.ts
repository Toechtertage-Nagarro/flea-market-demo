import { IFleaItem } from "../components/interfaces/vendor-interfaces";
import { fleaItemKey } from "../constants/constant";

export const getFleaItemsFromLocalstorage = (): IFleaItem[] => {
  return JSON.parse(localStorage.getItem(fleaItemKey) || "{}") as IFleaItem[];
};

export const filterElements = (
  filters: string[],
  fleaItem: IFleaItem
): boolean => {
  for (const filter of filters) {
    if (
      !fleaItem.name ||
      !fleaItem.name.toLowerCase().includes(filter.toLowerCase())
    ) {
      continue;
    }

    if (fleaItem.price <= Number(filter)) {
      continue;
    }
  }

  return true;
};
