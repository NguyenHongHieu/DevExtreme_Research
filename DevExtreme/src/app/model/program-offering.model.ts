export class ProgramOfferingModel {
    public learningMethods: string;
    public cost: string;
    public programDate: Date;
    public EnrollmentDetail: string;

    constructor(learningMethods: string, cost: string, programDate: Date, EnrollmentDetail: string) {
        this.learningMethods = learningMethods;
        this.cost = cost;
        this.programDate = programDate;
        this.EnrollmentDetail = EnrollmentDetail;
    }
}