import React, { useState } from 'react';
import products from '../../db.json';
import Products from '../Products/Products';
import Search from '../Search/Search';
import './Home.css';
const Home = () => {
    const allProducts = products.products;


    const [data, setData] = useState(allProducts);
    // const [products, setProducts] = useState([]);
    //filtering categories
    const filterResult = (items) => {

        const result = allProducts.filter((curent_data) => {
            return curent_data.category === items;

        });
        setData(result);
        console.log(result[0].name);
    }

    const handleAddProduct=(product)=>{
        console.log("Products Added",product);
    }





    return (
        <div className="container">

            <div className="row">
                <div className="col-md-3">

                    <div className="category_container">
                        <h4 className="text-center">All Categories</h4>
                        <button className="btn btn-info w-100 mb-4" onClick={() => filterResult('Meat')}>Meat</button>
                        <button className="btn btn-info w-100 mb-4" onClick={() => filterResult('Fish')}>Fish</button>
                        <button className="btn btn-info w-100 mb-4" onClick={() => filterResult('Milk')}>Milk</button>
                        <button className="btn btn-info w-100 mb-4" onClick={() => filterResult('Beverages')}>Beverages</button>
                        <button className="btn btn-info w-100 mb-4" onClick={() => filterResult('Snacks')}>Snacks</button>
                        <button className="btn btn-info w-100 mb-4" onClick={() => filterResult('Fruits')}>Fruits</button>
                        <button className="btn btn-info w-100 mb-4" onClick={() => setData(allProducts)}>All</button>


                    </div>

                </div>
                <div className="Products_container col-md-9">
                    <div className="Products">
                        <h4 className="text-center"> Total products {allProducts.length}</h4>
                        <div className="row">

                            {
                                (data).map(pd => <Products pd={pd} handleAddProduct={handleAddProduct} key={pd.id}></Products>)
                            }
                            
                        </div>


                    </div>

                </div>


            </div>


        </div>
    );
};

export default Home;