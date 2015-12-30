sap.ui.controller("bakthisudha.landing", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf bakthisudha.landing
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf bakthisudha.landing
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf bakthisudha.landing
*/
	onAfterRendering: function() {
		$('#AppHeader').addClass('animated bounceInUp');
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf bakthisudha.landing
*/
//	onExit: function() {
//
//	}
	
	
	createLandingList: function(){

		oModel.loadData("json/songList.json");
		
		function handlePress(oEvent){
			
		   	var obj = oEvent.getSource().getBindingContext().getObject();    	
	    	var vTitle = obj.Title;
	    	var vRaagam = obj.Raagam;
	    	var sNo = obj.SNo;			
			
		};
		
		var oItemListTemplate = new sap.m.ObjectListItem({
			type : "Active",
			//icon : "{icon}",
			//activeIcon : "{activeIcon}",
			title : "{Title}",
		//	number : "{}",
		//	numberUnit : "{Zzstatus}",
		//	numberState : sap.ui.core.ValueState.Success,
			attributes : [
			//  new sap.m.ObjectAttribute({title:"Entry Date", text: "{Zzeffectivedate}", tooltip: "Entry Date"}),
			new sap.m.ObjectAttribute({
				title : "Raagam",
				text : "{Raagam}",
				//tooltip : "Change Date"
			}),
			//     new sap.m.ObjectAttribute({title: "Approved Date", text: "{Zzapprovedate}", tooltip: "Approved Date"})
			],
			intro : "Song Number :{SNo}",
			//	icon : 
			//	activeIcon : 
			//	iconDensityAware : true
			markFavorite : false,
			markFlagged : false,
			showMarkers : false,
			press: handlePress
				//[ oController.listselect ]
		//	firstStatus: "{Zzstatus}",
		});		
		
		
		var oSongList = new sap.m.List("songList",{
			inset : false,
			showUnread : true,
			backgroundDesign:sap.m.BackgroundDesign.Transparent,
		//	 mode : sap.m.ListMode.SingleSelectMaster,
			selectionChange : handlePress
		});		
		
		oSongList.setModel(oModel);
		
		oSongList.bindItems({
			path : "/items",
			template : oItemListTemplate,
		});		
		
		
		return oSongList;
		
		
	}

});