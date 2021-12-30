import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveAssignedDataService {
 assignedData={
  itasItaAssetId:[''],
  itaAssetName:[''],
  itasEtedEmployeeId:[''],
  itasItacCategoryId:[''],
  itasQuantity:[''],
  itasAssignedDate:[''],
  
 }
  constructor() { }
}
