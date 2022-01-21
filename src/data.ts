export type orderRepo = {
  delivDate: string;
  custName: string;
  prodName: string;
  qty: number;
};

export const orders: orderRepo[] = [
  {
    delivDate: "01/20/2022",
    custName: "Novo",
    prodName: "Baguette",
    qty: 25
  },
  {
    delivDate: "01/20/2022",
    custName: "Big Sky",
    prodName: "Baguette",
    qty: 4
  },
  {
    delivDate: "01/20/2022",
    custName: "Kreuzberg",
    prodName: "Plain Croissant (baked)",
    qty: 12
  },
  {
    delivDate: "01/20/2022",
    custName: "Kreuzberg",
    prodName: "Bacon Date Scone",
    qty: 6
  },
  {
    delivDate: "01/20/2022",
    custName: "Kraken",
    prodName: "Ficelle",
    qty: 100
  },
  {
    delivDate: "01/20/2022",
    custName: "Novo",
    prodName: "Baguette",
    qty: 25
  },
  {
    delivDate: "01/20/2022",
    custName: "Novo",
    prodName: "Baguette",
    qty: 25
  },
];
