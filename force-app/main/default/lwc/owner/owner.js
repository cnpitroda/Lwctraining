import { LightningElement } from 'lwc';

export default class Owner extends LightningElement {
    eventDetails = {}; 

    handleClick (event){
        this.template.querySelector('c-child').updateCompanyName ('CTS');
    }

    handleSampleevent (event){
        console.log('handleSampleevent'+event.detail);
        this.eventDetails = event.detail; 
        console.log (this.eventDetails); 
    }
}