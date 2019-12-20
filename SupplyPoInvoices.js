function eventDispatched_SupplyPoInvoices(pId,pEvent)
{
	console.log(pEvent.type);
	console.log(pEvent.srcElement.id);

	switch(pEvent.type)
    {           
        case 'click':
            switch(pEvent.srcElement.id)
            {
				case 'Btn_SplitLine':
				return true;
			
				case 'Btn_updateregistration':
				return true;
				
				case 'Btn_GenerateGRN':
				return true;
				
				case 'Btn_CancelGRN':
				return true;
				
				case 'Btn_updateQuaratinedetails':
				return true;
				
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
				case 'purchaseorderno':
				return true;
				
				case 'invoiceno':							
				return true;
				
				case 'Quality_itemselect':							
				return true;
				
				case 'Q_acceptedquantity':							
				return true;
				
				case 'Q_rejectedquantity':							
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
			}
		break;
	}
}

function validate_SupplyPoInvoices(pEvent,activityName)
{		
	switch(pEvent)
    {           
        case 'I':
		case 'D':
			console.log("Introduce/Done");
			let initiatorstatus = document.getElementById('initiatorstatus').value;
				if(activityName=='Initiator'){
					console.log("Initiator");
			if(initiatorstatus==''){
				com.newgen.omniforms.util.showError("","Kindly enter the decision");
				return false;
			}	
				}
				
			
			if(activityName=='StoreUser'){
				let grnnumber = document.getElementById('grnnumber').value;
						if(grnnumber==''){
					com.newgen.omniforms.util.showError("","Kindly perform the GRN before sumbitting the Invoice");
					return false;
				}
			}
				
			
			return true;
		  
		case 'S':
		console.log("Save");
			return true;		
	}
return true;
}