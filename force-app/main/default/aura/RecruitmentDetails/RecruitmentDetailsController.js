({
	onInit : function(component, event, helper) {
		helper.fetchJobPosition (component); 
	}, 
    onTableSave : function(component, event, helper) {
		helper.updateJobPosition (component, event); 
	}
})