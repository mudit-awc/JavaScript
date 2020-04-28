function eventDispatched_ServicePoInvoice(pId,pEvent){
	console.log("inside custom js function");
	switch(pEvent.type)
    {  
        case 'click':
        {
			console.log("inside click event");
			switch(pEvent.srcElement.id)
            {
				case 'Btn_Resolve':
				{
					return true;
				}
				
				case 'Btn_Delete_Invoice':
				if(confirm("Are You Sure You Want to Delete Row ?")){
					return true;
				}else{
					return false;
				}
				break;
				
				case 'Btn_Add_Withholdingtax':
				{
					return true;
				}
				
				case 'Btn_Add_linedetails_1':
				{
					return true;
				}	
				break;	
				
				case 'Btn_fetchpodetails':
				{
					return true;
				}	
				break;
				
				case 'Btn_addtoinvoice':
				{
					return true;
				}	
				break;
				
				case 'Btn_Allocate_Maintaincharges':
				{
					return true;
				}
				break;
				
				case 'Btn_Add_Taxdocument':
				{
					return true;
				}
				break;
				
				case 'Pick_companylocation':
				case 'Pick_hsnsacvalue':
				case 'Pick_vendorlocation':
				case 'Pick_tdsgroup':
				case 'Pick_qocVendor':
				case 'Pick_Otherchrges_line_item_po':
				case 'Clear_qocVendor':
				{
					return true;
				}
				break;				
			}		
		}
		break;
		
		case 'change':
		{
			switch(pEvent.srcElement.id)
            {
				case 'invoicedate':
				{
					return true;
				}
				break;
				
				case 'currency':
				{
					return true;
				}
				break;
				
				case 'invoiceamount':
				case 'exchangerateotherthaninr':
				{
					return true;
				}
				break;
				
				case 'qwht_tdspercent':
				{
				return true;	
				}
				break;
				
				case 'qpo_remainingqty':
				case "qpo_quantity":
                case "qpo_rate":
				{
					return true;
				}
				break;
				
				case "qwht_linenumber":
                case "qoc_linenumber":
				case 'qoc_chargesvalue':
				{
					return true;
				}
				break;
				
				case 'qwht_adjustedoriginamount':
				{
				return true;	
				}
				break;
				
				case 'qoc_category':
				{
					return true;
				}
				break;
				
				case 'qoc_chargesat':
				{
					return true;
				}
				break;	

				case 'postingdate':
				{
					com.newgen.omniforms.formviewer.setNGValue("duedate",document.getElementById('postingdate').value);
					return true;
				}
				break;					
			}	
		}
		break;
	}
	return true;
}
function tab_clicked_ServicePoInvoice(tabName,sheetIndex,activityName){
	let TabName = tabName;
	let SheetIndex = sheetIndex;
	switch(TabName){
		case 'Tab1':
			switch(SheetIndex){				
				case '0':
				if((activityName =='Accounts')|| (activityName=='AXSyncException')){
					setControlHeight("Tab1","398px");
					setControlTop("Tab2","1268px");
					setControlHeight("FRM_ServicePoInvoice","1635px");
				}else if ((activityName =='Approver')||(activityName=='PurchaseUser')){
					setControlHeight("Tab1","295px");
					setControlTop("Tab2","1138px");
					setControlHeight("FRM_ServicePoInvoice","1500px");
				}
				
				else{
					setControlHeight("Tab1","398px");
					setControlTop("Tab2","1268px");
					setControlHeight("FRM_ServicePoInvoice","1640px");
				}
				break;
				
				case '1':	
				if ((activityName =='Approver')||(activityName=='PurchaseUser')){
					setControlHeight("Tab1","261px");
					setControlTop("Tab2","1104px");
					setControlHeight("FRM_ServicePoInvoice","1476px");
				}
				else{
					setControlHeight("Tab1","296px");
					setControlTop("Tab2","1140px");
					setControlHeight("FRM_ServicePoInvoice","1507px");
				}				
				break;
				
				case '2':      
				setControlHeight("Tab1","481px");
				setControlTop("Tab2","1326px");
				setControlHeight("FRM_ServicePoInvoice","1693px");
				break;
				
				case '3':      
				setControlHeight("Tab1","304px");
				setControlTop("Tab2","1149px");
				setControlHeight("FRM_ServicePoInvoice","1515px");
				break;
				
				case '4':		
				setControlHeight("Tab1","100px"); 
				setControlTop("Tab2","955px");
				setControlHeight("FRM_ServicePoInvoice","1320px");
				break;
				
				case '5':		
				setControlHeight("Tab1","416px");
				setControlTop("Tab2","1260px");
				setControlHeight("FRM_ServicePoInvoice","1625px");
				break;
				
				case '6':		
				setControlHeight("Tab1","481px");
				setControlTop("Tab2","1326px");
				setControlHeight("FRM_ServicePoInvoice","1693px");
				break;
				
				case '7':		
				setControlHeight("Tab1","250px");
				setControlTop("Tab2","1120px");
				setControlHeight("FRM_ServicePoInvoice","1480px");
				break;
			}
		break;
		case 'Tab2':
			switch(SheetIndex){				
				case '3':
					return true;
				break;
			}
			break;
	}
	return true;
}
function formPopulated_ServicePoInvoice(activityName){
			switch(activityName)
            {
				case 'Introduction':
				setControlVisible("Frame2", false);
				setControlVisible("Tab1", false);
				setControlVisible("Tab2", false);						
				setControlEnabled("proctype", true);
				setControlEnabled("scanuserremarks", true);				
				break;
				
				case 'Initiator':
				setControlEnabled("holdamount", true);
				setControlHeight("Tab1","398px");
				setControlTop("Tab2","1268px");
				setControlHeight("FRM_ServicePoInvoice","1640px");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , false);	
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2 , false);				
				break;
				
				case 'Approver':
				case 'PurchaseUser':
				setControlVisible("Btn_fetchpodetails", false);
				setControlVisible("Btn_DeletePO", false);
				setControlVisible("Btn_Delete_Invoice", false);
				setControlEnabled("holdamount", true);
				setControlEnabled("Frame2", false);
				setControlHeight("Tab1","295px");
				setControlHeight("FRM_ServicePoInvoice","1500px");
				setControlTop("Tab2","1138px");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , false);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2 , false);				
				break;
				
				case 'Accounts':
				setControlVisible("Btn_fetchpodetails", false);
				setControlVisible("Btn_DeletePO", false);
				setControlEnabled("Frame2", false);
				setControlEnabled("invoicenumber",true);
				setControlEnabled("invoicedate",true);
				setControlEnabled("postingdate", true);
				setControlEnabled("duedate", true);		
				setControlEnabled("holdamount", true); 
				setControlEnabled("narrationremarks", true); 
				setControlEnabled("invoiceamount", false);	
				setControlHeight("Tab1","398px");
				setControlHeight("FRM_ServicePoInvoice","1640px");	
				setControlTop("Tab2","1268px");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2 , false);
				
				break;
				
				case 'AXSyncException':
				setControlVisible("Btn_fetchpodetails", false);
				setControlVisible("Btn_DeletePO", false);
				setControlEnabled("Frame2", false);
				setControlEnabled("invoicenumber",true);
				setControlEnabled("invoicedate",true);
				setControlEnabled("postingdate", true);
				setControlEnabled("duedate", true);		
				setControlEnabled("holdamount", true); 
				setControlEnabled("narrationremarks", true); 
				setControlEnabled("invoiceamount", false);	
				setControlHeight("Tab1","398px");
				setControlHeight("FRM_ServicePoInvoice","1640px");	
				setControlTop("Tab2","1268px");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7 , true);
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8 , true);
				break;
			}
			return true;
}
function validate_PoInvoices(pEvent,activityName){		
	switch(pEvent)
    {        
		case 'D':
		{	
			let invoicenumber = document.getElementById('invoicenumber').value;	
			let invoicedate = document.getElementById('invoicedate').value;	
			let invoiceamount = document.getElementById('invoiceamount').value;
			let state = document.getElementById('state').value;
			let holdamount = document.getElementById('holdamount').value;
			let filestatus = document.getElementById('filestatus').value;
			let exchangerateotherthaninr = document.getElementById('exchangerateotherthaninr').value;
			let remarks = document.getElementById('Text15').value;
			let currency = document.getElementById('currency').value;
			let postingdate = document.getElementById('postingdate').value; 
			
				if(activityName=='Initiator')
				{
					if(invoicenumber=='')
					{
						showError("","Kindly enter the Invoice Number");
						return false;
					}
					
					else if(invoicedate=='')
					{
							showError("","Kindly Enter the Invoice Date");
							return false;
					}
					
					else if(invoiceamount=='')
					{
							showError("","Kindly Enter the Invoice Amount");
							return false;
					}
					else if(state=='')
					{
							showError("","Kindly Enter the State");
							return false;
					}
					
					else if(filestatus=='')
					{
							showError("","Kindly Enter the FileStatus");
							return false;
					} 
				}
				else if(activityName=='Approver'){
					if(filestatus=='')
					{
							showError("","Kindly Enter the FileStatus");
							return false;
					}
					
				}
				else if(activityName=='Accounts'|| activityName=='AXSyncException'){
					if(filestatus=='')
					{
							showError("","Kindly Enter the FileStatus");
							return false;
					}
					
				else if(postingdate==''){
					showError("","Kindly Enter the Posting Date");
					return false;
				}
			
					
					else if(currency=='')
					{
							showError("","Kindly Enter the Currency");
							return false;
					}
					
					else if(currency!='INR')
					{
						if(exchangerateotherthaninr == ''){
							showError("","Kindly Enter the Exchange Rate");
							return false;
						}
							
					}	
					else if(invoicenumber=='')
					{
						showError("","Kindly enter the Invoice Number");
						return false;
					}
					
					else if(invoicedate=='')
					{
							showError("","Kindly Enter the Invoice Date");
							return false;
					}
					
					else if(invoiceamount=='')
					{
							showError("","Kindly Enter the Invoice Amount");
							return false;
					}
				}
				else{
					if(remarks==''){
					showError("","Kindly Enter the Remarks");
					return false;
					}
				}
		}
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