export class ProgramFormDetailModel {
    public programName: string;
    public programType: string;
    public aboutThisProgram: string;
    public organizationName: string;
    public website: string;
    public programLevel: string;
    public ageGroup: number;
    public careerPathway: string;
    public programLength: string;
    public programLengthWeek: string;
    public learningMethods: string;
    public address: string;
    public addSkills: string;
    public addSkillsSelect: string;

    constructor(programName: string, programType: string, aboutThisProgram: string, organizationName: string, website: string, programLevel: string, ageGroup: number, careerPathway: string, programLength: string, programLengthWeek: string, learningMethods: string, address: string, addSkills: string, addSkillsSelect: string) {
        this.programName = programName;
        this.programType = programType;
        this.aboutThisProgram = aboutThisProgram;
        this.organizationName = organizationName;
        this.website = website;
        this.programLevel = programLevel;
        this.ageGroup = ageGroup;
        this.careerPathway = careerPathway;
        this.programLength = programLength;
        this.programLengthWeek = programLengthWeek;
        this.learningMethods = learningMethods;
        this.address = address;
        this.addSkills = addSkills;
        this.addSkillsSelect = addSkillsSelect;
    }
}

export enum ProgramPeriodType {
    Week,
    Month,
    Year
}
export class SkillVM {
    name: string;
    level: number;
}

// Correct model
export class ProgramFormDetailVM {
    public name: string;
    public type: string;
    public about: string;
    public organization: string;
    public website: string;
    public level: string;
    public ageGroup: number;
    public careerPathway: string;
    public periodType: ProgramPeriodType;
    public periodLength: number;

    public learningMethods: string;
    public address: string; // Create Address VM
    public skills: SkillVM[];

    public offerings: OfferingVM[]; // Create OfferingVM
}