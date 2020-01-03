function eventDispatched_ServicePoInvoices(pId,pEvent){
	
	switch(pEvent.type)
    {  
        case 'click':
        {
			switch(pEvent.srcElement.id)
            {
				case 'Btn_Add_linedetails1':
				//console.log("inside button click og first line details");
						if(com.newgen.omniforms.formviewer.getNGValue("Text11")==""){
					    com.newgen.omniforms.util.showError("","Kindly enter the value of Particular");
						return false;
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("Text13")==""){
					    	com.newgen.omniforms.util.showError("","Kindly enter the value of Period");
						return false;
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("Text15")==""){
					    	com.newgen.omniforms.util.showError("","Kindly enter the Qty/Size");
						return false;
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("Text16")==""){
					    	com.newgen.omniforms.util.showError("","Kindly enter the value of Rate");
						return false;
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("Text17")==""){
					    	com.newgen.omniforms.util.showError("","Kindly enter the value of Amount");
						return false;
					    }
					
					return true;
			
				case 'Btn_Delete_linedetails1':
				return true;
				
				case 'Btn_Modify_linedetails1':
				return true;
				
				case 'Btn_Add_linedetails2':
					  if(com.newgen.omniforms.formviewer.getNGValue("Text18")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the value of Particular");
						return false;
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text20")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the value of Period");
						return false;
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text21")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Package");
						return false;
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text25")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the value of Edition");
						return false;
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text23")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the value of Rate");
						return false;
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text24")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the value of Amount");
						return false;
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text22")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the Qty/Size");
						return false;
					  }
				
				return true;
			
				case 'Btn_Delete_linedetails2':
				return true;
				
				case 'Btn_Modify_linedetails2':
				return true;
				
				case 'Btn_Add_otherdetails':
				return true;
			
				case 'Btn_Delete_otherdetails':
				return true;
				
				case 'Btn_Modify_otherdetails':
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
						case 'Branding Out of home':
						case 'Branding Relationship management':
						case 'Branding Shop':
						case 'Branding Tour Scheme':
						case 'Branding Retailer Meeting':
						case 'Technical Item':
						case 'Technical Printing':
						console.log("");
						com.newgen.omniforms.formviewer.setVisible("Frame2", true);
						com.newgen.omniforms.formviewer.setVisible("Frame4", false);
						com.newgen.omniforms.formviewer.setVisible("Label7", false);
						com.newgen.omniforms.formviewer.setVisible("sachsn", false);
						com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", true);
						com.newgen.omniforms.formviewer.setVisible("Frame8", true);
						com.newgen.omniforms.formviewer.setTop("LINE_DETAILS","440px");
						com.newgen.omniforms.formviewer.setTop("Frame8","820px");
						com.newgen.omniforms.formviewer.setHeight("FRM_ServicePoInvoices","1150px");
						return true;
						
						
						case 'Branding Branding Expenses':
						case 'Branding Mass Advertisement':
						case 'Branding Sponsorship':
						case 'Branding Dealer Meeting':
						com.newgen.omniforms.formviewer.setVisible("Frame2", true);
						com.newgen.omniforms.formviewer.setVisible("Label7", true);
						com.newgen.omniforms.formviewer.setVisible("sachsn", true);
						com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", false);
						com.newgen.omniforms.formviewer.setVisible("Frame4", true);
						com.newgen.omniforms.formviewer.setVisible("Frame8", true);
						com.newgen.omniforms.formviewer.setTop("Frame4","440px");
						com.newgen.omniforms.formviewer.setTop("Frame8","842px");
						com.newgen.omniforms.formviewer.setHeight("FRM_ServicePoInvoices","1150px");
						return true;
						
						default:
						com.newgen.omniforms.formviewer.setVisible("Frame2", false);
						com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", false);
						com.newgen.omniforms.formviewer.setVisible("Frame4", false);
						com.newgen.omniforms.formviewer.setVisible("Frame8", false);
						
						
					}
				}
				break;
				case 'Text7':
				let per= document.getElementById('Text7').value;
				console.log("per value"+per);
				   if (per ==''|| per==null){
					  
					  com.newgen.omniforms.formviewer.setNGValue("Text28",null);
					  com.newgen.omniforms.util.showError("","Enter the Percentage");
					return false;  
					   }
					   
					else{
					return true;	   
					}
				
				break;
			}
		}
		return true;
	}
}
function validate_ServicePoInvoices(pEvent,activityName)
{		
	switch(pEvent)
    {           
		case 'I':
		case 'D':
			if(activityName=='Initiator'){
			let nameofprocess = document.getElementById('proctype').value;
			if(nameofprocess==''||nameofprocess==null){
				com.newgen.omniforms.util.showError("","Kindly enter the Process Name");
						return false;
			}
			}	
			var proctype_value = document.getElementById('proctype').value;
			if(proctype_value == ("Branding Out of home"||"Branding Relationship management"||"Branding Shop"||"Branding Tour Scheme"||"Branding Retailer Meeting"||"Technical Item"||"Technical Printing")){
			if(com.newgen.omniforms.formviewer.getNGValue("Text_pan1")==""){
			com.newgen.omniforms.util.showError("","Kindly enter the PAN Number");
			return false;
			}
			if(com.newgen.omniforms.formviewer.getNGValue("invoicenumber")==""){
			com.newgen.omniforms.util.showError("","Kindly enter the Invoice Number");
			return false;
			}
			if(com.newgen.omniforms.formviewer.getNGValue("invoicedate")==""){
			com.newgen.omniforms.util.showError("","Kindly enter the Invoice Date");
			return false;
			}
			if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamount")==""){
			com.newgen.omniforms.util.showError("","Kindly enter the value of Total Taxable Amount");
			return false;
			}
			if(com.newgen.omniforms.formviewer.getNGValue("totalbillamount")==""){
			com.newgen.omniforms.util.showError("","Kindly enter the value of Total Bill Amount");
			return false;
			}
			}
			//getsetfieldvalues();
			break;
			
		case 'S':
			break;		
	}
