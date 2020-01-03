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
					if(com.newgen.omniforms.formviewer.getNGValue("Text36")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Qty/Size");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text38")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Rate");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text50")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Amount");
						return false;
					}
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
					if(com.newgen.omniforms.formviewer.getNGValue("Text57")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of Particular");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text60")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of Qty/Size");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text61")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of Rate");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text62")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of Amount");
						return false;
						
					}
				return true;
			
				case 'Btn_Delete_linedetails_3':
				return true;
				
				case 'Btn_Modify_linedetails_3':
				return true;
				
				case 'Btn_Add_linedetails_4':
					if(com.newgen.omniforms.formviewer.getNGValue("Text63")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of Particular");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text65")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of Period");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text20")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of Amount");
						return false;
						
					}
				return true;
			
				case 'Btn_Delete_linedetails_4':
				return true;
				
				case 'Btn_Modify_linedetails_4':
				return true;
				
				case 'Btn_Add_otherdetails_npo':
				if(com.newgen.omniforms.formviewer.getNGValue("Combo3")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Type");
						return false;
						
					}
				return true;
			
				case 'Btn_Delete_otherdetails_npo':
				return true;
				
				case 'Btn_Modify_otherdetails_npo':
				return true;
				
			}		
	}
		case 'change':
		{
			console.log("inside change event");
			switch(pEvent.srcElement.id)
            {
				case 'proctype':
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
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1250px");
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
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","720px");
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
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1230px");
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
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1220px");
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
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1130px");
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
					com.newgen.omniforms.formviewer.setTop("Frame8","730px");
					com.newgen.omniforms.formviewer.setTop("Frame11","444px");
					com.newgen.omniforms.formviewer.setHeight("FRM_NonPoInvoices","1110px");
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
				break;
				
				case 'Text67':
				{
				let per= document.getElementById('Text67').value;
				console.log("per value"+per);
				   if (per ==''|| per==null){
					  console.log("when percentage is null");
					  com.newgen.omniforms.formviewer.setNGValue("Text69",null);
					  com.newgen.omniforms.util.showError("","Enter the Percentage");
					return false;  
					   }
					   
					   else{
						  console.log("inside percentage value");
							return true;	   
				   }
				}
				break;
				
				
				
			}
		}
	
		return true;		
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
				com.newgen.omniforms.util.showError("","Kindly Select the Process");
				return false;
			}
			var proctype_value = document.getElementById('proctype').value;
			if(proctype_value==("Handling/Unloading"||"BP Commissions & Third Party Commissions"||"Demurrage and Wharfage (Logistics)"||"Secondary Freight (Road)"||"Rent Godown and Rent Office"||"Technical Services: Service & Technical Activity"||"Services: Miscellaneous Charges"||"Government Bills"||"Travelling"||"Bonus/Exgratia"||"Donations"||"Freight"||"Repair and Supply: Minor Supply Items  - Part1")){
					if(com.newgen.omniforms.formviewer.getNGValue("Text_pan1")==""){
					com.newgen.omniforms.util.showError("","Kindly enter the PAN Number");
					return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text_inv1")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Number");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Date_inv1")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Date");
						return false;
					}
					
					if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamt")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Total Taxable Amount");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("totalbillamt")==""){
						 com.newgen.omniforms.util.showError("","Kindly enter the value of Total Bill Amount");
						return false;
					}
			}
			var proctype_value = document.getElementById('proctype').value;
			 if(proctype_value==("Demurrage and Wharfage (Plant/GU) (Rail)"||"Other Logistic Expenses (Rail)"||"Primary Freight and Freight on clinker Sale (Rail)")){
					if(com.newgen.omniforms.formviewer.getNGValue("Text_inv2")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Number");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Date_inv2")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Date");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text_vgstin2")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Vendor GSTIN");
						return false;
						alert("Enter the Value of Vendor GSTIN");
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text_wgstin2")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of WCL GSTIN");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamt")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Total Taxable Amount");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("totalbillamt")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Total Bill Amount");
						return false;
					}
			}
			var proctype_value = document.getElementById('proctype').value;
			 if(proctype_value==("Demurrage and Wharfage (Plant/GU) (Road)"||"Other Logistic Expenses (Road)"||"Primary Freight and Freight on clinker Sale (Road)")){
					if(com.newgen.omniforms.formviewer.getNGValue("Text_pan1")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the PAN Number");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text_inv1")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Number");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Date_inv1")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Date");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamt")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Total Taxable Amount");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("totalbillamt")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Total Bill Amount");
						return false;
					}
			}
			var proctype_value = document.getElementById('proctype').value;
			if(proctype_value==("Travel Allowance Bills (TA Bills) (Hotel)")){
					if(com.newgen.omniforms.formviewer.getNGValue("Text_inv3")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Number");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Date_inv3")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Date");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text_pan2")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the PAN Number");
						return false;
					}
					
					if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamt")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Total Taxable Amount");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("totalbillamt")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Total Bill Amount");
						return false;
					}
			}
			else{
					if(com.newgen.omniforms.formviewer.getNGValue("Text_inv4")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Number");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Date_inv4")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Date");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text_pan3")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the PAN Number");
						return false;
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Drop_ss3")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the State");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text_wgstin4")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of WCL GSTIN");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text_vgstin4")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of Vendor GSTIN");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("Text_splace3")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of Place of Supply");
						return false;
						
					}
					if(com.newgen.omniforms.formviewer.getNGValue("sachsn")==""){
						com.newgen.omniforms.util.showError("","Kindly Enter the Value of SAC/HSN");
						return false;
						
					}
			}
			//getsetFieldValue();
			break;
		
		case 'S':
			break;
	}
	return true;	
}


function getsetFieldValue()
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
				//console.log("inside process type 1");
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
				
				case 'Demurrage and Wharfage (Plant/GU) (Rail)':
				case 'Other Logistic Expenses (Rail)':
				case 'Primary Freight and Freight on clinker Sale (Rail)':
				//console.log("inside process type 2");
				com.newgen.omniforms.formviewer.setNGValue("invoicenumber",com.newgen.omniforms.formviewer.getNGValue("Text_inv2"));
				com.newgen.omniforms.formviewer.setNGValue("invoicedate",com.newgen.omniforms.formviewer.getNGValue("Date_inv2"));
				com.newgen.omniforms.formviewer.setNGValue("vendorgstin",com.newgen.omniforms.formviewer.getNGValue("Text_vgstin2"));
				com.newgen.omniforms.formviewer.setNGValue("wclgstin",com.newgen.omniforms.formviewer.getNGValue("Text_wgstin2"));
				break;
				
				case 'Demurrage and Wharfage (Plant/GU) (Road)':
				case 'Other Logistic Expenses (Road)':
				case 'Primary Freight and Freight on clinker Sale (Road)':
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
