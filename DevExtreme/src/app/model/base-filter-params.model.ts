import { ProgramListVM } from "./program-list.model";

export class Meta {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    itemCount: number;
    page: number;
    pageCount: number;
    take: number;

    public constructor(init?: Partial<Meta>) {
        Object.assign(this, init);
    }
}

export class BaseFilterParamsModel {
    meta: Meta;

    public constructor(init?: Partial<BaseFilterParamsModel>) {
        Object.assign(this, init);
    }
}