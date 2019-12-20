function eventDispatched_NonPoInvoices(pId,pEvent){
    if(pEvent.type=='blur' )
	{	
	}
	if(pEvent.type=='click' )
	{		
	}
	if(pEvent.type=='change' )
	{
		if(pEvent.srcElement.id=='procname')
		{
			var process_name = com.newgen.omniforms.formviewer.getNGValue('procname');
			
			if(process_name == 'Handling/Unloading'||process_name == 'BP Commissions & Third Party Commissions'||process_name == ' Demurrage and Wharfage (Logistics)'||process_name == 'Secondary Freight (Road)'||process_name == 'Rent Godown and Rent Office'||process_name == 'Technical Services: Service & Technical Activity'||process_name == 'Services: Miscellaneous Charges'||process_name == 'Government Bills'||process_name == 'Travelling'||process_name == 'Bonus/Exgratia'||process_name == 'Donations'||process_name == 'Freight'||process_name == 'Repair and Supply: Minor Supply Items  - Part1'){
				com.newgen.omniforms.formviewer.setVisible("Frame2", true);
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				com.newgen.omniforms.formviewer.setVisible("Frame5", false);
				com.newgen.omniforms.formviewer.setVisible("Frame6", false);
				com.newgen.omniforms.formviewer.setVisible("Frame7", false);
				com.newgen.omniforms.formviewer.setVisible("Label61", false);
				com.newgen.omniforms.formviewer.setVisible("proctype", false);
				
				com.newgen.omniforms.formviewer.setVisible("ListView2", false);
				com.newgen.omniforms.formviewer.setVisible("ListView3", false);
				com.newgen.omniforms.formviewer.setVisible("ListView4", false);
				com.newgen.omniforms.formviewer.setVisible("Listview1", true);
			}
			
			if(process_name == 'Demurrage and Wharfage (Plant/GU)'||process_name == 'Other Logistic Expenses'||process_name == 'Primary Freight (Road and Rail) and Freight on clinker Sale'){
				com.newgen.omniforms.formviewer.setVisible("Frame2", false);
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				com.newgen.omniforms.formviewer.setVisible("Frame5", false);
				com.newgen.omniforms.formviewer.setVisible("Frame6", false);
				com.newgen.omniforms.formviewer.setVisible("Frame7", false);
				com.newgen.omniforms.formviewer.setVisible("Label61", true);
				com.newgen.omniforms.formviewer.setVisible("proctype", true);
				com.newgen.omniforms.formviewer.NGClear("proctype");
				com.newgen.omniforms.formviewer.addItem("proctype","--Select--","--Select--");
				com.newgen.omniforms.formviewer.addItem("proctype","Rail","Rail");
				com.newgen.omniforms.formviewer.addItem("proctype","Road","Road");com.newgen.omniforms.formviewer.setVisible("ListView1", true);
				com.newgen.omniforms.formviewer.setVisible("ListView2", false);
				com.newgen.omniforms.formviewer.setVisible("ListView3", false);
				com.newgen.omniforms.formviewer.setVisible("ListView4", false);
				com.newgen.omniforms.formviewer.setVisible("Listview1", false);
				
			}
			if(process_name == 'Travel Allowance Bills (TA Bills)'){
				com.newgen.omniforms.formviewer.setVisible("Frame2", false);
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				com.newgen.omniforms.formviewer.setVisible("Frame5", false);
				com.newgen.omniforms.formviewer.setVisible("Frame6", false);
				com.newgen.omniforms.formviewer.setVisible("Frame7", false);
				com.newgen.omniforms.formviewer.setVisible("Label61", true);
				com.newgen.omniforms.formviewer.setVisible("proctype", true);
				com.newgen.omniforms.formviewer.NGClear("proctype");
				com.newgen.omniforms.formviewer.addItem("proctype","--Select--","--Select--");
				com.newgen.omniforms.formviewer.addItem("proctype","Hotel","Hotel");
				com.newgen.omniforms.formviewer.addItem("proctype","Train","Train");
				com.newgen.omniforms.formviewer.setVisible("ListView2", false);
				com.newgen.omniforms.formviewer.setVisible("ListView3", false);
				com.newgen.omniforms.formviewer.setVisible("ListView4", false);
				com.newgen.omniforms.formviewer.setVisible("Listview1", false);
				
			}
			
			
			
			if(process_name == 'Travel Desk and Company Expenses Reimbursement'){
				com.newgen.omniforms.formviewer.setVisible("Frame2", false);
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				com.newgen.omniforms.formviewer.setVisible("Frame5", false);
				com.newgen.omniforms.formviewer.setVisible("Frame6", false);
				com.newgen.omniforms.formviewer.setVisible("Label61", false);
				com.newgen.omniforms.formviewer.setVisible("proctype", false);
				com.newgen.omniforms.formviewer.setVisible("Frame7", true);
				com.newgen.omniforms.formviewer.setVisible("ListView2", false);
				com.newgen.omniforms.formviewer.setVisible("ListView3", false);
				com.newgen.omniforms.formviewer.setVisible("Listview1", false);
				com.newgen.omniforms.formviewer.setVisible("ListView4", true);
				
			}
			
		}
		
		if(pEvent.srcElement.id=='proctype'){
			var process_type = com.newgen.omniforms.formviewer.getNGValue('proctype');
			if( process_type == 'Rail'){
				com.newgen.omniforms.formviewer.setVisible("Frame4", true);
				com.newgen.omniforms.formviewer.setVisible("Frame2", false);
				com.newgen.omniforms.formviewer.setVisible("Frame5", false);
				com.newgen.omniforms.formviewer.setVisible("Frame6", false);
				com.newgen.omniforms.formviewer.setVisible("Frame7", false);
				com.newgen.omniforms.formviewer.setVisible("ListView2", false);
				com.newgen.omniforms.formviewer.setVisible("ListView3", false);
				com.newgen.omniforms.formviewer.setVisible("ListView4", false);
				com.newgen.omniforms.formviewer.setVisible("Listview1", false);
				
				
				}
				else if(process_type == 'Road'){
				com.newgen.omniforms.formviewer.setVisible("Frame2", true);
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				com.newgen.omniforms.formviewer.setVisible("Frame5", false);
				com.newgen.omniforms.formviewer.setVisible("Frame6", false);
				com.newgen.omniforms.formviewer.setVisible("Frame7", false);
				
				com.newgen.omniforms.formviewer.setVisible("ListView2", false);
				com.newgen.omniforms.formviewer.setVisible("ListView3", false);
				com.newgen.omniforms.formviewer.setVisible("ListView4", false);
				com.newgen.omniforms.formviewer.setVisible("Listview1", true);
				
				
					
				}
				else if(process_type == 'Hotel'){
				com.newgen.omniforms.formviewer.setVisible("Frame6", true);
				com.newgen.omniforms.formviewer.setVisible("Frame2", false);
				com.newgen.omniforms.formviewer.setVisible("Frame5", false);
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				com.newgen.omniforms.formviewer.setVisible("Frame7", false);
				com.newgen.omniforms.formviewer.setVisible("ListView2", false);
				
				com.newgen.omniforms.formviewer.setVisible("ListView4", false);
				com.newgen.omniforms.formviewer.setVisible("Listview1", false);
				com.newgen.omniforms.formviewer.setVisible("ListView3", true);
				
				}
				else{
				com.newgen.omniforms.formviewer.setVisible("Frame5", true);
				com.newgen.omniforms.formviewer.setVisible("Frame2", false);
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				com.newgen.omniforms.formviewer.setVisible("Frame6", false);
				com.newgen.omniforms.formviewer.setVisible("Frame7", false);
				
				com.newgen.omniforms.formviewer.setVisible("ListView3", false);
				com.newgen.omniforms.formviewer.setVisible("ListView4", false);
				com.newgen.omniforms.formviewer.setVisible("Listview1", false);
				com.newgen.omniforms.formviewer.setVisible("ListView2", true);
				
				}
		}
	}
}