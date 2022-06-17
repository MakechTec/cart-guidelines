
export interface Cart{
    
    list( onSuccess: Function ) : void;
    clean( onSuccess: Function ) : void;
    add( item: CartItem, onSuccess: Function ) : void;
    remove( item: CartItem, onSuccess: Function ) : void;
    find( id: number, onSuccess: Function ) : void;
    total( attributeName: string, onSuccess: Function ) : void;
    numberOfItems( onSuccess: Function ) : void;
    findItemByAttribute( attribute: Attribute, onSuccess: Function ) : void;

}

export class CartItem {
    id: number;
    attributes: Array<Attribute>;
}
export class Attribute{
    name: string;
    value: any;
}
