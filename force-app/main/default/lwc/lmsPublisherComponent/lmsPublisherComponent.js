import { LightningElement,wire } from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import SAMPLE_CHANNEL from "@salesforce/messageChannel/SampleChannel__c";


export default class LmsPublisherComponent extends LightningElement {
    message = 'sample message';


    @wire(MessageContext)
     messageContext;
    handleChange(event){
        this.message = event.target.value;
    }

    handleClick(){
        console.log('this.message'+this.message);
        const messaage = {
            data: this.message
          };
      console.log('messaage'+messaage);
          //4. Publishing the message
          publish(this.messageContext, SAMPLE_CHANNEL, messaage);
    }
}