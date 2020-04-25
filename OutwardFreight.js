function eventDispatched_OutwardFreight(pId,pEvent)
{
	console.log(pEvent.srcElement.id);    
	switch(pEvent.type)
    {  
        case 'click':
        {
			switch(pEvent.srcElement.id)
            {
				case 'Button2':
				case 'Pick_journalname':
				case 'Pick_account':
				case 'Pick_paymentterm':
				case 'Pick_tdsgroup':
				{	
					console.log("event pick_tdsgroup");
					return true;	
				}
				break;
				case 'qoftd_hsnsactype':
				{
					return true;
				}
				case 'Pick_hsnsac':
				{	console.log("event pick_hsnsac");
					return true;
				}
				break;
				case 'CheckBox1':	
				{	console.log("event CheckBox1 mouse");
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
				case 'CheckBox1': 
				{	console.log("event CheckBox1 value");
					return true;
				}				
				break;		
			
			}
			
		}
		break;
	}
	return true;		
}

function tab_clicked_OutwardFreight(tabName,sheetIndex,activityName){
	let TabName = tabName;
	let SheetIndex = sheetIndex;
	switch(TabName){
		case 'Tab1':
		console.log("inside tab1");
			switch(SheetIndex){				
				case '0':
				setControlHeight("Tab1","480px");
				setControlHeight("Frame2","720px");
				setControlTop("Tab2","920px");
				setControlHeight("OutwardFreight","1165px");
				break;
				
				case '1':		//CTI
				setControlHeight("Tab1","200px");
				setControlHeight("Frame2","600px");				
				setControlTop("Tab2","800px");
				setControlHeight("OutwardFreight","1050px");
				break;
				
				case '2':       //VTI
				setControlHeight("Tab1","200px");				
				setControlHeight("Frame2","600px");				
				setControlTop("Tab2","800px");
				setControlHeight("OutwardFreight","1050px");
				break;
				
				case '3':		//TD
				setControlHeight("Tab1","600px");				
				setControlHeight("Frame2","870px");				
				setControlTop("Tab2","1100px");
				setControlHeight("OutwardFreight","1365px");
				break;
				
				case '4':       //WTD
				setControlHeight("Tab1","600px");				
				setControlHeight("Frame2","800px");				
				setControlTop("Tab2","1000px");
				setControlHeight("OutwardFreight","1265px");
				break;
				
			}
		break;
	}
	return true;
}

function formPopulated_OutwardFreight(activityName){
	switch(activityName)
            {
				case 'Introduction':
				setControlEnabled("scanuserremarks", true);
				setControlVisible("Frame2", false);
				setControlVisible("Tab1", false);				
				setControlVisible("Tab2", false);
				setControlHeight("OutwardFreight","1165px");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , false);
				break;
				
				case 'Initiator':
				setControlVisible("Frame2", true);
				setControlVisible("Tab1", true);				
				setControlVisible("Tab2", true);
				setControlHeight("Tab1","480px");
				setControlHeight("Frame2","720px");
				setControlTop("Tab2","900px");
				setControlHeight("OutwardFreight","1165px");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , false);
				com.newgen.omniforms.formviewer.setNGValue("exempt","");

				break;
				
				case 'Approver':
				setControlVisible("Pick_journalname",false);
				setControlVisible("Pick_account",false);
				setControlVisible("Pick_paymentterm",false);
				setControlVisible("Frame2", true);
				setControlEnabled("Frame2",false);
				setControlVisible("Tab1", true);
				setControlEnabled("Tab1",false);				
				setControlVisible("Tab2", true);
				setControlHeight("Tab1","480px");
				setControlHeight("Frame2","720px");
				setControlTop("Tab2","900px");
				setControlHeight("OutwardFreight","1165px");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , false);
				com.newgen.omniforms.formviewer.setNGValue("exempt","");
				break;
				
				case 'Accounts':
				setControlVisible("Pick_account",false);
				setControlVisible("Pick_paymentterm",false);
				setControlVisible("Frame2", true);
				setControlEnabled("Frame2",false);
				setControlEnabled("invoicenumber",true);
				setControlEnabled("invoicedate",true);
				setControlEnabled("amounttype",true);
				setControlEnabled("baseamount",true);
				setControlEnabled("currency",true);
				setControlEnabled("qoftd_hsnsactype",true);
				setControlHeight("Tab1","480px");
				setControlHeight("Frame2","720px");
				setControlTop("Tab2","900px");
				setControlHeight("OutwardFreight","1165px");
				com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1 , false);
				com.newgen.omniforms.formviewer.setNGValue("exempt","");
				break;
			}
	return true;
}

function validate_OutwardFreight(pEvent,activityName)
{		
	switch(pEvent)
    {           
        case 'I':
		{
			return true;
		}
		break;
		case 'D':
		{
			let account = document.getElementById('account').value;	
			let invoicenumber = document.getElementById('invoicenumber').value;	
			let invoicedate = document.getElementById('invoicedate').value;	
			let amounttype = document.getElementById('amounttype').value;	
			let baseamount = document.getElementById('baseamount').value;	
			let state = document.getElementById('state').value;	
			let filestatus = document.getElementById('filestatus').value;
			let remarks = document.getElementById('exempt').value;
			let currency = document.getElementById('currency').value;
			let exchangerateotherthaninr = document.getElementById('exchangerateotherthaninr').value;
			
				if(activityName=='Initiator')
				{										
					if(account=='')
					{
							com.newgen.omniforms.util.showError("","Kindly Enter the Account");
							return false;
					}
					
					if(invoicenumber=='')
					{
							com.newgen.omniforms.util.showError("","Kindly Enter the Invoice Number");
							return false;
					}
					
					if(invoicedate=='')
					{
							com.newgen.omniforms.util.showError("","Kindly Enter the Invoice Date");
							return false;
					}
					
					if(baseamount=='')
					{
							com.newgen.omniforms.util.showError("","Kindly Enter the Base Amount");
							return false;
					}
					
					if(state=='')
					{
							com.newgen.omniforms.util.showError("","Kindly Enter the State");
							return false;
					}
								
					if(currency=='')
					{
							com.newgen.omniforms.util.showError("","Kindly Enter the Currency");
							return false;
					}
					
					if(currency != 'INR'&& exchangerateotherthaninr == '')
					{
							com.newgen.omniforms.util.showError("","Kindly Enter the Exchange Rate");
							return false;
					}					
				}
				if(activityName=='Initiator'||activityName=='Approver'||activityName=='Accounts')
				{
					if(filestatus=='')
					{
						com.newgen.omniforms.util.showError("","Kindly Select File Status");
						return false;
					}
				
					if(remarks=='')
					{
						com.newgen.omniforms.util.showError("","Kindly Enter Remarks");
						return false;
					}
				}							
			return true;					
		}
		break;
		  
		case 'S':
		{
			return true;
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
function showError(controlName, message) {
    com.newgen.omniforms.util.showError("",message);
}