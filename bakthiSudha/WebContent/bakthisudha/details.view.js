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
		
		var vText = songData.items[sNo].Expand;
		
   		var oTextSloga = new sap.m.Text({
   			text: vText,
   		//	textAlign: sap.ui.core.TextAlign.Center
   		});
   		
  		
   		var audioSrc = "<source src='"+audioFile+"'type='audio/mp3'>";
   		
   		var audioHtmlSong = new sap.ui.core.HTML( {
   		  content:
   		          "<audio controls>" +
   		           audioSrc +
   		          "Your browser does not support the video tag." +
   		          "</audio>"
   		});   		

   		var oTextVBox = new sap.m.VBox({
   			items : [  
   			           oTextSloga
   			         ]
   		});
   		
   		var oTextPanel = new sap.m.Panel({
   			expanded : true,
   			headerText : "Full Sloga",
   			content: [
                       oTextVBox
   			        ]
   		});
   		
   		var oAudioVBox = new sap.m.VBox({
   			items : [  
   			           audioHtmlSong
   			         ]
   		});   		
   		
   		var oAudioPanel = new sap.m.Panel({
   			  expanded : true,
   			  headerText : "Listen to the Sloga",
   			  content: [
                         oAudioVBox
   			        ]
   		});   		
		
   		var bakthiSudhaApp = sap.ui.getCore().byId("bakthiSudhaApp");
   		
 		return new sap.m.Page({
			title: Title,
			showNavButton : true,
			navButtonText : "Back",
			content: [
                       oTextPanel,
                       oAudioPanel
			          ],
			navButtonPress: function(){
				bakthiSudhaApp.to("idlanding1", "slide");
			}	,		          
			
		});
	}

});