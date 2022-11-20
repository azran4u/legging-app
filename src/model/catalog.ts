export type Supplier = 'filo' | 'sharon';

export interface SizeOption {
  value: string;
  displayText: string;
  price: PriceOptions;
}

export interface ColorOption {
  value: string;
  color: string;
  displayName: string;
  image: string;
}
export interface AboveCountDiscount {
  count: number;
  price: number;
}
export interface PriceOptions {
  perUnit: number;
  aboveCountDiscount?: AboveCountDiscount;
  displayText: string;
}

export interface ProductVariants {
  sizes: SizeOption[];
  colors: ColorOption[];
}

export interface Legging200Denir extends Record<Leg, ProductVariants> {
  description: string;
  supplier: Supplier;
  // withLeg: ProductVariants;
  // noLeg: ProductVariants;
}
export interface Catalog {
  legging200denir: Legging200Denir;
}

export interface LegPickerOption {
  label: Leg;
  displayName: string;
}

export type Leg = 'withLeg' | 'noLeg';

export const legs: LegPickerOption[] = [
  {
    label: 'withLeg',
    displayName: 'עם רגל',
  },
  {
    label: 'noLeg',
    displayName: 'ללא רגל',
  },
];

export const catalog: Catalog = {
  legging200denir: {
    description: 'טייץ גרביון 200 דניר',
    supplier: 'filo',
    withLeg: {
      sizes: [
        {
          value: 'onesize',
          displayText: 'One Size',
          price: {
            perUnit: 22,
            aboveCountDiscount: {
              count: 3,
              price: 20,
            },
            displayText: '22 שח ליחידה. בקנייה מעל 3 יחידות 20 שח',
          },
        },
        {
          value: 'xxxl',
          displayText: 'XXXL עד XXXXXL',
          price: {
            perUnit: 30,
            displayText: '',
          },
        },
      ],
      colors: [
        {
          value: 'bordeaux',
          color: '#6e2e3f',
          displayName: 'בורדו',
          image: 'legging-bordeaux.jpg',
        },
        {
          value: 'gumpink',
          color: '#a9585e',
          displayName: 'ורוד מסטיק',
          image: 'legging-gumpink.jpg',
        },
        {
          value: 'skyblue',
          color: '#326d96',
          displayName: 'כחול שמיים',
          image: 'legging-skyblue.jpg',
        },
      ],
    },
    noLeg: {
      sizes: [
        {
          value: 'onesize',
          displayText: 'One Size',
          price: {
            perUnit: 22,
            aboveCountDiscount: {
              count: 3,
              price: 20,
            },
            displayText: '22 שח ליחידה. בקנייה מעל 3 יחידות 20 שח',
          },
        },
        {
          value: 'xxxl',
          displayText: 'XXXL עד XXXXXL',
          price: {
            perUnit: 30,
            displayText: '',
          },
        },
      ],
      colors: [
        {
          value: 'gumpink',
          color: '#a9585e',
          displayName: 'ורוד מסטיק',
          image: 'legging-gumpink.jpg',
        },
        {
          value: 'skyblue',
          color: '#326d96',
          displayName: 'כחול שמיים',
          image: 'legging-skyblue.jpg',
        },
      ],
    },
  },
};
