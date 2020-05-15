function eventDispatched_RABill(pId,pEvent)
{
	switch(pEvent.type)
    {           
        case 'click':
            switch(pEvent.srcElement.id)
            {
				case 'qratd_exempt':
				{
					return true;
					break;
				}
				
				case 'Btn_RA_TDS':
				{
					return true;
				}
				break;
				
				case 'Btn_fetchPO':
				{
					return true;
				}
				break;
				
				
				case 'Btn_Update_Withholdingtax':
				case 'Btn_Modify_Taxdocument':
				case 'Btn_Add_LineJournal':
				case 'Btn_Modify_LineJournal':
				case 'Btn_Delete_LineJournal':
				case 'Btn_Add_AbstractSheet':
				case 'Btn_Modify_AbstractSheet':
				case 'Btn_Delete_Itemjournal':
				case 'Btn_Delete_AbstractSheet':
				case 'Btn_Add_Itemjournal':
				case 'Btn_Modify_Itemjournal':
				case 'Btn_Validate_Itemjournal':
				case 'Btn_Applytoall':
				case 'Pick_companyLocation':
				case 'Pick_hsnsacvalue':
				case 'Pick_structurename':
				case 'Pick_configuration':
				case 'Pick_site':
				case 'Pick_itemno':
				case 'Pick_projectcategory':
				case 'Pick_companylocation':
				case 'Pick_vendorlocation':
				case 'Pick_prjcategory_Vi_li':
				case 'Pick_tefrid':
				console.log("inside button click PICK_tefrid");
				{
					return true;
				}
				break;
			}
			break;
			
			case 'change':
            switch(pEvent.srcElement.id)
            {
				case 'invoicedate':
				return true;
				break;
				
				case 'qrawht_adjustedoriginamount':
				{
					return true;
				}
				break;
				
				case 'qwht_tdspercent':
				case 'qpo_quantity':
				case 'qpo_remainingqty':
				{
					return true;
				}
				break;
				case 'qpo_currentquantity':
				{
					return true;
				}
				break;
				case 'location':
				{
					return true;
				}
				break;
				case 'ij_projectcode':
				{
					return true;
				}
				break;
				case 'currency':
				case 'vendoramount':
                case 'exchangerate':
				{
					return true;
				}
				break;
				case 'filestatus':
				{
					return true;
				}
				break;
				
				case 'qratd_gstratetype':
				{
					return true;
				}
				break;
			}
			break;
			return true;
	}
}


function tab_clicked_RABill(tabName,sheetIndex,activityName){
	
	let tabName1 = tabName;
	let sheetIndex1 = sheetIndex;
	console.log("tabName1 : "+tabName1);
	console.log("sheetIndex1 : "+sheetIndex1);
	console.log("activityName : "+activityName);
	switch(tabName1){
		case 'Tab1': //Tab Name
			switch(sheetIndex1){
				
				case '0':
				if(activityName=='Indexer'||activityName=='Introduction'){
					com.newgen.omniforms.formviewer.setHeight("Tab1","430px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","765px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1215px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1225px");
				com.newgen.omniforms.formviewer.setTop("Tab2","855px");
				}else if(activityName=='Accounts'){
					com.newgen.omniforms.formviewer.setHeight("Tab1","323px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","600px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1090px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1095px");
				com.newgen.omniforms.formviewer.setTop("Tab2","725px");
				}else if(activityName=='Approver'){
					com.newgen.omniforms.formviewer.setHeight("Tab1","323px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","600px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1090px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1095px");
				com.newgen.omniforms.formviewer.setTop("Tab2","725px");
				}
				break;
				
				case '1':
				if(activityName=='Indexer'||activityName=='Introduction'){
						com.newgen.omniforms.formviewer.setHeight("Tab1","352px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","625px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1115px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1120px");
				com.newgen.omniforms.formviewer.setTop("Tab2","750px");
				}else if(activityName=='Accounts'){
					com.newgen.omniforms.formviewer.setHeight("Tab1","323px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","600px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1090px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1095px");
				com.newgen.omniforms.formviewer.setTop("Tab2","725px");
				}else if(activityName=='Approver'){
					com.newgen.omniforms.formviewer.setHeight("Tab1","323px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","600px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1090px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1095px");
				com.newgen.omniforms.formviewer.setTop("Tab2","725px");
				}
				break;
				
				case '2': //Item Journal
					if(activityName=='Indexer'||activityName=='Introduction'){
					com.newgen.omniforms.formviewer.setHeight("Tab1","462px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","790px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1265px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1270px");
				com.newgen.omniforms.formviewer.setTop("Tab2","895px");
				}else if(activityName=='Accounts'){
					com.newgen.omniforms.formviewer.setHeight("Tab1","323px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","600px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1090px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1095px");
				com.newgen.omniforms.formviewer.setTop("Tab2","725px");
				}else if(activityName=='Approver'){
					com.newgen.omniforms.formviewer.setHeight("Tab1","323px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","600px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1090px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1095px");
				com.newgen.omniforms.formviewer.setTop("Tab2","725px");
				}
				return true;
	        	break;
				
				case '3': //Vendor Invoice
				com.newgen.omniforms.formviewer.setHeight("Tab1","505px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","845px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1300px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1305px");
				com.newgen.omniforms.formviewer.setTop("Tab2","935px");
				return true;
	        	break;
				
				case '4':
					com.newgen.omniforms.formviewer.setHeight("Tab1","343px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","630px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1110px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1115px");
				com.newgen.omniforms.formviewer.setTop("Tab2","750px");
				break;
				
				case '5': //Retention
				com.newgen.omniforms.formviewer.setHeight("Tab1","223px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","410px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","885px");
				com.newgen.omniforms.formviewer.setHeight("RABill","890px");
				com.newgen.omniforms.formviewer.setTop("Tab2","525px");
				return true;
	        	break;
				
				case '6': //Withholding Tax Information
				com.newgen.omniforms.formviewer.setHeight("Tab1","372px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","645px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1140px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1145px");
				com.newgen.omniforms.formviewer.setTop("Tab2","780px");
				return true;
	        	break;
				
				case '7': //Tax Document
				com.newgen.omniforms.formviewer.setHeight("Tab1","475px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","805px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1275px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1280px");
				com.newgen.omniforms.formviewer.setTop("Tab2","910px");
				return true;
	        	break;
				
				
			
			}
		break;
		case 'Tab2': //Tab Name
			switch(sheetIndex1){
				case '3':
				return true;
			}
		break;	
	} 
} 

