import { Box, Grid, Typography } from "@mui/material"
import Cards from "./Cards"
import css from './Grids.module.scss'

const Grids = () => {
  return (
    <Grid container spacing={1.5} className={css.panel} justifyContent="center" >
      <Grid item xs={12} className={css.textTop} >
        <Box item className={css.textLeft} ><Typography variant="h4">Newest Items</Typography></Box>
        <Box item className={css.textRight} >VIEW ALL→</Box>
      </Grid>
      <Grid item xs={5} md={2}>
        <Cards title="Delta25" image="https://academy-cdn.wedio.com/2022/02/3D-animation_face_Wedio.jpg" />
      </Grid>
      <Grid item xs={5} md={2}>
        <Cards title="mAtal8" image="https://academy-cdn.wedio.com/2022/02/3D-animation_shapes_Wedio.jpg" />
      </Grid>
      <Grid item xs={5} md={2}>
        <Cards title="Morgan11" image="https://academy-cdn.wedio.com/2022/02/3D-animation_two-bodies_Wedio.jpg" />
      </Grid>
      <Grid item xs={5} md={2}>
        <Cards title="#21 The Wonder" image="https://academy-cdn.wedio.com/2022/02/3D-animation_rabbit_Wedio.jpg" />
      </Grid>
      <Grid item xs={5} md={2}>
        <Cards title="Preatent" image="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=
                                       rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
      </Grid>
    </Grid>
  )
}

export default Grids
