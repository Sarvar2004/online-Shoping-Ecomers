import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa+= Number.parseFloat(el.price))
 return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className="summa">Summa: {new Intl.NumberFormat().format(summa)}$</p>
    </div>)
}

const showNothing = () =>{
    return (<div className='empty'>
        <h2>Tover yoq</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>House Staf</span>
                <ul className='nav'>
                    <li>Pro nas</li>
                    <li>Contact</li>
                    <li>Kabinet</li>
                </ul>
                <FaShoppingCart onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-card ${cartOpen && 'active'}`}/>

                {cartOpen && (
                    <div className="shop-cart-btn">
                        {props.orders.length > 0 ? 
                            showOrders(props) : showNothing()
                        }
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>
    )
}
