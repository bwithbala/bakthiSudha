sap.ui.jsview("bakthisudha.details", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf bakthisudha.details
	*/ 
	getControllerName : function() {
		return "bakthisudha.details";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf bakthisudha.details
	*/ 
	createContent : function(oController) {
		
		
		var songData = oModel.getData();
		
		
   		var oText = new sap.m.Text("textExpand", {
   			text: songData[sNo].Expand
   		});
		
 		return new sap.m.Page({
			title: "Title",
			content: [
                        oText
			]
		});
	}

});