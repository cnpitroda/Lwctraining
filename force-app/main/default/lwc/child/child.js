import { api, track, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    firstName = 'Suvarna';
    lastName= 'Yande'; 
    @api companyName = 'Cognizant'; 

    get uppercasedFullName (){
        return this.firstName.toUpperCase() + ' ' + this.lastName.toUpperCase(); 
    }

    handleChange (event){
        if (event.target.name == "firstName"){
            this.firstName = event.target.value;
        }        
        if (event.target.name == "lastName"){
            this.lastName = event.target.value;
        }
    }

    @api
    updateCompanyName (newName){
        console.log('Child method'); 
        this.companyName = newName; 
    }

    @track fullName = {firstName : 'first Name', lastName : 'last Name'}; 

    handleClick (event){
        console.log ('Handle Change');
        this.fullName.firstName = 'John'; 
        this.fullName.lastName = "Smith";
    }

    handleNotifyClick (event){
        console.log ('handleNotifyClick');
        let eventDetails = {fN : this.firstName, lN : this.lastName};
        let evt = new CustomEvent ('sampleevent', {detail : eventDetails}); 
        this.dispatchEvent (evt); 
    }
}


















/*
    
        
    
    @api
    updateCompanyName (newName){
        console.log('Child method'); 
        this.companyName = newName; 
    }
    
    @track fullName = {firstName : 'firstName', lastName : 'lastName'}; 

    handleClick(){
        this.fullName.firstName = 'John'; 
    }
    
    notifyParent (){
        var eventDetails = {firstName:this.firstName, lastName: this.lastName}; 
        var evt = new CustomEvent ('childevent', { detail:  eventDetails}); 
        this.dispatchEvent (evt); 
    }
*/