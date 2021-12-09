import { wire, LightningElement } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import {fireEvent} from 'c/pubsub';

export default class Publisher extends LightningElement {
    message = 'default message'; 
    @wire (CurrentPageReference) pageRef; 

    handleChange (event){
       this.message = event.target.value; 
    }

    handleClick (){
        console.log ('fire the event');
        fireEvent (this.pageRef, 'pubsubevent', this.message); 
    }
}