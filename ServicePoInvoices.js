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
						com.newgen.omniforms.formviewer.setTop("Frame8","842px");
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
						return true;
						
						default:
						com.newgen.omniforms.formviewer.setVisible("Frame2", false);
						com.newgen.omniforms.formviewer.setVisible("LINE_DETAILS", false);
						com.newgen.omniforms.formviewer.setVisible("Frame4", false);
						com.newgen.omniforms.formviewer.setVisible("Frame8", false);
						
						
					}
				}
			}
		}
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
		//	let initiatorstatus = document.getElementById('initiatorstatus').value;
				if(activityName=='Initiator'){
					console.log("Initiator");
	//		if(initiatorstatus==''){
		//		com.newgen.omniforms.util.showError("","Kindly enter the decision");
	//			return false;
		//	}	
			let nameofprocess = document.getElementById('proctype').value;
			if(nameofprocess==''||nameofprocess==null){
				alert("Kindly select any Name of Process");
				return false;
			}
				}
				
			
			
				
			
			return true;
		  
		case 'S':
		saveFormData(); 
		console.log("Save");
			return true;		
	}
return true;
}
		