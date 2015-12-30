
var oModel = new sap.ui.model.json.JSONModel();
var sNo;

sap.ui.jsview("bakthisudha.landing", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf bakthisudha.landing
	*/ 
	getControllerName : function() {
		return "bakthisudha.landing";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf bakthisudha.landing
	*/ 
	createContent : function(oController) {
		
		jQuery.sap.require('sap.ui.core.IconPool');
		
		
		var bakthiSudhaApp = sap.ui.getCore().byId("bakthiSudhaApp");
		bakthiSudhaApp.setBackgroundColor("#FFFFFF");
		bakthiSudhaApp.setBackgroundOpacity(0.1);
		bakthiSudhaApp.setBackgroundRepeat(false);			
		
		var oBtnMenu = new sap.m.Button("btnMenu",{
			//	text : "Help",
			icon : sap.ui.core.IconPool.getIconURI("menu2"),
			type : sap.m.ButtonType.Default,
			press: function(){
			//	oMenuContent.openBy(this);	
			}					
		});	   		
		
		
		var oAppHeader = new sap.m.Text("AppHeader",{
			text: "Bakthi Sudha", 
			textAlign: sap.ui.core.TextAlign.Center
		});	
		
		var oLandingPageHeader = new sap.m.Bar("landingHeader",{ 
			contentLeft: [oBtnMenu],
			contentMiddle: [oAppHeader],
		});    
		
		
		var oBtnSettings = new sap.m.Button("settingsButton",{
			icon : sap.ui.core.IconPool.getIconURI("action-settings"),
			type : sap.m.ButtonType.Default,
			press: function(){
				sap.m.MessageToast.show("Settings can be displayed");				
			}				
		});				

		var oBtnAbout = new sap.m.Button("AboutButton",{
			//	text : "Help",
			icon : sap.ui.core.IconPool.getIconURI("collaborate"),
			type : sap.m.ButtonType.Default,
			press: function(){
				sap.m.MessageToast.show("About us can be displayed");						
			}					
		});				
		
		var oBtnContact = new sap.m.Button("ContactButton",{
			//	text : "Help",
			icon : sap.ui.core.IconPool.getIconURI("customer-and-contacts"),
			type : sap.m.ButtonType.Default,
			press: function(){
				sap.m.MessageToast.show("Contact us can be displayed");						
			}					
		});			
		
		
		var oLandingPageFooter = new sap.m.Bar("landingFooter",{
			contentLeft :  [ oBtnSettings ],
			 contentMiddle: [oBtnAbout],								  
			 contentRight : [ oBtnContact ]
		});				
		
		
		var oLandingContent = oController.createLandingList();
		
		
 		return new sap.m.Page({
			title: "Title",
			content: [
                        oLandingContent
			],			         
			enableScrolling: true ,
			customHeader: oLandingPageHeader,
			footer : oLandingPageFooter,
		});
	}

});