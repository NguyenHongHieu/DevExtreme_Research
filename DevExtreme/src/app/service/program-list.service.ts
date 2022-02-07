import { Injectable, INJECTOR } from "@angular/core";
import { API_ENDPOINTS } from "../model/API_ENDPOINT";
import { Observable } from 'rxjs';
import { ProgramListVM } from '../model/program-list.model';
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http";
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
    public getPrograms(): Observable<ProgramListVM[]> {
        return this.baseService.get(`${this.baseUrl}`);
    }
}

