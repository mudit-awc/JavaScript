function eventDispatched_NonPoInvoices1(pId,pEvent){
	console.log(pEvent.type);
	console.log(pEvent.srcElement.id);
    
	switch(pEvent.type)
    {  
        case 'click':
        {
			switch(pEvent.srcElement.id)
            {
				case 'Btn_Add_linedetails_1':
				return true;
			
				case 'Btn_Delete_linedetails_1':
				return true;
				
				case 'Btn_Modify_linedetails_1':
				return true;
				
				case 'Btn_Add_linedetails_2':
				return true;
			
				case 'Btn_Delete_linedetails_2':
				return true;
				
				case 'Btn_Modify_linedetails_2':
				return true;
				
				case 'Btn_Add_linedetails_3':
				return true;
			
				case 'Btn_Delete_linedetails_3':
				return true;
				
				case 'Btn_Modify_linedetails_3':
				return true;
				
				case 'Btn_Add_linedetails_4':
				return true;
			
				case 'Btn_Delete_linedetails_4':
				return true;
				
				case 'Btn_Modify_linedetails_4':
				return true;
				
				case 'Btn_Add_otherdetails_npo':
				return true;
			
				case 'Btn_Delete_otherdetails_npo':
				return true;
				
				case 'Btn_Modify_otherdetails_npo':
				return true;
				
			}		
	}
		case 'change':
		{
			switch(pEvent.srcElement.id)
            {
				case 'proctype':
				{
					switch(document.getElementById('proctype').value)
					{
					case 'Handling/Unloading':
					case 'BP Commissions & Third Party Commissions':
					case 'Demurrage and Wharfage (Logistics)':
					case 'Secondary Freight (Road)':
					case 'Rent Godown and Rent Office':
					case 'Technical Services: Service & Technical Activity':
					case 'Services: Miscellaneous Charges':
					case 'Government Bills':
					case 'Travelling':
					case 'Bonus/Exgratia':
					case 'Donations':
					case 'Freight':
					case 'Repair and Supply: Minor Supply Items  - Part1':
					console.log("");
					com.newgen.omniforms.formviewer.setVisible("Frame2", true);
					com.newgen.omniforms.formviewer.setVisible("Frame4", false);
					com.newgen.omniforms.formviewer.setVisible("Frame5", false);
					com.newgen.omniforms.formviewer.setVisible("Frame6", false);
					com.newgen.omniforms.formviewer.setVisible("Frame7", false);
					com.newgen.omniforms.formviewer.setVisible("Frame9", false);
					com.newgen.omniforms.formviewer.setVisible("Frame10", false);
					com.newgen.omniforms.formviewer.setVisible("Frame11", false);
					com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", true);
					com.newgen.omniforms.formviewer.setVisible("Frame8", true);
					com.newgen.omniforms.formviewer.setTop("Frame8","860px");
					com.newgen.omniforms.formviewer.setTop("LINE_DETAILS","448px");
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1185px");
					return true;
					
					
					case 'Demurrage and Wharfage (Plant/GU) (Rail)':
					case 'Other Logistic Expenses (Rail)':
					case 'Primary Freight and Freight on clinker Sale (Rail)':
					console.log("");
					com.newgen.omniforms.formviewer.setVisible("Frame4", true);
					com.newgen.omniforms.formviewer.setVisible("Frame2", false);
					com.newgen.omniforms.formviewer.setVisible("Frame5", false);
					com.newgen.omniforms.formviewer.setVisible("Frame6", false);
					com.newgen.omniforms.formviewer.setVisible("Frame7", false);
					com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", false);
					com.newgen.omniforms.formviewer.setVisible("Frame9", false);
					com.newgen.omniforms.formviewer.setVisible("Frame10", false);
					com.newgen.omniforms.formviewer.setVisible("Frame11", false);
					com.newgen.omniforms.formviewer.setVisible("Frame8", true);
					com.newgen.omniforms.formviewer.setTop("Frame8","345px");
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","670px");
					return true;
					
					
					case 'Demurrage and Wharfage (Plant/GU) (Road)':
					case 'Other Logistic Expenses (Road)':
					case 'Primary Freight and Freight on clinker Sale (Road)':
					console.log("");
					com.newgen.omniforms.formviewer.setVisible("Frame2", true);
					com.newgen.omniforms.formviewer.setVisible("Frame4", false);
					com.newgen.omniforms.formviewer.setVisible("Frame5", false);
					com.newgen.omniforms.formviewer.setVisible("Frame6", false);
					com.newgen.omniforms.formviewer.setVisible("Frame7", false);
					com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", true);
					com.newgen.omniforms.formviewer.setVisible("Frame9", false);
					com.newgen.omniforms.formviewer.setVisible("Frame10", false);
					com.newgen.omniforms.formviewer.setVisible("Frame11", false);
					com.newgen.omniforms.formviewer.setVisible("Frame8", true);
					com.newgen.omniforms.formviewer.setTop("Frame8","860px");
					com.newgen.omniforms.formviewer.setTop("LINE_DETAILS","448px");
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1185px");
					return true;
					
					
					case 'Travel Allowance Bills (TA Bills) (Hotel)':
					console.log("");
					com.newgen.omniforms.formviewer.setVisible("Frame6", true);
					com.newgen.omniforms.formviewer.setVisible("Frame2", false);
					com.newgen.omniforms.formviewer.setVisible("Frame5", false);
					com.newgen.omniforms.formviewer.setVisible("Frame4", false);
					com.newgen.omniforms.formviewer.setVisible("Frame7", false);
					com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", false);
					com.newgen.omniforms.formviewer.setVisible("Frame9", false);
					com.newgen.omniforms.formviewer.setVisible("Frame11", false);
					com.newgen.omniforms.formviewer.setVisible("Frame10", true);
					com.newgen.omniforms.formviewer.setVisible("Frame8", true);
					com.newgen.omniforms.formviewer.setTop("Frame8","842px");
					com.newgen.omniforms.formviewer.setTop("Frame10","446px");
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1175px");
					return true;
			
			
					case 'Travel Allowance Bills (TA Bills) (Train)':
					console.log("");
					com.newgen.omniforms.formviewer.setVisible("Frame5", true);
					com.newgen.omniforms.formviewer.setVisible("Frame2", false);
					com.newgen.omniforms.formviewer.setVisible("Frame4", false);
					com.newgen.omniforms.formviewer.setVisible("Frame6", false);
					com.newgen.omniforms.formviewer.setVisible("Frame7", false);
					com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", false);
					com.newgen.omniforms.formviewer.setVisible("Frame9", true);
					com.newgen.omniforms.formviewer.setVisible("Frame10", false);
					com.newgen.omniforms.formviewer.setVisible("Frame11", false);
					com.newgen.omniforms.formviewer.setVisible("Frame8", true);
					com.newgen.omniforms.formviewer.setTop("Frame8","739px");
					com.newgen.omniforms.formviewer.setTop("Frame9","340px");
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1070px");
					return true;
					
					
					case 'Travel Desk and Company Expenses Reimbursement':
					console.log("");
					com.newgen.omniforms.formviewer.setVisible("Frame2", false);
					com.newgen.omniforms.formviewer.setVisible("Frame4", false);
					com.newgen.omniforms.formviewer.setVisible("Frame5", false);
					com.newgen.omniforms.formviewer.setVisible("Frame6", false);
					com.newgen.omniforms.formviewer.setVisible("Frame7", true);
					com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", false);
					com.newgen.omniforms.formviewer.setVisible("Frame9", false);
					com.newgen.omniforms.formviewer.setVisible("Frame10", false);
					com.newgen.omniforms.formviewer.setVisible("Frame11", true);
					com.newgen.omniforms.formviewer.setVisible("Frame8", true);
					com.newgen.omniforms.formviewer.setTop("Frame8","690px");
					com.newgen.omniforms.formviewer.setTop("Frame11","444px");
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1015px");
					return true;
			
					default:
					com.newgen.omniforms.formviewer.setVisible("Frame2", false);
					com.newgen.omniforms.formviewer.setVisible("Frame4", false);
					com.newgen.omniforms.formviewer.setVisible("Frame5", false);
					com.newgen.omniforms.formviewer.setVisible("Frame6", false);
					com.newgen.omniforms.formviewer.setVisible("Label61", false);
					com.newgen.omniforms.formviewer.setVisible("proctype", true);
					com.newgen.omniforms.formviewer.setVisible("Frame7", false);
					com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", false);
					com.newgen.omniforms.formviewer.setVisible("ListView2", false);
					com.newgen.omniforms.formviewer.setVisible("ListView3", false);
					com.newgen.omniforms.formviewer.setVisible("Listview1", false);
					com.newgen.omniforms.formviewer.setVisible("ListView4", false);
					com.newgen.omniforms.formviewer.setVisible("Frame8", false);
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","190px");
					return true;
			
			
				}
				}
			}
		}
	
				
	}
}
	function validate_NonPoInvoices1(pEvent,activityName)
{
	console.log("Inside validate Non PO Invoices");
	switch(pEvent)
    {           
        case 'I':
		case 'D':
		console.log("inside introduce/done");
			let nameofprocess = document.getElementById('proctype').value;
			if(nameofprocess==''||nameofprocess==null){
				alert("Kindly select the Process");
				return false;
			}
	
	
	getsetFieldValue();
			return true;
		  
		case 'S':
		console.log("inside save");
		//saveFormData(); 
		console.log("Save");
		getsetFieldValue();
			return true;
	}
}


