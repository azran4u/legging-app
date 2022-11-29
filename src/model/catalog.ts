export interface ValueLabel<V = string, L = string> {
  value: V;
  label: L;
}

export type LegOptions = 'withLeg' | 'noLeg';
export interface Leg2 extends ValueLabel<LegOptions> {}

export type DenierOptions = '200' | '120' | '40' | '20';
export interface Denier extends ValueLabel<DenierOptions> {}

export interface Color extends ValueLabel {}

export type Supplier = 'filo' | 'sharon';

export type Price2 = number;

export interface ProductPropertyDenier extends Denier {
  leg: Leg2[];
}

export interface ProductPropertyLeg extends Leg2 {
  // size:
}

export interface ProductDenierLegSize {
  kind: ProdcutKind.TIGHTS_OR_STOCKING_200_DENIER;
  denier: ProductPropertyDenier[];
}

export interface ProductFoo {
  kind: ProdcutKind.TIGHTS_OR_STOCKING_GIRLS_120_DENIER;
  foo: string;
}

export enum ProdcutKind {
  TIGHTS_OR_STOCKING_200_DENIER = 'TIGHTS_OR_STOCKING_200_DENIER',
  TIGHTS_OR_STOCKING_GIRLS_120_DENIER = 'TIGHTS_OR_STOCKING_GIRLS_120_DENIER',
  TIGHTS_OR_STOCKING_20_OR_40_DENIER = 'TIGHTS_OR_STOCKING_20_OR_40_DENIER',
  LACE_FAN_TIGHTS = 'LACE_FAN_TIGHTS',
}

export interface ProductKindField {
  kind: ProdcutKind;
}

export type Product = ProductDenierLegSize | ProductFoo;

const legs2: Leg2[] = [
  {
    value: 'withLeg',
    label: 'עם רגל',
  },
  {
    value: 'noLeg',
    label: 'ללא רגל',
  },
];

const deniers: Denier[] = [
  {
    value: '200',
    label: '200 דניר',
  },
];

const a: Product = {
  kind: ProdcutKind.TIGHTS_OR_STOCKING_200_DENIER,
  denier: [
    {
      ...deniers.find((v) => v.value === '200')!,
      leg: [
        {
          ...legs2.find((v) => v.value === 'noLeg')!,
        },
      ],
    },
  ],
};

export type Leg = 'withLeg' | 'noLeg';

export interface PriceField {
  price: PriceOptions;
}

export interface SizeOption {
  value: string;
  displayText: string;
}

export interface ColorField {
  color: Color;
}

export interface Legging200DenirSizeOption extends SizeOption, PriceField {}

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

export interface Price extends ValueLabel {}

export interface Legging200DenirProductVariants {
  sizes: Legging200DenirSizeOption[];
  colors: ColorOption[];
}

export interface ProductGlobalProperties {
  description: string;
  supplier: Supplier;
}
export interface Legging200Denir
  extends ProductGlobalProperties,
    Record<Leg, Legging200DenirProductVariants> {}

export interface LeggingGirls120DenirProductVariants {
  colors: ColorOption[];
}

export interface LeggingGirls120Denir
  extends ProductGlobalProperties,
    Record<Leg, LeggingGirls120DenirProductVariants> {
  size: SizeOption;
  price: PriceOptions;
}

export interface Catalog {
  legging200denir: Legging200Denir;
  leggingGirls120Denir: LeggingGirls120Denir;
}

export interface LegPickerOption {
  label: Leg;
  displayName: string;
}

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

export type ProductType = 'legging200denir' | '';

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
  leggingGirls120Denir: {
    supplier: 'filo',
    description: 'טייץ לילדות בגילאי 5-7',
    price: {
      perUnit: 15,
      displayText: '3 ב 40',
      aboveCountDiscount: {
        count: 3,
        price: 40 / 3,
      },
    },
    withLeg: {
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
    size: {
      value: '9-12',
      displayText: 'מידה 9-12 מיועד לגילאי 5-7',
    },
  },
};
