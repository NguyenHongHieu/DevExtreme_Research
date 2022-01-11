export class ProgramListModel {
    public programName: string;
    public offering: string;
    public publishedBy: string;
    public views: number;


    constructor(programName: string, offering: string, publishedBy: string, views: number) {
        this.programName = programName;
        this.offering = offering;
        this.publishedBy = publishedBy;
        this.views = views;
    }


}