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

import { ClienteDto } from '../model/clienteDto';
import { PageClienteDto } from '../model/pageClienteDto';
import { ResponseEntity } from '../model/responseEntity';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ClienteControllerService {

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
     * Remove um cliente
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;
    public deleteUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public deleteUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;
    public deleteUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
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

        return this.httpClient.delete<ResponseEntity>(`${this.basePath}/cliente`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Listagem de todos os clientes
     * 
     * @param direction direction
     * @param name name
     * @param orderby orderby
     * @param pag pag
     * @param qtd qtd
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllUsingGET(direction?: string, name?: string, orderby?: string, pag?: number, qtd?: number, observe?: 'body', reportProgress?: boolean): Observable<PageClienteDto>;
    public findAllUsingGET(direction?: string, name?: string, orderby?: string, pag?: number, qtd?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageClienteDto>>;
    public findAllUsingGET(direction?: string, name?: string, orderby?: string, pag?: number, qtd?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageClienteDto>>;
    public findAllUsingGET(direction?: string, name?: string, orderby?: string, pag?: number, qtd?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (direction !== undefined && direction !== null) {
            queryParameters = queryParameters.set('direction', <any>direction);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (orderby !== undefined && orderby !== null) {
            queryParameters = queryParameters.set('orderby', <any>orderby);
        }
        if (pag !== undefined && pag !== null) {
            queryParameters = queryParameters.set('pag', <any>pag);
        }
        if (qtd !== undefined && qtd !== null) {
            queryParameters = queryParameters.set('qtd', <any>qtd);
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

        return this.httpClient.get<PageClienteDto>(`${this.basePath}/cliente`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Salva um novo cliente
     * 
     * @param clienteDto clienteDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUsingPOST(clienteDto: ClienteDto, observe?: 'body', reportProgress?: boolean): Observable<ClienteDto>;
    public saveUsingPOST(clienteDto: ClienteDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ClienteDto>>;
    public saveUsingPOST(clienteDto: ClienteDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ClienteDto>>;
    public saveUsingPOST(clienteDto: ClienteDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (clienteDto === null || clienteDto === undefined) {
            throw new Error('Required parameter clienteDto was null or undefined when calling saveUsingPOST.');
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

        return this.httpClient.post<ClienteDto>(`${this.basePath}/cliente`,
            clienteDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Altera um cliente
     * 
     * @param clientDto clientDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT(clientDto: ClienteDto, observe?: 'body', reportProgress?: boolean): Observable<ClienteDto>;
    public updateUsingPUT(clientDto: ClienteDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ClienteDto>>;
    public updateUsingPUT(clientDto: ClienteDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ClienteDto>>;
    public updateUsingPUT(clientDto: ClienteDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (clientDto === null || clientDto === undefined) {
            throw new Error('Required parameter clientDto was null or undefined when calling updateUsingPUT.');
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

        return this.httpClient.put<ClienteDto>(`${this.basePath}/cliente`,
            clientDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
