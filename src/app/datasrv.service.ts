import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasrvService {

  public pets = [
    {  name: 'Rex', type: 'Bird'} ,
    {  name: 'Ted', type: 'Fish'} ,
    {  name: 'Rosy', type: 'Bird'} ,
    {  name: 'Nimo', type: 'Fish'}
  ];

  public food = [
    {  name: 'Rex', type: 'Bird'} ,
    {  name: 'Ted', type: 'Fish'}
  ];

  constructor() { }
}
