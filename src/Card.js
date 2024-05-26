import  React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { Grid } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardComponent({ dataItem, title = "", body = "" }) {
console.log(dataItem);
    const [user, setuser] = useState(null)
    
    const [comments, setComments] = useState(null)

    useEffect(() => {
        dataItem?.userId && axios.get(`https://jsonplaceholder.typicode.com/users/${dataItem?.userId}`)
        .then(res=>{
            setuser(res.data);
        })
        .catch(e=>{
            console.log(e);
        })


        dataItem?.id && axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${dataItem?.id}`)
        .then(res=>{
            setComments(res.data);
        })
        .catch(e=>{
            console.log(e);
        })
    }, [dataItem])


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                       {/* {dataItem?.id} */}
                       {user?.username[0]}
                       
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={dataItem?.title}
                subheader="September 14, 2016"
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {dataItem?.body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>

              <Grid>
              {console.log(comments)}
             {comments?.map(comment=>(
                   <CardContent>
                    <Typography paragraph>{comment?.email}</Typography>
                    
                    <Typography paragraph>
                        {comment?.body}
                    </Typography>
                   
                   
                </CardContent>
             ))}
           
              </Grid>
                
            </Collapse>
        </Card>
    );
}
