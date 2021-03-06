import { Injectable } from "@angular/core";

import { ProgramOfferingVM } from "../model/program-offering.model";
export class PriorityEntity {
    id: number;

    text: string;
    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
    }
}

const priorityEntities: PriorityEntity[] = [
    { id: 0, text: 'Low' },
    { id: 1, text: 'Normal' },
    { id: 2, text: 'Urgent' },
    { id: 3, text: 'High' },
];

@Injectable({
    providedIn: 'root'
})
export class OfferingService {
    private offering: ProgramOfferingVM[] = []
    getPriorityEntities(): PriorityEntity[] {
        return priorityEntities;
    }
}

