import { LightningElement, api, wire } from 'lwc';

import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_EMAIL_FIELD from '@salesforce/schema/Account.Owner.Email';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';

export default class RecordViewFormParentData extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    nameField = NAME_FIELD;

    @api recordId;
    @api objectApiName; 

    /* Load Account.Owner.Email for custom rendering */
    @wire(getRecord, {
        recordId: "$recordId",
        fields: [OWNER_EMAIL_FIELD,OWNER_NAME_FIELD]
      })
      record;

      /* Get the Account.Owner.Email value. */
      get ownerField() {
        return this.record.data
          ? getFieldValue(this.record.data, OWNER_EMAIL_FIELD)
          : "";
      }

       /* Get the Account.Owner.Email value. */
       get fullNameField() {
        return this.record.data
          ? getFieldValue(this.record.data, OWNER_NAME_FIELD)
          : "";
      }
}