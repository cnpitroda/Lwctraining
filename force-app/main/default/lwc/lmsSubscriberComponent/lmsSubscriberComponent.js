import { LightningElement,wire } from 'lwc';
import {subscribe,unsubscribe,MessageContext} from "lightning/messageService";
import SAMPLE_CHANNEL from "@salesforce/messageChannel/SampleChannel__c";
  
export default class LmsSubscriberComponent extends LightningElement {
   //2. Wiring MessageContext to a property
  @wire(MessageContext)
  messageContext;

  receivedMessage;
  subscription = null;
  //3. Handling the user input
  handleSubscribe() {
    console.log("in handle subscribe");
    if (this.subscription) {
      return;
    }

    //4. Subscribing to the message channel
    this.subscription = subscribe(
      this.messageContext,
      SAMPLE_CHANNEL,
      (message) => {
        this.handleMessage(message);
      }
    );
  }

  handleMessage(message) {
    this.receivedMessage = message
      ? JSON.stringify(message, null, "\t")
      : "no message";
  }

  handleUnsubscribe() {
    console.log("in handle unsubscribe");

    unsubscribe(this.subscription);
    this.subscription = null;
  }

  handleClear() {
    this.receivedMessage = null;
  }
}