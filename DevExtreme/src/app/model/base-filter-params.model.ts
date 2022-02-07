import { ProgramListVM } from "./program-list.model";

export class BaseFilterParamsModel {
    keyword: string;
    sortColumn: string;
    sortType: string;
    skip: number;
    take: number;
    filters: GridFilterModel[];

    public constructor(init?: Partial<BaseFilterParamsModel>) {
        Object.assign(this, init);
    }
}

export class GridFilterModel {
    propertyName: string;
    value: any;
    values: any[];
    operation: string;

    public constructor(init?: Partial<GridFilterModel>) {
        Object.assign(this, init);
    }
}