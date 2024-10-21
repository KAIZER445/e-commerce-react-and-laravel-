import React from 'react'
import { FormCheck } from 'react-bootstrap'

export default function Asidebar() {
    return (
        <div>
            <h6>Category</h6>
            <ul className='list-unstyled'>
                <li>Unisex Backpacks</li>
                <li>Fashion Wallets</li>
                <li>Crossbody Bags</li>
                <li>Toiletries & Cosmetics Bags</li>
                <li>Men's Messenger Bags</li>
                <li>Mobile Phone Cases</li>
                <li>Laptop Backpacks</li>
            </ul>
            <hr />
            <h6>Brand</h6>
            <ul className='list-unstyled'>
                <li className='d-flex gap-3'><FormCheck /> Louis Vuitton</li>
                <li className='d-flex gap-3'><FormCheck /> Gucci</li>
                <li className='d-flex gap-3'><FormCheck /> Chanel</li>
                <li className='d-flex gap-3'><FormCheck /> Hermès</li>
                <li className='d-flex gap-3'><FormCheck /> Prada</li>
                <li className='d-flex gap-3'><FormCheck /> Dior</li>
                <li className='d-flex gap-3'><FormCheck /> Fendi</li>
            </ul>
            <hr />
            <h6>Price</h6>
            <div className='d-flex w-100 gap-2'>
                <input placeholder='Min' className='w-50 py-2 px-2'/>
                <input placeholder='Max' className='w-50 py-2 px-2'/>
            </div>
            <button className='btn btn-light border rounded-0 w-100 mt-3'>SET PRICE</button>
        </div>
    )
}
