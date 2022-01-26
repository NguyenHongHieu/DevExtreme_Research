import { Injectable, INJECTOR } from "@angular/core";
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
}

