import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import {
  ColorOption,
  Legging200Denir,
  legs,
  PriceOptions,
  ProductVariants,
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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export interface Legging200DenirComponentProps {
  legging200denir: Legging200Denir;
}

export default function Legging200DenirComponent(
  props: Legging200DenirComponentProps
) {
  const [colors, setColors] = useState<ColorOption[]>([]);

  const [sizes, setSizes] = useState<SizeOption[]>([]);

  const [variants, setVariants] = useState<ProductVariants>();

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
      const productVariants: ProductVariants = props.legging200denir[
        selectedLegLabel
      ] as ProductVariants;
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card sx={{ width: '350px' }}>
        <CardMedia
          component="img"
          height="194"
          image={'../../src/assets/' + selectedImage}
          alt={selectedImage}
        />
        <CardContent>
          <ProductDescriptionComponent
            description={props.legging200denir.description}
          />
          <ProductPriceComponent price={priceOptions?.perUnit} />

          <ProductDiscountComponent
            aboveCountDiscount={priceOptions?.aboveCountDiscount}
          />

          <LegPickerComponent
            options={legs}
            selectedLeg={(leg) => setSelectedLegLabel(leg)}
          />

          <ProductColorPickerComponent
            colors={colors}
            selectedColorLabel={(label) => setSelectedColorLabel(label)}
          />

          <ProductSizePickerComponent
            sizes={sizes}
            selectedSizeLabel={(label) => setSelectedSizeLabel(label)}
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
    </Box>
  );
}