//return true;
}

function getsetfieldvalues(){
	
					console.log("inside proctype of service po invoices");
					switch(document.getElementById('proctype').value)
					{
						case 'Branding Out of home':
						case 'Branding Relationship management':
						case 'Branding Shop':
						case 'Branding Tour Scheme':
						case 'Branding Retailer Meeting':
						case 'Technical Item':
						case 'Technical Printing':
							
						if(com.newgen.omniforms.formviewer.getNGValue("pannumber")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the PAN Number");
						return false;
						}
						if(com.newgen.omniforms.formviewer.getNGValue("invoicenumber")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Number");
						return false;
						}
					    if(com.newgen.omniforms.formviewer.getNGValue("invoicedate")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the Invoice Date");
						return false;
					    }
					  
					    if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamount")==""){
					    com.newgen.omniforms.util.showError("","Kindly enter the value of Total Taxable Amount");
						return false;
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("totalbillamount")==""){
					    com.newgen.omniforms.util.showError("","Kindly enter the value of Total Bill Amount");
						return false;
					    }
						break;
						
					  case 'Branding Branding Expenses':
					  case 'Branding Mass Advertisement':
					  case 'Branding Sponsorship':
					  case 'Branding Dealer Meeting':
					  if(com.newgen.omniforms.formviewer.getNGValue("invoicenumber")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the Invoice Number");
						return false;
					  }
						if(com.newgen.omniforms.formviewer.getNGValue("invoicedate")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the Invoice Date");
						return false;
					  }
					   if(com.newgen.omniforms.formviewer.getNGValue("pannumber")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the PAN Number");
						return false;
					  }
					 
					  if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamount")==""){
					  	com.newgen.omniforms.util.showError("","Kindly enter the value of Total Taxable Amount");
						return false;
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("totalbillamount")==""){
						com.newgen.omniforms.util.showError("","Kindly enter the value of Total Bill Amount");
						return false;
					  }
					  
					  break;
					  	
					}              
	}                 
	                  
 
		