function getsetFieldValue()
{
					console.log("inside proctype");
					switch(document.getElementById('proctype').value)
					{
					case 'Handling/Unloading':
					case 'BP Commissions & Third Party Commissions':
					case 'Demurrage and Wharfage (Logistics)':
					case 'Secondary Freight (Road)':
					case 'Rent Godown and Rent Office':
					case 'Technical Services: Service & Technical Activity':
					case 'Services: Miscellaneous Charges':
					case 'Government Bills':
					case 'Travelling':
					case 'Bonus/Exgratia':
					case 'Donations':
					case 'Freight':
					case 'Repair and Supply: Minor Supply Items  - Part1':
					console.log("inside process type 1");
					com.newgen.omniforms.formviewer.setNGValue("invoicenumber",com.newgen.omniforms.formviewer.getNGValue("Text_inv1"));
					com.newgen.omniforms.formviewer.setNGValue("invoicedate",com.newgen.omniforms.formviewer.getNGValue("Date_inv1"));
					com.newgen.omniforms.formviewer.setNGValue("mobilenumber",com.newgen.omniforms.formviewer.getNGValue("Text_mob1"));
					com.newgen.omniforms.formviewer.setNGValue("cin",com.newgen.omniforms.formviewer.getNGValue("Text_cin1"));
					com.newgen.omniforms.formviewer.setNGValue("pannumber",com.newgen.omniforms.formviewer.getNGValue("Text_pan1"));
					com.newgen.omniforms.formviewer.setNGValue("emailid",com.newgen.omniforms.formviewer.getNGValue("Text_email1"));
					com.newgen.omniforms.formviewer.setNGValue("vendorgstin",com.newgen.omniforms.formviewer.getNGValue("Text_vgstin1"));
					com.newgen.omniforms.formviewer.setNGValue("wclgstin",com.newgen.omniforms.formviewer.getNGValue("Text_wgstin1"));
					com.newgen.omniforms.formviewer.setNGValue("natureofservice",com.newgen.omniforms.formviewer.getNGValue("Text_snature1"));
					com.newgen.omniforms.formviewer.setNGValue("servicegiveninstate",com.newgen.omniforms.formviewer.getNGValue("Drop_ss1"));
					com.newgen.omniforms.formviewer.setNGValue("placeofsupply",com.newgen.omniforms.formviewer.getNGValue("Text_splace1"));
					
					
					console.log("value in hidden field is"+invoicenumber);
					break;
					
					case 'Demurrage and Wharfage (Plant/GU) (Rail)':
					case 'Other Logistic Expenses (Rail)':
					case 'Primary Freight and Freight on clinker Sale (Rail)':
					console.log("inside process type 2");
					com.newgen.omniforms.formviewer.setNGValue("invoicenumber",com.newgen.omniforms.formviewer.getNGValue("Text_inv2"));
					com.newgen.omniforms.formviewer.setNGValue("invoicedate",com.newgen.omniforms.formviewer.getNGValue("Date_inv2"));
					com.newgen.omniforms.formviewer.setNGValue("vendorgstin",com.newgen.omniforms.formviewer.getNGValue("Text_vgstin2"));
					com.newgen.omniforms.formviewer.setNGValue("wclgstin",com.newgen.omniforms.formviewer.getNGValue("Text_wgstin2"));
					break;
					
					case 'Demurrage and Wharfage (Plant/GU) (Road)':
					case 'Other Logistic Expenses (Road)':
					case 'Primary Freight and Freight on clinker Sale (Road)':
					console.log("inside process type 3");
					com.newgen.omniforms.formviewer.setNGValue("invoicenumber",com.newgen.omniforms.formviewer.getNGValue("Text_inv1"));
					com.newgen.omniforms.formviewer.setNGValue("invoicedate",com.newgen.omniforms.formviewer.getNGValue("Date_inv1"));
					com.newgen.omniforms.formviewer.setNGValue("mobilenumber",com.newgen.omniforms.formviewer.getNGValue("Text_mob1"));
					com.newgen.omniforms.formviewer.setNGValue("cin",com.newgen.omniforms.formviewer.getNGValue("Text_cin1"));
					com.newgen.omniforms.formviewer.setNGValue("pannumber",com.newgen.omniforms.formviewer.getNGValue("Text_pan1"));
					com.newgen.omniforms.formviewer.setNGValue("emailid",com.newgen.omniforms.formviewer.getNGValue("Text_email1"));
					com.newgen.omniforms.formviewer.setNGValue("vendorgstin",com.newgen.omniforms.formviewer.getNGValue("Text_vgstin1"));
					com.newgen.omniforms.formviewer.setNGValue("wclgstin",com.newgen.omniforms.formviewer.getNGValue("Text_wgstin1"));
					com.newgen.omniforms.formviewer.setNGValue("natureofservice",com.newgen.omniforms.formviewer.getNGValue("Text_snature1"));
					com.newgen.omniforms.formviewer.setNGValue("servicegiveninstate",com.newgen.omniforms.formviewer.getNGValue("Drop_ss1"));
					com.newgen.omniforms.formviewer.setNGValue("placeofsupply",com.newgen.omniforms.formviewer.getNGValue("Text_splace1"));
					
					break;
					case 'Travel Allowance Bills (TA Bills) (Hotel)':
					console.log("inside process type 4");
					com.newgen.omniforms.formviewer.setNGValue("invoicenumber",com.newgen.omniforms.formviewer.getNGValue("Text_inv3"));
					com.newgen.omniforms.formviewer.setNGValue("invoicedate",com.newgen.omniforms.formviewer.getNGValue("Date_inv3"));
					com.newgen.omniforms.formviewer.setNGValue("mobilenumber",com.newgen.omniforms.formviewer.getNGValue("Text_mob2"));
					com.newgen.omniforms.formviewer.setNGValue("cin",com.newgen.omniforms.formviewer.getNGValue("Text_cin2"));
					com.newgen.omniforms.formviewer.setNGValue("pannumber",com.newgen.omniforms.formviewer.getNGValue("Text_pan2"));
					com.newgen.omniforms.formviewer.setNGValue("emailid",com.newgen.omniforms.formviewer.getNGValue("Text_email2"));
					com.newgen.omniforms.formviewer.setNGValue("vendorgstin",com.newgen.omniforms.formviewer.getNGValue("Text_vgstin3"));
					com.newgen.omniforms.formviewer.setNGValue("wclgstin",com.newgen.omniforms.formviewer.getNGValue("Text_wgstin3"));
					com.newgen.omniforms.formviewer.setNGValue("servicegiveninstate",com.newgen.omniforms.formviewer.getNGValue("Drop_ss2"));
					com.newgen.omniforms.formviewer.setNGValue("placeofsupply",com.newgen.omniforms.formviewer.getNGValue("Text_splace2"));
					break;
					
					case 'Travel Desk and Company Expenses Reimbursement':
					console.log("inside process type 6");
					com.newgen.omniforms.formviewer.setNGValue("invoicenumber",com.newgen.omniforms.formviewer.getNGValue("Text_inv4"));
					com.newgen.omniforms.formviewer.setNGValue("invoicedate",com.newgen.omniforms.formviewer.getNGValue("Date_inv4"));
					com.newgen.omniforms.formviewer.setNGValue("mobilenumber",com.newgen.omniforms.formviewer.getNGValue("Text_mob3"));
					com.newgen.omniforms.formviewer.setNGValue("cin",com.newgen.omniforms.formviewer.getNGValue("Text_cin3"));
					com.newgen.omniforms.formviewer.setNGValue("pannumber",com.newgen.omniforms.formviewer.getNGValue("Text_pan3"));
					com.newgen.omniforms.formviewer.setNGValue("emailid",com.newgen.omniforms.formviewer.getNGValue("Text_email3"));
					com.newgen.omniforms.formviewer.setNGValue("vendorgstin",com.newgen.omniforms.formviewer.getNGValue("Text_vgstin4"));
					com.newgen.omniforms.formviewer.setNGValue("wclgstin",com.newgen.omniforms.formviewer.getNGValue("Text_wgstin4"));
					com.newgen.omniforms.formviewer.setNGValue("natureofservice",com.newgen.omniforms.formviewer.getNGValue("Text_snature2"));
					com.newgen.omniforms.formviewer.setNGValue("servicegiveninstate",com.newgen.omniforms.formviewer.getNGValue("Drop_ss3"));
					com.newgen.omniforms.formviewer.setNGValue("placeofsupply",com.newgen.omniforms.formviewer.getNGValue("Text_splace3"));
					
					break;
					}
}
