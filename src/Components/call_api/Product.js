

import React, { Component } from 'react'
import './Product.css'

class Product extends Component {

    constructor(){
        super();
        this.state={products:[

        ]};
    };

    componentDidMount(){
        fetch('https://api.pujakaitem.com/api/products').then(res => res.json()).then(items => this.setState({products:items}));
        // console.log(this.state.products);
    }

    filterProduct=(e)=>{
        // console.log('e');
        this.setState({products:this.state.products.filter((el)=>{
            return el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        })})
    }

  render() {
    return (
      <div>
        <h1 className='product'>Our Product</h1>

        <div className='search'>
            <input type='text' onChange={this.filterProduct}  placeholder='search products'/>
        </div>
        <div>
        {
            this.state.products.map((product)=>
            (
                <div className='heading' key={product.id}>
                    
                    <div className="cards" >
                    <img src={product.image} className="card-image" alt="Not Found"  />
                    <div className="card-style">
                        <h5 className="card-tyle-head">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <a href='#' className="btn btn-primary button">{product.company}</a>
                    </div>
                

                
                    </div>
                </div>
            ))
            
        }
        </div>
        

            
        
     </div>
    )
  }
}


export default Product;
