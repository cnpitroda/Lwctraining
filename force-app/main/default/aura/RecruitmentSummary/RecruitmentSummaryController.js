({
	onCalculate : function(component, event, helper) {
		console.log ("button clicked!!"); 
        var n1 = component.get("v.num1");
        var n2 = component.get("v.num2");
        
        helper.calculateAverage (component, n1, n2);
	}
})