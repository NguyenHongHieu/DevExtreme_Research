export class ProgramOfferingModel {
    public learningMethods: string;
    public streetAddress: string;
    public city: string;
    public state: string;
    public zipcode: string;
    public cost: string;
    public programStartDate: Date;
    public programEndDate: Date;
    public startTime: Date;
    public endTime: Date;
    public EnrollmentDetail: string;

    constructor(learningMethods: string, streetAddress: string, state: string, city: string, zipcode: string, cost: string, programStartDate: Date, programEndDate: Date, startTime: Date, endTime: Date, EnrollmentDetail: string) {
        this.learningMethods = learningMethods;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.cost = cost;
        this.programStartDate = programStartDate;
        this.programEndDate = programEndDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.EnrollmentDetail = EnrollmentDetail;
    }
}