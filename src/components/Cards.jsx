import { Card,Box, Typography, CardActionArea, CardMedia, CardContent, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import css from './Cards.module.scss'

function Cards(props) {
  return (
    <Card className={css.wholeCard} >
      <CardActionArea >
            <CardMedia
              className={css.imageSet}
              component="img"
              image= {props.image}
            />
            <CardContent >
              <Box className={css.totalBids} >
                <CardMedia
                className={css.bidIcon1}
                component="img"
                image={props.image} />
                <CardMedia 
                className={css.bidIcon2}
                component="img" 
                image={props.image} />
                <CardMedia
                className={css.bidIcon3}
                component="img" 
                image={props.image} />
                <Typography className={css.bidText}>23+ Place Bit.</Typography>
                <IconButton className={css.moreIcon} ><MoreHorizIcon /></IconButton>
              </Box>
              <Typography variant="h5" component="h6" noWrap color='white'>
                {props.title}
              </Typography>
              <Typography className={css.highBidText} marginBottom="20px" variant="body2" component="h2" noWrap>
                Highest Bid : 64/7
              </Typography>
              <Typography variant="body2" component="h2" noWrap color='primary' >
                0.334wETH <IconButton className={css.favouriteIcon} ><FavoriteBorderOutlined/>207</IconButton>
              </Typography>
            </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
