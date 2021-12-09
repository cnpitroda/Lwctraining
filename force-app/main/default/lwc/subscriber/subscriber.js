import { wire, LightningElement } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import {registerListener, unregisterAllListeners} from 'c/pubsub';

export default class Subscriber extends LightningElement {
    eventMessage; 
    @wire (CurrentPageReference) pageRef; 

    connectedCallback (){
        console.log ('connectedcallback'); 
        registerListener ('pubsubevent', this.handleEvent, this); 
    }

    handleEvent (payload){
        console.log ('handle event');
        this.eventMessage = payload;
    }

    disconnectedCallback (){
        console.log ('disconnectedcallback');
        unregisterAllListeners (this); 
    }
}