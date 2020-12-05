import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasrvService {

  public pets = [
    {  name: 'Rex', type: 'Bird', isChecked: false} ,
    {  name: 'Ted', type: 'Fish', isChecked: false} ,
    {  name: 'Rosy', type: 'Bird', isChecked: false} ,
    {  name: 'Nimo', type: 'Fish', isChecked: false}
  ];

  public food = [
    {  name: 'Rex', type: 'Bird', isChecked: false} ,
    {  name: 'Ted', type: 'Fish', isChecked: false}
  ];

  constructor() { }
}
