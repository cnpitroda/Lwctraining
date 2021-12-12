({
	calculateAverage : function(component, num1, num2) {
		var avg = (parseInt(num1) + parseInt (num2))/2;
        
        component.set ("v.result", avg); 
	}
})