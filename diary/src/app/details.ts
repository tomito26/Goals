export class Details {

    showEntries:boolean;
    constructor(public title:string, public activityDate:Date, public entryDetails:string){
        this.showEntries =  false
    }
}
