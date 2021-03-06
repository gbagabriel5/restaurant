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
import { ProductCategoryDto } from './productCategoryDto';
import { ProductItemDto } from './productItemDto';


export interface ProductDto { 
    control?: string;
    cost?: number;
    id?: number;
    minQuantity?: number;
    name?: string;
    price?: number;
    productCategoryDto?: ProductCategoryDto;
    productItemDtos?: Array<ProductItemDto>;
    quantity?: number;
    status?: string;
}
