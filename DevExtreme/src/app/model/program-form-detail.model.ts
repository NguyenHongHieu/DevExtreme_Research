import { ProgramOfferingVM } from 'src/app/model/program-offering.model';
import { off } from "devextreme/events";
import { ProgramPeriodType } from "../shared/search-form/ProgramPeriodType";
import { SkillVM } from "../shared/search-form/SkillVM";

// export class ProgramFormDetailModel {
//     public programName: string;
//     public programType: string;
//     public aboutThisProgram: string;
//     public organizationName: string;
//     public website: string;
//     public programLevel: string;
//     public ageGroup: number;
//     public careerPathway: string;
//     public programLength: string;
//     public programLengthWeek: string;
//     public learningMethods: string;
//     public address: string;
//     public addSkills: string;
//     public addSkillsSelect: string;

//     constructor(programName: string, programType: string, aboutThisProgram: string, organizationName: string, website: string, programLevel: string, ageGroup: number, careerPathway: string, programLength: string, programLengthWeek: string, learningMethods: string, address: string, addSkills: string, addSkillsSelect: string) {
//         this.programName = programName;
//         this.programType = programType;
//         this.aboutThisProgram = aboutThisProgram;
//         this.organizationName = organizationName;
//         this.website = website;
//         this.programLevel = programLevel;
//         this.ageGroup = ageGroup;
//         this.careerPathway = careerPathway;
//         this.programLength = programLength;
//         this.programLengthWeek = programLengthWeek;
//         this.learningMethods = learningMethods;
//         this.address = address;
//         this.addSkills = addSkills;
//         this.addSkillsSelect = addSkillsSelect;
//     }
// }

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

    public offerings: ProgramOfferingVM[]; // Create OfferingVM
    constructor(name: string, type: string, about: string, organization: string, website: string, level: string, ageGroup: number, careerPathway: string, periodType: ProgramPeriodType, periodLenth: number, learningMethods: string, address: string, skills: SkillVM[], offerings: ProgramOfferingVM[]) {
        this.name = name;
        this.type = type;
        this.about = about;
        this.organization = organization;
        this.website = website;
        this.level = level;
        this.ageGroup = ageGroup;
        this.careerPathway = careerPathway;
        this.periodType = periodType;
        this.periodLength = periodType;
        this.learningMethods = learningMethods;
        this.address = address;
        this.skills = skills;
        this.offerings = offerings;
    }
}
