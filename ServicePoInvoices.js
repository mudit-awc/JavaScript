function eventDispatched_ServicePoInvoices(pId,pEvent){
	
	switch(pEvent.type)
    {  
        case 'click':
        {
			switch(pEvent.srcElement.id)
            {
				case 'Btn_Add_linedetails1':
				console.log("Add line details 1");
				return true;
			
				case 'Btn_Delete_linedetails1':
				return true;
				
				case 'Btn_Modify_linedetails1':
				return true;
				
				case 'Btn_Add_linedetails2':
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
				case 'Text7':
				return true;
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
			console.log("Introduce/Done");
			console.log("testing");
		
				if(activityName=='Initiator'){
					console.log("Initiator");
		
			let nameofprocess = document.getElementById('proctype').value;
			if(nameofprocess==''||nameofprocess==null){
				alert("Kindly select any Name of Process");
				return false;
			}
				}
				
			getsetfieldvalues();
			console.log("new function is called");
			return true;
			break;
		  
		case 'S':
		saveFormData(); 
		console.log("Save");
		getsetfieldvalues()
		console.log("again new function is called");
		return true;
		break;
		
	}
return true;
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
						console.log("inside first case");
						if(com.newgen.omniforms.formviewer.getNGValue("pannumber")==""){
						alert("Enter the Value of PAN Number");
						}
						if(com.newgen.omniforms.formviewer.getNGValue("invoicenumber")==""){
						alert("Enter the Value of Invoice Number ");
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("invoicedate")==""){
					    	alert("Enter the Value of Invoice Date");
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("Text11")==""){
					    	alert("Enter the Value of Particular ");
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("Text13")==""){
					    	alert("Enter the Value of Period");
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("Text15")==""){
					    	alert("Enter the Value of Qty/Size");
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("Text16")==""){
					    	alert("Enter the Value of Rate");
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("Text17")==""){
					    	alert("Enter the Value of Amount");
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamount")==""){
					    	alert("Enter the Value of Total Taxable Amount ");
					    }
					    if(com.newgen.omniforms.formviewer.getNGValue("totalbillamount")==""){
					    	alert("Enter the Value of Total Bill Amount");
					    }
						break;
						
					  case 'Branding Branding Expenses':
					  case 'Branding Mass Advertisement':
					  case 'Branding Sponsorship':
					  case 'Branding Dealer Meeting':
					  if(com.newgen.omniforms.formviewer.getNGValue("invoicenumber")==""){
					  	alert("Enter the Value of Invoice Number ");
					  }
						if(com.newgen.omniforms.formviewer.getNGValue("invoicedate")==""){
					  	alert("Enter the Value of Invoice Date");
					  }
					   if(com.newgen.omniforms.formviewer.getNGValue("pannumber")==""){
					  	alert("Enter the Value of PAN Number ");
					  }
					 if(com.newgen.omniforms.formviewer.getNGValue("Text18")==""){
					  	alert("Enter the Value of Particular");
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text20")==""){
					  	alert("Enter the Value of Period ");
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text21")==""){
					  	alert("Enter the Value of Package");
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text25")==""){
					  	alert("Enter the Value of Edition");
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text23")==""){
					  	alert("Enter the Value of Rate ");
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text24")==""){
					  	alert("Enter the Value of Amount");
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("Text22")==""){
					  	alert("Enter the Value of Qty/Size ");
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamount")==""){
					  	alert("Enter the Value of Total Taxable Amount ");
					  }
					  if(com.newgen.omniforms.formviewer.getNGValue("totalbillamount")==""){
					  	alert("Enter the Value of Total Bill Amount");
					  }
					  
					  break;
					  	
					  }
				      
				      
		              
	}                 
	                  
 
		