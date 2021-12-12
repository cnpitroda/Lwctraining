({
	onApplicationEvent : function(component, event, helper) {
        console.log(event.getParam("updatedRecords")); 
		component.set("v.updatedRecords", event.getParam("updatedRecords")); 
	}
})