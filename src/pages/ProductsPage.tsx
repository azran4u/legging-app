import { Grid } from '@mui/material';
import { catalog } from '../model/catalog';
import Legging200DenirComponent from '../molecules/Legging200DenirComponent';
import LeggingGirls120DenirComponent from '../molecules/LeggingGirls120DenirComponent';

export default function ProductsPage() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      spacing={2}
      md={6}
    >
      <Grid item md={4}>
        <Legging200DenirComponent legging200denir={catalog.legging200denir} />
      </Grid>
      <Grid item>
        <LeggingGirls120DenirComponent
          leggingGirls120denir={catalog.leggingGirls120Denir}
        />
      </Grid>
    </Grid>
  );
}
