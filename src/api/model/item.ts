/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ItemCategory } from './itemCategory';
import { Provider } from './provider';


export interface Item { 
    cost?: number;
    id?: number;
    itemCategory?: ItemCategory;
    minQuantity?: number;
    name?: string;
    price?: number;
    provider?: Provider;
    quantity?: number;
    shelfLife?: number;
    status?: string;
    unit?: string;
}