export class ProgramListVM {
    public name: string;
    public offering: string;
    public publishedBy: string;
    public views: number;


    constructor(name: string, offering: string, publishedBy: string, views: number) {
        this.name = name;
        this.offering = offering;
        this.publishedBy = publishedBy;
        this.views = views;
    }


}
export class Active {
    id: number;

    text: string;



    content: string;

    constructor(id: number, text: string, content: string) {
        this.id = id;
        this.text = text;
        this.content = content;

    }
}