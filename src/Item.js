import React from 'react';

function Item(props){
    let data = props.data

    return <div className='dataDiv'>
        <table>
            <tr><td>SKU</td><td>{data.itemID}</td></tr>
            <tr><td>Description</td><td>{data.receiptDescription}</td></tr>
            <tr><td>Price</td><td>${data.extendedAmount}</td></tr>

        </table>
    </div>

}

export default Item;