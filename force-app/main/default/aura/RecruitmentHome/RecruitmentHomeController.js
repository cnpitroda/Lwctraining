({
	onComponentEvent : function(component, event, helper) {
		component.set ("v.searchSize", event.getParam ("searchSize"));
	}
})