function validate_RABill(pEvent,activityName){		
	switch(pEvent)
    {           
        case 'I':
		case 'D':
		{
			var filestatus = document.getElementById('filestatus').value;
			var remarks = document.getElementById('Text69').value;
			var rabillno = document.getElementById('rabillno').value;
			var location1 = document.getElementById('location').value;
			var rabilldate = document.getElementById('rabilldate').value;
			var postingdate = document.getElementById('postingdate').value;
			console.log("Introduce/Done");
			if(activityName=='Indexer'){
					if(rabillno==''){
						com.newgen.omniforms.util.showError("","Kindly Enter Ra Bill No");
						return false;
					}
					if(rabilldate==''){
						com.newgen.omniforms.util.showError("","Kindly Enter Ra Bill Date");
						return false;
					}
					if(location1==''){
						com.newgen.omniforms.util.showError("","Kindly Select Any Location");
						return false;
					}
			}
			
			else if(activityName=='Accounts'){
				if(postingdate==''){
					com.newgen.omniforms.util.showError("","Kindly Enter Posting Date");
					return false;
				}
			}
			else if(activityName=='Indexer'||activityName=='Approver'||activityName=='Accounts'){
				if(filestatus==''){
					com.newgen.omniforms.util.showError("","Kindly Select File Status");
					return false;
				}
				if(remarks==''){
					com.newgen.omniforms.util.showError("","Kindly Enter Remarks");
					return false;
				}
			
			}
			
			
			
			
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

function formPopulated_RABill(activityName){
switch(activityName)
            {
				case 'Introduction':
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				com.newgen.omniforms.formviewer.setEnabled("postingdate", false);
				com.newgen.omniforms.formviewer.setEnabled("duedate", false);
				com.newgen.omniforms.formviewer.setHeight("Tab1","430px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","765px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1220px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1225px");
				com.newgen.omniforms.formviewer.setTop("Tab2","855px");
				break;
				
				case 'Indexer':
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				com.newgen.omniforms.formviewer.setEnabled("postingdate", false);
				com.newgen.omniforms.formviewer.setEnabled("duedate", false);
				
				com.newgen.omniforms.formviewer.setHeight("Tab1","430px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","765px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1220px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1225px");
				com.newgen.omniforms.formviewer.setTop("Tab2","855px");
				break;
				
				case 'Approver':
				case 'PurchaseUser':
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				com.newgen.omniforms.formviewer.setEnabled("Frame2", false);
				com.newgen.omniforms.formviewer.setEnabled("Tab2", false);
				com.newgen.omniforms.formviewer.setEnabled("Tab1", false);
				com.newgen.omniforms.formviewer.setEnabled("Text69", true);
				com.newgen.omniforms.formviewer.setEnabled("filestatus", true);
				com.newgen.omniforms.formviewer.setHeight("Tab1","323px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","600px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1090px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1095px");
				com.newgen.omniforms.formviewer.setTop("Tab2","725px");
				break;
				
				case 'Accounts':
				case 'AXSyncException':
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , true);
				
				com.newgen.omniforms.formviewer.setHeight("Tab1","323px");
				com.newgen.omniforms.formviewer.setHeight("Frame2","600px");
				com.newgen.omniforms.formviewer.setHeight("Frame1","1090px");
				com.newgen.omniforms.formviewer.setHeight("RABill","1095px");
				com.newgen.omniforms.formviewer.setTop("Tab2","725px");
				break;
			}
			return true;
	
} 

function setControlVisible(controlName, value) {
    com.newgen.omniforms.formviewer.setVisible(controlName, value);
}
function setControlEnabled(controlName, flag) {
    com.newgen.omniforms.formviewer.setEnabled(controlName, flag);
}
function setControlHeight(controlName, value) {
    com.newgen.omniforms.formviewer.setHeight(controlName, value);
}
function setControlTop(controlName, value) {
    com.newgen.omniforms.formviewer.setTop(controlName, value);
}
