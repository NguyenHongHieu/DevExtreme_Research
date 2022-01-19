export class ProgramOfferingVM {
    public learningMethods: string;
    public streetAddress: string;
    public city: string;
    public state: string;
    public zipcode: string;
    public cost: string;
    public startDate: Date;
    public endDate: Date;
    public startTime: Date;
    public endTime: Date;
    public EnrollmentDetail: string;

    constructor(learningMethods: string, streetAddress: string, state: string, city: string, zipcode: string, cost: string, startDate: Date, endDate: Date, startTime: Date, endTime: Date, EnrollmentDetail: string) {
        this.learningMethods = learningMethods;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.cost = cost;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.EnrollmentDetail = EnrollmentDetail;
    }
}