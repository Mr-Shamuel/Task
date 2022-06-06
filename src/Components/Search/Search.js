import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import products from '../../db.json';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Search = () => {
    const [query, setQuery] = useState('');
    const allProducts = products.products;

    return (

        <div className="container">
            <h6 className="text-center">Search Anything.....</h6>
            <input type="text" placeholder="Search.." onChange={(e) => setQuery(e.target.value)} name="" id="" className="form-control w-50 mx-auto my-5 text-success " />
            <div className="row">

                {
                    allProducts.filter((pd) => pd.name.toLowerCase().includes(query)).map((pd) => (

                        <div className="col-md-3 my-3">

                            <Card sx={{ maxWidth: 355 }}>
                                <CardMedia
                                    component="img"
                                    alt="productImg"
                                    height="140"
                                    image={pd.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {pd.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {pd.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">${pd.price}</Button>
                                    <Button size="small" variant="contained" color="success"><ShoppingCartIcon></ShoppingCartIcon> Add to cart</Button>
                                </CardActions>
                            </Card>



                        </div>





                    ))}
            </div>

        </div>

    );
};

export default Search;