export type Frequency = {
  value: string;
  label: string;
  priceSuffix: string;
};

export type Price = {
  monthly: string;
  annually: string;
};

export type Tier = {
  price: Price;
};
