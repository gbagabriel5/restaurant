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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { PageTablesDto } from '../model/pageTablesDto';
import { TablesDto } from '../model/tablesDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TablesControllerService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Create new Provider
     * 
     * @param tablesDto Provider
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST8(tablesDto: TablesDto, observe?: 'body', reportProgress?: boolean): Observable<TablesDto>;
    public createUsingPOST8(tablesDto: TablesDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TablesDto>>;
    public createUsingPOST8(tablesDto: TablesDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TablesDto>>;
    public createUsingPOST8(tablesDto: TablesDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (tablesDto === null || tablesDto === undefined) {
            throw new Error('Required parameter tablesDto was null or undefined when calling createUsingPOST8.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<TablesDto>(`${this.basePath}/table`,
            tablesDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all
     * 
     * @param count count
     * @param order order
     * @param page page
     * @param sortProperty sortProperty
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsingGET8(count?: number, order?: string, page?: number, sortProperty?: string, observe?: 'body', reportProgress?: boolean): Observable<PageTablesDto>;
    public getAllUsingGET8(count?: number, order?: string, page?: number, sortProperty?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageTablesDto>>;
    public getAllUsingGET8(count?: number, order?: string, page?: number, sortProperty?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageTablesDto>>;
    public getAllUsingGET8(count?: number, order?: string, page?: number, sortProperty?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (count !== undefined && count !== null) {
            queryParameters = queryParameters.set('count', <any>count);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', <any>order);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (sortProperty !== undefined && sortProperty !== null) {
            queryParameters = queryParameters.set('sortProperty', <any>sortProperty);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<PageTablesDto>(`${this.basePath}/table`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
