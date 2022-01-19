import { Injectable, INJECTOR } from "@angular/core";
import { ProgramOfferingVM } from "../model/program-offering.model";
import { PriorityEntity } from "./program-offering.service";
// const content = 'Prepare 2013 Marketing Plan: We need to double revenues in 2013 and our marketing strategy is going to be key here. R&D is improving existing products and creating new products so we can deliver great AV equipment to our customers.Robert, please make certain to create a PowerPoint presentation for the members of the executive team.';

// const simpleProducts: string[] = [
//     'HD Video Player',
//     'SuperHD Video Player',
//     'SuperPlasma 50',
//     'SuperLED 50',
//     'SuperLED 42',
//     'SuperLCD 55',
//     'SuperLCD 42',
//     'SuperPlasma 65',
//     'SuperLCD 70',
//     'Projector Plus',
//     'Projector PlusHT',
//     'ExcelRemote IR',
//     'ExcelRemote BT',
//     'ExcelRemote IP',
// ];


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
    // getContent() {
    //     return content;
    // }
    // getSimpleProducts(): string[] {
    //     return simpleProducts;
    // }
    getPriorityEntities(): PriorityEntity[] {
        return priorityEntities;
    }

}

