import { wire, LightningElement } from 'lwc';
import getJobPositionDetails from '@salesforce/apex/RecruitmentController.getJobPositions';
import updateJobPositionsDetails from '@salesforce/apex/RecruitmentController.updateJobPositions';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ApexMethodCalls extends LightningElement {
    columns = [
        {label:"Id", fieldName: "Id", type:"text"}, 
        {label:"Name", fieldName: "Name", type:"text"}, 
        {label:"Position", fieldName: "Position__c", type:"text"},
        {label:"Status", fieldName: "Status__c", type:"text", editable:true},
        {label: "Min Salary", type:"number", fieldName:"Min_Salary__c"},
        {label: "Max Salary", type:"number", fieldName:"Max_Salary__c"}
    ];

    dt; 
    err; 
    
    @wire (getJobPositionDetails, {rtName : 'IT'})
    jobPositions ({error, data}){
        if (data){
            this.dt = data; 
        }
        if (error){
            this.err = error; 
        }
    }

    handleSave (event){
        var draft = event.detail.draftValues;
        
        updateJobPositionsDetails ({lstJP : draft})
        .then(() => {
            this.dispatchEvent(new ShowToastEvent({title: 'Success',message: 'Job Positions updated',variant: 'success'}));
        }).catch(error => {
            this.dispatchEvent(new ShowToastEvent({title: 'Error updating or reloading record',message: error.body.message,variant: 'error'}));
        });
    }
}