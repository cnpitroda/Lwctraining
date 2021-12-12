({
	// Your renderer method overrides go here
    rerender : function (component, helper){
        var avg = component.get("v.result"); 
        
        if (avg > 10000){
            $A.util.addClass (component.find ("res"), "expensive"); 
        }
        else{
            $A.util.removeClass (component.find ("res"), "expensive"); 
        }
    }
})