({
	fetchJobPosition : function(component) {
		var action = component.get("c.getJobPositions");
        action.setParams ({rtName : "IT"}); 
        
        var columns = [{label: "Id", type:"text", fieldName:"Id"}
                       , {label: "Name", type:"text", fieldName:"Name"}
                       , {label: "Position", type:"text", fieldName:"Position__c"}
                       , {label: "Status", type:"text", fieldName:"Status__c", editable:true}
                       , {label: "Min Salary", type:"number", fieldName:"Min_Salary__c"}
                       , {label: "Max Salary", type:"number", fieldName:"Max_Salary__c"}];
        component.set("v.columns", columns); 
        
        action.setCallback (this, function (response){
            console.log (response); 
            if (response.getState() =="SUCCESS"){
                var res = response.getReturnValue();
                console.log (res); 
                component.set("v.data", res); 
                var compEvent = component.getEvent ("sampleComponentEvent"); 
                compEvent.setParams ({"searchSize": res.length}); 
                compEvent.fire(); 
            }
        });
        
        $A.enqueueAction (action);
	}, 
    updateJobPosition : function(component, event) {
        var draft = event.getParam ("draftValues"); 
        console.log (draft); 
        var action = component.get("c.updateJobPositions");
        action.setParams ({lstJP : draft}); 
        
        action.setCallback (this, function (response){
            console.log (response);
            if (response.getState() =="SUCCESS"){
                var appEvent = $A.get("e.c:ApplicationEvent");
				appEvent.setParams({ "updatedRecords" : draft });
				appEvent.fire();
            }
        }); 
        action.setAbortable(); 
        $A.enqueueAction (action);
    }
})