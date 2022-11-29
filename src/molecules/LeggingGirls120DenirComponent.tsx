import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';
import {
  ColorOption,
  legs,
  PriceOptions,
  Legging200DenirProductVariants,
  SizeOption,
  LeggingGirls120Denir,
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
import ProductSizeComponent from '../components/ProductSizeComponent';

export interface Legging200DenirComponentProps {
  leggingGirls120denir: LeggingGirls120Denir;
}

export default function Legging200DenirComponent(
  props: Legging200DenirComponentProps
) {
  const [colors, setColors] = useState<ColorOption[]>([]);

  const [selectedImage, setSelectedImage] = useState<string>(
    'legging-bordeaux.jpg'
  );

  const [selectedColorLabel, setSelectedColorLabel] = useState<string>();
  const [selectedColorDisplayName, setSelectedColorDisplayName] =
    useState<string>('יש לבחור צבע');

  const [selectedLegLabel, setSelectedLegLabel] = useState<string>();
  const [selectedLegDisplayName, setSelectedLegDisplayName] =
    useState<string>('טרם נבחר');

  const [allowAddToCart, setAllowedAddToCart] = useState<boolean>(false);

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (selectedColorLabel && selectedLegLabel && count > 0) {
      setAllowedAddToCart(true);
    } else {
      setAllowedAddToCart(false);
    }
  }, [selectedColorLabel, selectedLegLabel, count]);

  useEffect(() => {
    const item = legs.find((leg) => leg.label === selectedLegLabel);
    if (item) {
      setSelectedLegDisplayName(item.displayName!);
      //@ts-ignore
      setColors(props.leggingGirls120denir[selectedLegLabel].colors);
    }
  }, [selectedLegLabel]);

  useEffect(() => {
    const item = colors.find((color) => color.value === selectedColorLabel);
    if (item) {
      setSelectedColorDisplayName(item.displayName!);
      setSelectedImage(item.image);
    }
  }, [selectedColorLabel]);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={'../../src/assets/' + selectedImage}
        alt={selectedImage}
        sx={{ width: '100px', height: '150px' }}
      />
      <CardContent>
        <ProductDescriptionComponent
          description={props.leggingGirls120denir.description}
        />
        <ProductPriceComponent
          price={props.leggingGirls120denir.price?.perUnit}
        />

        <ProductDiscountComponent
          displayText={props.leggingGirls120denir.price.displayText}
          aboveCountDiscount={
            props.leggingGirls120denir.price?.aboveCountDiscount
          }
        />

        <LegPickerComponent
          options={legs}
          selectedLeg={(leg) => setSelectedLegLabel(leg)}
        />

        <ProductColorPickerComponent
          colors={colors}
          selectedColorLabel={(label) => setSelectedColorLabel(label)}
        />

        <ProductSizeComponent
          displayText={props.leggingGirls120denir.size.displayText}
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
