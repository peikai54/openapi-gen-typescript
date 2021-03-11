export const AllMethods: string[] = ['get', 'post', 'options', 'put', 'delete', 'patch', 'head'];

export const SortList = [
  'requestUrl',
  'requestPathCode',
  'requestQueryCode',
  'requestHeaderCode',
  'requestCookieCode',
  'requestBodyCode',
  'responsesCode',
  'requestFuncTypeCode',
];

export const NotModifyCode = `/* tslint:disable */
/**
* This file was automatically generated by openapi-gen-typescript.
* DO NOT MODIFY IT BY HAND.
*/\n`;

export enum ETemplateCode {
  RequestUrl = 'requestUrl',
  requestPathCode = 'requestPathCode',
  RequestQueryCode = 'requestQueryCode',
  RequestHeaderCode = 'requestHeaderCode',
  RequestCookieCode = 'requestCookieCode',
  RequestBodyCode = 'requestBodyCode',
  ResponsesCode = 'responsesCode',
  RequestFuncTypeCode = 'requestFuncTypeCode',
}
