function tab_clicked_SupplyPoInvoices(tabName,sheetIndex,activityName){
	let tabName1 = tabName;
	let sheetIndex1 = sheetIndex;
	let itemTypeFlage = document.getElementById('itemtypeflag').value;
	switch(tabName1){
		case 'Tab1':
			switch(sheetIndex1){	
				case '0':
				case '1':
				case '2':
					if(activityName=='AccountsUser'){
						com.newgen.omniforms.formviewer.setHeight("Frame1","1385px"); 
						com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1385px");
						com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
						com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
					}
					break;	
					
				case '3':
				case '6':
				case '7':				
					com.newgen.omniforms.formviewer.setHeight("Frame1","1575px"); 
					com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1575px");
					com.newgen.omniforms.formviewer.setTop("Tab2","1375px"); 
					com.newgen.omniforms.formviewer.setHeight("Tab1","460px"); 
					break;				
				
				case '4':
					com.newgen.omniforms.formviewer.setHeight("Frame1","1385px"); 
					com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1385px");
					com.newgen.omniforms.formviewer.setTop("Tab2","1197px"); 
					com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
					break;
					
				case '5':
					com.newgen.omniforms.formviewer.setHeight("Frame1","1185px"); 
					com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1185px");
					com.newgen.omniforms.formviewer.setTop("Tab2","995px"); 
					com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
					break;
				
				case '8':	
					com.newgen.omniforms.formviewer.setHeight("Frame1","1365px"); 
					com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1365px");
					com.newgen.omniforms.formviewer.setTop("Tab2","1175px"); 
					com.newgen.omniforms.formviewer.setHeight("Tab1","312px");  
					break;	
					
			 }
		break;
		case 'Tab2':
			switch(sheetIndex1){
				case '0': //initiator
				com.newgen.omniforms.formviewer.setHeight("Frame1","1375px"); 
				com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1375px");
				com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
				com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
				com.newgen.omniforms.formviewer.setHeight("Tab2","177px"); 
				break;
				
				case '1': //puchase user
				break;
					
				
				case '2': //store user
					if(activityName=='StoreUser'|| activityName=='AXStoreSyncException'){
						com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
						com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
						com.newgen.omniforms.formviewer.setHeight("Tab2","578px"); 
						com.newgen.omniforms.formviewer.setHeight("Frame1","1650px"); 
						com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1650px");
					}
				break;
				
				case '3': //Quality
					if(itemTypeFlage=='None'||itemTypeFlage=='PP Bags'){
						if(activityName=='QualityUser'|| activityName=='AXQualitySyncException'){
							com.newgen.omniforms.formviewer.setHeight("Frame1","1375px"); 
							com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1375px");
							com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
							com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
							com.newgen.omniforms.formviewer.setHeight("Tab2","177px"); 
						}
					}
					if(itemTypeFlage=='Quarantine'){
						if(activityName=='QualityUser'|| activityName=='AXQualitySyncException'){
							com.newgen.omniforms.formviewer.setHeight("Frame1","1750px"); 
							com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1550px");
							com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
							com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
							com.newgen.omniforms.formviewer.setHeight("Tab2","385px");  
						}
					}
				break;
				
				case '4': //acounts
				break;
				
				case '6': //AX Exception
					if(activityName=='QualityUser'|| activityName=='AXQualitySyncException'||activityName=='StoreUser'||activityName=='AXStoreSyncException'||activityName=='Initiator'){
						com.newgen.omniforms.formviewer.setHeight("Frame1","1515px"); 
						com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1515px");
						com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
						com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
						com.newgen.omniforms.formviewer.setHeight("Tab2","280px"); 
					}
				break;
				case '7':
				break;		
			}
		break;

	}
	return true;
	
}
function eventDispatched_SupplyPoInvoices(pId,pEvent){

	switch(pEvent.type)
    {           
        case 'click':
            switch(pEvent.srcElement.id)
            {
				case 'Btn_add_multplegrn':
				case 'Btn_delete_multiplegrn':
				case 'Btn_combine':
				case 'Btn_Resolve':
				return true;
				break;
				
				
				case 'Btn_Add_Maintaincharges':
				case 'Btn_Delete_Maintaincharges':
				case 'Btn_Modify_Maintaincharges':
				case 'Btn_Allocate_Maintaincharges':
				return true;
				
				
				case 'Btn_AddLine':
				case 'Btn_DeleteLine':
				case 'Btn_Clear_Vendor':
				return true;
			
				case 'Btn_updateregistration':
				case 'Btn_Modify_Withholdingtax':
				case 'Btn_Modify_Taxdocument':
				case 'Btn_Modify_Prepayment':
				return true;
				
				case 'Btn_NegativeGRN':
				return true;
				
			/*	case 'Btn_GenerateGRN':
				return true;
				
				case 'Btn_CancelGRN':
				//com.newgen.omniforms.util.showError("","Are You Sure You Want to Cancel GRN ?");	
				if(confirm("Are You Sure You Want to Cancel GRN ?"))
				{
				return true;	
				}
				else{
					return false;
				}
			*/	
				case 'btn_fetchpogedetails':
				let invoiceno = document.getElementById('invoiceno').value;
				let purchaseorderno = document.getElementById('purchaseorderno').value;
				if((invoiceno==''|| invoiceno==null)||(purchaseorderno==''||purchaseorderno==null)){
					com.newgen.omniforms.util.showError("","Invoice Number and Purchase Order No. Can not be Empty");	
					return false;
				}
				return true;
				
				case 'currency':
				case 'invoiceamount':
				case 'exchangerate':
				case 'btn_addtoinvoice':
				return false;
				
				case 'Btn_updateQuaratinedetails':
				return true;
				
				
				case 'Pick_chargescode':
				case 'Pick_category':
				case 'Pick_min':
				case 'Pick_max':
				case 'Pick_companylocation':
				case 'Pick_hsnsacvalue':
				case 'Pick_vendorlocation':
				case 'Pick_tdsgroup':
				case 'Pick_registrationno':
				case 'Pick_qocVendor':
				{
					return true;
				}
				break;		
				
			}
			switch(pId)
            {
				case 'q_gateentrylines':
				console.log("Inside button click q_gateentrylines");
				return true;
			}
						
			break;
		
		case 'change':
            switch(pEvent.srcElement.id)
            {
				case 'invoicedate':
				return true;
				break;
				
				case 'purchaseorderno':
				return true;
				break;
				
				case 'grnstartdate':
				case 'grnenddate':
				return true;
				break;
				
				case 'qoc_linenumber':
				case 'qoc_category':
                case 'qoc_chargesvalue':
                case 'qoc_chargesat':
				return true;
				
				case 'q_sb_linenumber':
				return true;
				
				case 'postingdate':
				return true;
				
				case 'invoicedate':
				return true;
				
				
				case 'qwht_tdspercent':
				return true;
				
				case 'purchaseorderno':
				return true;
				
				case 'invoiceamount':
				return true;
				
				case 'invoiceno':							
				return true;
				
				case 'q_polines_Quantity':
				return true;
				
				case 'Quality_linenumber':			
				return true;
				
				case 'Q_acceptedquantity':							
				return true;
				
				case 'Q_rejectedquantity':							
				return true;
				
				case 'purchasestatus':	
				var purchasestatus1 = document.getElementById('purchasestatus').value;
				if(purchasestatus1 =='Purchase Return'){
					com.newgen.omniforms.formviewer.setVisible("Label33", true);
					com.newgen.omniforms.formviewer.setVisible("returnpo", true);
					
				}
				else{
					com.newgen.omniforms.formviewer.setVisible("Label33", false);
					com.newgen.omniforms.formviewer.setVisible("returnpo", false);
				}								
				return true;				
				
				
				case 'initiatorstatus':
				var initiatorstatus = document.getElementById('initiatorstatus').value;
				if(initiatorstatus=='Exception'){
					com.newgen.omniforms.formviewer.setVisible("Label21", true);
				com.newgen.omniforms.formviewer.setVisible("initiatorexception", true);
				}
				else{
					com.newgen.omniforms.formviewer.setVisible("Label21", false);
					com.newgen.omniforms.formviewer.setVisible("initiatorexception", false);
				}								
				return true;

				case 'qualitystatus':
				let qualityStatus = document.getElementById('qualitystatus').value;
				let itemTypeFlag = document.getElementById('itemtypeflag').value;
				if(qualityStatus=='Exception' && itemTypeFlag=='PP Bags'){
					com.newgen.omniforms.formviewer.setVisible("Label31", true); 
					com.newgen.omniforms.formviewer.setVisible("qualityexception", true);
					com.newgen.omniforms.formviewer.setVisible("Label42", true);
					com.newgen.omniforms.formviewer.setVisible("qualityremarks", true);
					com.newgen.omniforms.formviewer.setTop("Label31","37px");
					com.newgen.omniforms.formviewer.setTop("qualityexception","56px");
				}
				else if(qualityStatus=='Exception' && itemTypeFlag=='Quarantine'){
					com.newgen.omniforms.formviewer.setVisible("Label31", true); 
					com.newgen.omniforms.formviewer.setVisible("qualityexception", true);
				//	com.newgen.omniforms.formviewer.setTop("Label31","238px");
				//	com.newgen.omniforms.formviewer.setTop("qualityexception","256px");
				}
				else if(qualityStatus=='Exception' && itemTypeFlag=='Raw Material'){
					com.newgen.omniforms.formviewer.setVisible("Label31", true); 
					com.newgen.omniforms.formviewer.setVisible("qualityexception", true);
					com.newgen.omniforms.formviewer.setTop("Label31","37px");
					com.newgen.omniforms.formviewer.setTop("qualityexception","56px");
				}else if(qualityStatus=='Exception' && (itemTypeFlag=='NULL'||itemTypeFlag=='')){
					com.newgen.omniforms.formviewer.setVisible("Label31", true); 
					com.newgen.omniforms.formviewer.setVisible("qualityexception", true);
					com.newgen.omniforms.formviewer.setTop("Label31","37px");
					com.newgen.omniforms.formviewer.setTop("qualityexception","56px");
				}
				else{
					com.newgen.omniforms.formviewer.setVisible("Label31", false); 
					com.newgen.omniforms.formviewer.setVisible("qualityexception", false);
				}
				return true;
			}
		break;
	}
}
function validate_SupplyPoInvoices(pEvent,activityName){		
	switch(pEvent)
    {           
        case 'I':
		case 'D':
		{
			console.log("Introduce/Done");
			if(activityName=='MultipleGRNInvoicing'){
				return true;
			}
			
			let initiatorstatus = document.getElementById('initiatorstatus').value;
			let previousactivity = document.getElementById('previousactivity').value;
	
				if(activityName=='Initiator'){
					let invoiceamount = document.getElementById('invoiceamount').value;
					console.log("Initiator");
						if(initiatorstatus==''){
						com.newgen.omniforms.util.showError("","Kindly enter the decision");
						return false;
						}
							 if(initiatorstatus=='Exception'){
								let initiatorException = document.getElementById('initiatorexception').value;
								console.log("initiatorException : "+initiatorException);
								if(initiatorException==''||initiatorException==null){
								com.newgen.omniforms.util.showError("","Kindly Select Any Exception");	
								return false;
								}
							}
						
							 if(invoiceamount=='' || invoiceamount==null){
								 	com.newgen.omniforms.util.showError("","Kindly Enter the Invoice Amount");
									return false;
							 }
						
				}
				
			if(activityName=='StoreUser'){
			
				let storestatus = document.getElementById('storestatus').value;
				
						if(storestatus==''){
							com.newgen.omniforms.util.showError("","Kindly select any Decision");
							return false;
						}
					
			}
			if(activityName=='PurchaseUser'){
					let exceptionstatus = document.getElementById('purchasestatus').value;
					console.log("exceptionstatus : "+exceptionstatus);
					if(previousactivity=='Initiator'){
						if(exceptionstatus=='Hold' || exceptionstatus=='' || exceptionstatus==null){
							com.newgen.omniforms.util.showError("","Clear the exception to proceed further");	
							return false;
						}
					}else{
						if(exceptionstatus=='' || exceptionstatus==null){
							com.newgen.omniforms.util.showError("","Kindly Select Any Status");	
							return false;
						}
					}
					var purchasestatus12 = document.getElementById('purchasestatus').value;
					var returnpo = document.getElementById('returnpo').value;
					if(purchasestatus12 =='Purchase Return'){
						if(returnpo==''||returnpo==null){
							com.newgen.omniforms.util.showError("","Kindly Enter Return PO Number");	
							return false;
						}
					
					}	
					
			}
			if(activityName=='QualityUser'){
				let qualitystatus = document.getElementById('qualitystatus').value;
							if(qualitystatus==''){
									com.newgen.omniforms.util.showError("","Kindly select any Decision");
									return false;
							}
							if(qualitystatus=='Exception'){
								let qualityUserException = document.getElementById('qualityexception').value;
								console.log("qualityUserException : "+qualityUserException);
								if(qualityUserException==''||qualityUserException==null){
								com.newgen.omniforms.util.showError("","Kindly Select Any Exception");	
								return false;
								}
							}
				
				return true;
			}
				/*
				let prevActivity = document.getElementById('previousactivity').value;
				let storeStatus = document.getElementById('storestatus').value;
				let purchaseStatus = document.getElementById('purchasestatus').value;
					console.log("previousactivity : "+prevActivity);
                           	var isDocAttachRGP = isMandatoryDocumentAttached("RGP");
							var isDocAttachNRGP = isMandatoryDocumentAttached("NRGP");
							var isDocAttachChallan = isMandatoryDocumentAttached("Challan");
							var isDocAttachGateOutPass = isMandatoryDocumentAttached("GateOutPass");
							if(activityName=='PurchaseUser' && prevActivity=='QualityUser' && purchaseStatus=='Replacement/Exchange'){
									if (isDocAttachRGP== false) {
										alert("Kindly attach RGP Document");
										return false;
									}
							}else if(activityName=='PurchaseUser' && prevActivity=='QualityUser' && purchaseStatus=='Purchase Return'){
									if (isDocAttachNRGP== false) {
										alert("Kindly attach NRGP Document");
										return false;
									}
							}else if(activityName=='AccountsUser' && prevActivity=='StoreUser' && storeStatus=='RGP Accepted'){
									if (isDocAttachChallan== false) {
										alert("Kindly attach Challan Document");
										return false;
									}
							}else if(activityName=='StoreUser' && prevActivity=='AccountsUser'){
									if (isDocAttachGateOutPass== false) {
										alert("Kindly attach Gate Out Pass Document");
										return false;
									}
							}else{
								
							}
*/
			return true;
		}
			break;
		  
		case 'S':
		{
			console.log("Save");
			return true;
		}
		break;				
	}
return true;
}
function formPopulated_SupplyPoInvoice(activityName){
	switch(activityName)
            {
				case 'ManualIntroduction':
					com.newgen.omniforms.formviewer.setVisible("btn_addtoinvoice", false);
					com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0 , true);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5 , false);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6 , true);
				    com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7 , false);
				break;
				
				case 'Initiator':
				com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", true);
				com.newgen.omniforms.formviewer.setHeight("Frame1","1375px"); 
				com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1375px");
				com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
				com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
				com.newgen.omniforms.formviewer.setHeight("Tab2","177px"); 
				
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7 , false);
				break;
				
				case 'StoreUser':
				case 'AXStoreSyncException':
				com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", false);
				com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
				com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
				com.newgen.omniforms.formviewer.setHeight("Tab2","578px"); 
				com.newgen.omniforms.formviewer.setHeight("Frame1","1650px"); 
				com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1650px");
				
				let previousactivity = document.getElementById('previousactivity').value;
				let purchasestatuss = document.getElementById('previousstatus').value;
				let previousstatus = document.getElementById('previousstatus').value;
				com.newgen.omniforms.formviewer.setVisible("btn_addtoinvoice", false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7 , false);
				
				if(previousactivity=='Initiator'){
					com.newgen.omniforms.formviewer.addItem("storestatus","Submit for GRN","Submit for GRN");
					com.newgen.omniforms.formviewer.addItem("storestatus","Discard","Discard");
				}
				if(previousactivity=='AccountsUser'){	
							if(previousstatus=='GRN Cancel Required'){
								com.newgen.omniforms.formviewer.addItem("storestatus","Submit GRN Cancellation","Submit GRN Cancellation");
								com.newgen.omniforms.formviewer.addItem("storestatus","Discard","Discard");
							}else{
								com.newgen.omniforms.formviewer.addItem("storestatus","Material Received","Material Received");
							}				
					
				}
				console.log("purchasestatuss A: "+purchasestatuss);
			
				if(previousactivity=='PurchaseUser' && purchasestatuss=='Purchase Return'){
					com.newgen.omniforms.formviewer.setTop("Label38","382px");		
					com.newgen.omniforms.formviewer.setVisible("storestatus", false);
					com.newgen.omniforms.formviewer.setVisible("Label39", false);
					com.newgen.omniforms.formviewer.setVisible("Label34", true);
					com.newgen.omniforms.formviewer.setVisible("gateoutpass", true);
					com.newgen.omniforms.formviewer.setVisible("Btn_NegativeGRN", true);
				}else if(previousactivity=='PurchaseUser' && purchasestatuss=='Replacement/Exchange'){
					com.newgen.omniforms.formviewer.setVisible("Label34", false);
					com.newgen.omniforms.formviewer.setVisible("gateoutpass", false);
					com.newgen.omniforms.formviewer.addItem("storestatus","RGP Accepted","RGP Accepted");
					com.newgen.omniforms.formviewer.addItem("storestatus","RGP Rejected","RGP Rejected");
				}else{
					com.newgen.omniforms.formviewer.setVisible("Label34", false);
					com.newgen.omniforms.formviewer.setVisible("gateoutpass", false);
				}
				
				break;
				
				case 'QualityUser':   //Quarantine
				case 'AXQualitySyncException': 
				com.newgen.omniforms.formviewer.setVisible("Frame7", false);
				com.newgen.omniforms.formviewer.setEnabled("Frame2",false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7 , false);	
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				let itemTypeFlag = document.getElementById('itemtypeflag').value;
				
				if(itemTypeFlag=='PP Bags'){
						com.newgen.omniforms.formviewer.setHeight("Frame1","1375px"); 
						com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1375px");
						com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
						com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
						com.newgen.omniforms.formviewer.setHeight("Tab2","177px"); 
						com.newgen.omniforms.formviewer.setVisible("Btn_updateQuaratinedetails", false);
						com.newgen.omniforms.formviewer.setVisible("Quality_linenumber", false);
						com.newgen.omniforms.formviewer.setVisible("Label112", false);
						com.newgen.omniforms.formviewer.setVisible("Frame6", false);
						com.newgen.omniforms.formviewer.setVisible("Label23", false);
						com.newgen.omniforms.formviewer.setVisible("Quality_itemselect", false); 
						com.newgen.omniforms.formviewer.setVisible("Label42", true);
						com.newgen.omniforms.formviewer.setVisible("qualityremarks", true);
						com.newgen.omniforms.formviewer.setTop("Label41","37px");
						com.newgen.omniforms.formviewer.setTop("qualitystatus","56px");
						com.newgen.omniforms.formviewer.setTop("Label42","101px");
						com.newgen.omniforms.formviewer.setTop("qualityremarks","121px");
				}
				else if(itemTypeFlag=='Quarantine'){
						com.newgen.omniforms.formviewer.setHeight("Frame1","1750px"); 
						com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1550px");
						com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
						com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
						com.newgen.omniforms.formviewer.setHeight("Tab2","385px"); 
						com.newgen.omniforms.formviewer.setVisible("Frame7", false);
						com.newgen.omniforms.formviewer.setVisible("Quality_itemselect", true); 
						com.newgen.omniforms.formviewer.setVisible("Label23", true);
						com.newgen.omniforms.formviewer.setVisible("Frame6", true);
						com.newgen.omniforms.formviewer.setVisible("Label42", true);
						com.newgen.omniforms.formviewer.setVisible("qualityremarks", true);
			//			com.newgen.omniforms.formviewer.setTop("Label42", "301px");
			//			com.newgen.omniforms.formviewer.setTop("qualityremarks", "321px");
				}
				else if (itemTypeFlag=='None'||itemTypeFlag=='NULL'||itemTypeFlag==''){
							com.newgen.omniforms.formviewer.setHeight("Frame1","1375px"); 
						com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1375px");
						com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
						com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
						com.newgen.omniforms.formviewer.setHeight("Tab2","177px"); 
						com.newgen.omniforms.formviewer.setVisible("Btn_updateQuaratinedetails", false);
						com.newgen.omniforms.formviewer.setVisible("Quality_linenumber", false);
						com.newgen.omniforms.formviewer.setVisible("Label112", false);
						com.newgen.omniforms.formviewer.setVisible("Frame6", false);
						com.newgen.omniforms.formviewer.setVisible("Label23", false);
						com.newgen.omniforms.formviewer.setVisible("Quality_itemselect", false); 
						com.newgen.omniforms.formviewer.setVisible("Label42", true);
						com.newgen.omniforms.formviewer.setVisible("qualityremarks", true);
						com.newgen.omniforms.formviewer.setTop("Label41","37px");
						com.newgen.omniforms.formviewer.setTop("qualitystatus","56px");
						com.newgen.omniforms.formviewer.setTop("Label42","101px");
						com.newgen.omniforms.formviewer.setTop("qualityremarks","121px");					
				} 	
				break;
				
				case 'PurchaseUser':
				com.newgen.omniforms.formviewer.setEnabled("Frame2", false);
				com.newgen.omniforms.formviewer.setVisible("btn_addtoinvoice", false);
			//	com.newgen.omniforms.formviewer.setHeight("Frame1","1400px"); 
			//	com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1410px");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7 , false);	
				let previousactivity1 = document.getElementById('previousactivity').value; 
				console.log("previousactivity : "+previousactivity1);
				
				console.log("previousactivity1  : "+previousactivity1);
				if(previousactivity1=='Initiator'){
			
					com.newgen.omniforms.formviewer.addItem("purchasestatus","Hold","Hold");
					com.newgen.omniforms.formviewer.addItem("purchasestatus","Exception Cleared","Exception Cleared");
				}
				if(previousactivity1=='QualityUser' || previousactivity1=='StoreUser'){
				
					com.newgen.omniforms.formviewer.addItem("purchasestatus","Replacement/Exchange","Replacement/Exchange");
					com.newgen.omniforms.formviewer.addItem("purchasestatus","Purchase Return","Purchase Return");
					let madhur = document.getElementById('purchasestatus').value;
					console.log("purchasestatus :"+madhur);
				}
				let madhur2 = document.getElementById('purchasestatus').value;
				console.log("purchasestatus madhur2:"+madhur2);				
				break;
				
				case 'AccountsUser':
					com.newgen.omniforms.formviewer.setHeight("Frame1","1385px"); 
					com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1385px");
					com.newgen.omniforms.formviewer.setTop("Tab2","1195px"); 
					com.newgen.omniforms.formviewer.setHeight("Tab1","312px"); 
					let previousactivity4 = document.getElementById('previousactivity').value; 
					let purchasestatus4 = document.getElementById('purchasestatuschecker').value; 
					console.log("previousactivity4 :"+previousactivity4);
					console.log("purchasestatus4 :"+purchasestatus4);
				if((previousactivity4=='StoreUser')&& purchasestatus4=='Replacement/Exchange'||purchasestatus4=='Purchase Return'){
					com.newgen.omniforms.formviewer.addItem("accountsstatus","Accepted","Accepted");
				}else{
					console.log("Inside else");
					com.newgen.omniforms.formviewer.addItem("accountsstatus","GRN Cancel Required","GRN Cancel Required");
					com.newgen.omniforms.formviewer.addItem("accountsstatus","Post","Post");
					com.newgen.omniforms.formviewer.addItem("accountsstatus","Discard","Discard");
				}
				
				console.log("1");
				com.newgen.omniforms.formviewer.setVisible("btn_addtoinvoice", false);
				console.log("2");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , true);
				console.log("3");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1 , false);
				console.log("4");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7 , true);	
				console.log("5");
			//	com.newgen.omniforms.formviewer.setHeight("Frame1","1400px"); 
			//	com.newgen.omniforms.formviewer.setHeight("Tab2","177px"); 
			//	com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices","1410px");
				break;
			}
			return true;
}