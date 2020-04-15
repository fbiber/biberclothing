import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shopData: SHOP_DATA
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.shopData.map(({id, ...otherShopProps}) => 
                    <CollectionPreview key={id} {...otherShopProps}></CollectionPreview>)
                }
            </div>
        )
    }
}

export default ShopPage;