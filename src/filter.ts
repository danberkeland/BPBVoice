import { orderRepo } from "./data";
import { SortEntityType } from "./parser";

export type Filter = {
  custNames?: string[];
  sortBy?: SortEntityType;
};

export function filterOrders(
  input: orderRepo[],
  filters: Filter
): orderRepo[] {
  let output = input;

  const languages = filters.custNames ?? [];
  if (languages.length > 0) {
    output = input.filter((repo) =>
      languages.includes(repo.custName.toLowerCase())
    );
  }

  if (filters.sortBy === undefined) {
    return output;
  }

  return output.sort((left, right) => {
    switch (filters.sortBy) {
      case SortEntityType.DelivDate:
        return left.delivDate.localeCompare(right.delivDate);
      case SortEntityType.ProdName:
        return left.prodName.localeCompare(right.prodName);
      case SortEntityType.CustName:
        return left.custName.localeCompare(right.custName);
      case SortEntityType.Qty:
        return compareNumber(left.qty, right.qty);
      
    }

    return 0;
  });
}

function compareNumber(left: number, right: number) {
  if (left < right) {
    return -1;
  }

  if (left > right) {
    return 1;
  }

  return 0;
}