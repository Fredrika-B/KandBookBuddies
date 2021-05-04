export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find( //funkar denna i native?
        cartItem => cartItem.documentID === nextCartItem.documentID
    ); 
};


export const handleAddToCart = ({
    prevCartItems,
    nextCartItem
}) => {
    const quantityIncrement = 1;
    const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

    if (cartItemExists) {
        return prevCartItems.map(cartItem =>
            cartItem.documentID == nextCartItem.documentID
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantityIncrement
            } : cartItem
        );
    }

    return [ //when adding a new book
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ];
};