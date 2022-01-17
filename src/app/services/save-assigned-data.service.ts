import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveAssignedDataService {
 assignedData={
  itasAssigntId:[''],
  itaAssetName:[''],
  itasRam:[''],
  itasEtedEmployeeId:[''],
  itasItacCategoryId:[''],
  itasQuantity:[''],
  itasAssignedDate:[''],
  
 }
  constructor() { }
}
