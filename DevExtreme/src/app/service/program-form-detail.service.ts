import { Injectable, INJECTOR } from "@angular/core";
import { PriorityEntity } from "./program-offering.service";

const priorityEntities: PriorityEntity[] = [
    { id: 0, text: 'Low' },
    { id: 1, text: 'Normal' },
    { id: 2, text: 'Urgent' },
    { id: 3, text: 'High' },
];

@Injectable({
    providedIn: 'root'
})
export class FormDetailService {
    getPriorityEntities(): PriorityEntity[] {
        return priorityEntities;
    }

}

