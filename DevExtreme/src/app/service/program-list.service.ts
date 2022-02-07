import { Injectable, INJECTOR } from "@angular/core";
import { API_ENDPOINTS } from "../model/API_ENDPOINT";
import { Observable } from 'rxjs';
import { ProgramListVM } from '../model/program-list.model';
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http";
import { BaseFilterParamsModel } from "../model/base-filter-params.model";
import { GridDataModel } from "../model/Grid-data.model";
@Injectable({
    providedIn: 'root'
})
export class ProgramListService {
    ActionOnSelect: string[] = [
        'Delete program',
        'Set to Inactive',
    ];
    AllOrganizations: string[] = [];
    Program: string[] = [];

    private baseUrl = API_ENDPOINTS.programs;
    // call API
    // private url = 'http://localhost:3000/programs/';
    constructor(private baseService: BaseService) {

    }
    public getPrograms(params: BaseFilterParamsModel): Observable<GridDataModel<ProgramListVM>> {
        return this.baseService.get(`${this.baseUrl}?take=${params.take}&skip=${params.skip}`);
    }
}

