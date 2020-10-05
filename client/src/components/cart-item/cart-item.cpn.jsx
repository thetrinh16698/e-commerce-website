import React from 'react';

import {
    CartItemContainer,
    ItemImage,
    ItemDetailsContainer,
    ItemName
} from './cart-item.style';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <ItemName>{name}</ItemName>
            <span>{quantity} * ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;