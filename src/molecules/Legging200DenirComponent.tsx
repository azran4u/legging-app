import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';
import {
  ColorOption,
  Legging200Denir,
  legs,
  PriceOptions,
  Legging200DenirProductVariants,
  SizeOption,
} from '../model/catalog';
import ProductDescriptionComponent from '../components/ProductDescriptionComponent';
import ProductPriceComponent from '../components/ProductPriceComponent';
import ProductDiscountComponent from '../components/ProductDiscountComponent';
import LegPickerComponent from '../components/LegPickerComponent';
import ProductColorPickerComponent from '../components/ProductColorPickerComponent';
import ProductSizePickerComponent from '../components/ProductSizePickerComponent';
import ProductCountPickerComponent from '../components/ProductCountPickerComponent';
import AddToCartComponent from '../components/AddToCartComponent';
import { Box } from '@mui/material';

export interface Legging200DenirComponentProps {
  legging200denir: Legging200Denir;
}

export default function Legging200DenirComponent(
  props: Legging200DenirComponentProps
) {
  const [colors, setColors] = useState<ColorOption[]>([]);

  const [sizes, setSizes] = useState<SizeOption[]>([]);

  const [variants, setVariants] = useState<Legging200DenirProductVariants>();

  const [priceOptions, setPriceOptions] = useState<PriceOptions>();

  const [selectedImage, setSelectedImage] = useState<string>(
    'legging-bordeaux.jpg'
  );

  const [selectedColorLabel, setSelectedColorLabel] = useState<string>();
  const [selectedColorDisplayName, setSelectedColorDisplayName] =
    useState<string>('יש לבחור צבע');

  const [selectedSizeLabel, setSelectedSizeLabel] = useState<string>();
  const [selectedSizeDisplayName, setSelectedSizeDisplayName] =
    useState<string>('יש לבחור מידה');

  const [selectedLegLabel, setSelectedLegLabel] = useState<string>();
  const [selectedLegDisplayName, setSelectedLegDisplayName] =
    useState<string>('טרם נבחר');

  const [allowAddToCart, setAllowedAddToCart] = useState<boolean>(false);

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (
      selectedColorLabel &&
      selectedSizeLabel &&
      selectedLegLabel &&
      count > 0
    ) {
      setAllowedAddToCart(true);
    } else {
      setAllowedAddToCart(false);
    }
  }, [selectedColorLabel, selectedSizeLabel, selectedLegLabel, count]);

  useEffect(() => {
    if (variants) {
      setColors(variants.colors);
      setSizes(variants.sizes);
    }
  }, [variants]);

  useEffect(() => {
    const item = legs.find((leg) => leg.label === selectedLegLabel);
    if (item) {
      setSelectedLegDisplayName(item.displayName!);
    }

    if (selectedLegLabel) {
      //@ts-ignore
      const productVariants: Legging200DenirProductVariants = props
        .legging200denir[selectedLegLabel] as Legging200DenirProductVariants;
      setVariants(productVariants);
    }
  }, [selectedLegLabel]);

  useEffect(() => {
    const item = colors.find((color) => color.value === selectedColorLabel);
    if (item) {
      setSelectedColorDisplayName(item.displayName!);
      setSelectedImage(item.image);
    }
  }, [selectedColorLabel]);

  useEffect(() => {
    const size = variants?.sizes.find(
      (size) => size.value === selectedSizeLabel
    );
    if (size) {
      setPriceOptions(size?.price);
      setSelectedSizeDisplayName(size?.displayText);
    }
  }, [variants, selectedSizeLabel]);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <CardContent>
        <ProductDescriptionComponent
          description={props.legging200denir.description}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'normal',
          }}
        >
          <CardMedia
            component="img"
            image={'../../src/assets/' + selectedImage}
            alt={selectedImage}
            sx={{ width: '100px', height: '150px' }}
          />
          <Box>
            <ProductPriceComponent price={priceOptions?.perUnit} />

            <ProductDiscountComponent
              aboveCountDiscount={priceOptions?.aboveCountDiscount}
            />

            <LegPickerComponent
              options={legs}
              selectedLeg={(leg) => setSelectedLegLabel(leg)}
            />
          </Box>
        </Box>

        <ProductSizePickerComponent
          sizes={sizes}
          selectedSizeLabel={(label) => setSelectedSizeLabel(label)}
        />

        <ProductColorPickerComponent
          colors={colors}
          selectedColorLabel={(label) => setSelectedColorLabel(label)}
        />

        <ProductCountPickerComponent
          selectedCount={(count) => setCount(count)}
        />
        <AddToCartComponent
          enabled={allowAddToCart}
          add={() => console.log('add to cart')}
        />
      </CardContent>
    </Card>
  );
}
