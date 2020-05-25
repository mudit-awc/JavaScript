function eventDispatched_NonPoInvoice(pId, pEvent) {
	console.log(pEvent.srcElement.id);
	switch (pEvent.type) {
		case 'click':
			{
				switch (pEvent.srcElement.id) {
					case 'Btn_Applytoall':
						{
							return true;
						}
						break;

					case 'Btn_Add_LedgerLines':
						{
							return true;
						}
						break;

					case 'Btn_Modify_Taxdocument':
						{
							return true;
						}
						break;

					case 'Btn_Resolve':
						{
							return true;
						}
						break;

					case 'Pick_journalname':
					case 'Pick_account':
					case 'Pick_department':
					case 'Pick_paymentterm':
					case 'Pick_ledgeraccount':
					case 'Pick_ledgerbusinessunit':
					case 'Pick_ledgerstate':
					case 'Pick_ledgercostcentergroup':
					case 'Pick_ledgercostcenter':
					case 'Pick_ledgerdepartment':
					case 'Pick_ledgergla':
					case 'Pick_ledgertdsgroup':
					case 'Pick_withholdingtds':
					case 'Pick_hsnsac':
					case 'Pick_ledgerwarehouse':
					case 'Pick_ledgerrso':
					case 'Pick_companylocation':
					case 'Pick_vendorlocation':
					case 'Clear_ledgerdepartment':
					case 'Clear_ledgergla':
					case 'Clear_ledgerwarehouse':
					case 'Clear_ledgerrso':
					case 'Clear_ledgertdsgroup':
						console.log("inside click event in js(department)");
						{
							return true;
						}
						break;
				}
			}
			break;

		case 'change':
			{
				switch (pEvent.srcElement.id) {
					case 'invoicedate':
						{
							return true;
						}
						break;

					case 'qtd_taxamountadjustment':
						{
							return true;
						}
						break;

					case 'q_ledgeramount':
						{
							return true;
						}
						break;

					case 'q_ledgeradjustedoriginamount':
					case 'tdsadjustedbaseamount':
						{
							return true;
						}
						break;

					case 'q_ledgeradjustmenttdsamount':
						{
							var q_ledgeradjustmenttdsamount = document.getElementById("q_ledgeradjustmenttdsamount").value;
							q_ledgeradjustmenttdsamount = Math.round(q_ledgeradjustmenttdsamount);
							com.newgen.omniforms.formviewer.setNGValue("q_ledgeradjustmenttdsamount", q_ledgeradjustmenttdsamount);
							return true;
						}
						break;

					case 'vendorstate':
					case 'customerstate':
						{
							return true;
						}
						break;

					case 'accounttype':
						{
							com.newgen.omniforms.formviewer.setNGValue("account", "");
						}
						break;

					case 'hsnsaccodetype':
						{
							com.newgen.omniforms.formviewer.setNGValue("hsnsaccodevalue", "");
						}
				}
				break;
			}
	}
	return true;
}

function tab_clicked_NonPoInvoice(tabName, sheetIndex, activityName) {
	let TabName = tabName;
	let SheetIndex = sheetIndex;
	switch (TabName) {
		case 'Tab1':
			console.log("inside tab1");
			switch (SheetIndex) {
				case '0':
					setControlHeight("Tab1", "540px");
					setControlTop("Tab1", "633px");
					setControlTop("Tab2", "1200px");
					setControlHeight("FRM_NonPoInvoice", "1570px");
					break;

				case '1':		//CTI
					setControlHeight("Tab1", "135px");
					setControlTop("Tab2", "795px");
					setControlHeight("FRM_NonPoInvoice", "1160px");
					break;

				case '2':       //VTI
					setControlHeight("Tab1", "135px");
					setControlTop("Tab2", "795px");
					setControlHeight("FRM_NonPoInvoice", "1160px");
					break;

				case '3':		//TD
					setControlHeight("Tab1", "550px");
					setControlTop("Tab1", "633px");
					setControlTop("Tab2", "1210px");
					setControlHeight("FRM_NonPoInvoice", "1578px");
					break;
			}
			break;
		/*case 'Tab2':
		console.log("inside tab1");
			switch(SheetIndex){				
			case '0': // Action
			if(activityName=='Approver'||activityName=='Initiator'){
					setControlTop("Tab2","559px");
					setControlHeight("Tab2","278px");					
					setControlHeight("FRM_NonPoInvoice","750px");
				}
				else if(activityName=='Accounts'||activityName=='AXSyncException'){
					setControlHeight("Tab1","560px");
					setControlHeight("Tab2","278px");
					setControlHeight("FRM_NonPoInvoice","1330px");
					}
				break;
				
				case '1':		//History
			if(activityName=='Approver'||activityName=='Initiator'){
					setControlTop("Tab2","559px");	
					setControlHeight("Tab2","278px");
					setControlHeight("FRM_NonPoInvoice","848px");
				}
				else if(activityName=='Accounts'||activityName=='AXSyncException'){
					setControlHeight("Tab2","278px");
					setControlHeight("FRM_NonPoInvoice","1450px");
				}
				break;
				
				case '2':       //AX Exception
				if(activityName=='Approver'||activityName=='Initiator'){
					setControlTop("Tab2","559px");	
					setControlHeight("Tab2","356px");
					setControlHeight("FRM_NonPoInvoice","920px");
				}
				else if(activityName=='Accounts'||activityName=='AXSyncException'){
					setControlHeight("Tab2","356px");
					setControlHeight("FRM_NonPoInvoice","1505px");
				}
				break;
				
				case '3':		//Summary
				if(activityName=='Approver'||activityName=='Initiator'){
					setControlTop("Tab2","559px");	
					setControlHeight("Tab2","1147px");
					setControlHeight("FRM_NonPoInvoice","750px");
				}else if(activityName=='Accounts'||activityName=='AXSyncException'){
					setControlHeight("Tab1","560px");
					setControlHeight("Tab2","1147px");
					setControlHeight("FRM_NonPoInvoice","1330px");
				}
				break;
			}
		break;
		
		*/
	}
	return true;
}

function formPopulated_NonPoInvoice(activityName) {
	switch (activityName) {
		case 'Initiator':
			setControlEnabled("site", true);
			setControlEnabled("state", true);
			setControlEnabled("proctype", true);
			setControlEnabled("postingdate", false);
			setControlEnabled("duedate", false);
			setControlEnabled("description", false);
			setControlVisible("Frame2", true);
			setControlVisible("Pick_department", true)
			setControlVisible("Tab1", false);
			setControlVisible("Tab2", true);
			setControlTop("Tab2", "632px");
			setControlHeight("FRM_NonPoInvoice", "995px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			break;

		case 'Approver':
			setControlVisible("Pick_journalname", false);
			setControlVisible("Pick_account", false);
			setControlVisible("Pick_paymentterm", false);
			setControlVisible("Frame2", true);
			setControlEnabled("Frame2", false);
			setControlVisible("Tab1", false);
			setControlVisible("Tab2", true);
			setControlTop("Tab2", "632px");
			setControlHeight("FRM_NonPoInvoice", "995px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			break;

		case 'AccountsMaker':
		case 'AccountsChecker':
			setControlEnabled("Frame2", false);
			setControlVisible("Pick_account", true);
			setControlVisible("Pick_journalname", true);
			setControlVisible("Pick_paymentterm", true);
			// setControlVisible("Frame2", true);
			setControlEnabled("accounttype", true);
			setControlEnabled("Pick_account", true);
			setControlEnabled("Pick_journalname", true);
			setControlEnabled("Pick_paymentterm", true);
			setControlEnabled("description", true);
			setControlEnabled("paymentterm", false);
			setControlEnabled("postingdate", true);
			setControlEnabled("duedate", true);
			setControlEnabled("invoicenumber", true);
			setControlEnabled("invoicedate", true);
			setControlEnabled("amounttype", true);
			setControlEnabled("baseamount", true);
			setControlEnabled("invoiceamount", true);
			setControlEnabled("currency", true);
			setControlHeight("FRM_NonPoInvoice", "1578px");
			setControlTop("Tab1", "632px");
			setControlTop("Tab2", "1210px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			break;

		case 'AXSyncException':
			setControlTop("Tab1", "632px");
			setControlTop("Tab2", "1210px");
			setControlHeight("FRM_NonPoInvoice", "1578px");
			
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			break;
	}
	return true;
}

function validate_NonPoInvoices(pEvent, activityName) {
	switch (pEvent) {
		case 'I':
		case 'D':
			{
				let journalname = document.getElementById('journalname').value;
				let accounttype = document.getElementById('accounttype').value;
				let account = document.getElementById('account').value;
				//let voucher = document.getElementById('voucher').value;
				let invoicenumber = document.getElementById('invoicenumber').value;
				let invoicedate = document.getElementById('invoicedate').value;
				let amounttype = document.getElementById('amounttype').value;
				let baseamount = document.getElementById('baseamount').value;
				let paymentterm = document.getElementById('paymentterm').value;
				let duedate = document.getElementById('duedate').value;
				let state = document.getElementById('state').value;
				let filestatus = document.getElementById('filestatus').value;
				let currency = document.getElementById('currency').value;
				let exchangerateotherthaninr = document.getElementById('exchangerateotherthaninr').value;
				let customerlocation = document.getElementById('customerlocation').value;
				let customeraddress = document.getElementById('customeraddress').value;
				//let customertaxinformation = document.getElementById('customertaxinformation').value;
				let customerstate = document.getElementById('customerstate').value;
				let vendorlocation = document.getElementById('vendorlocation').value;
				//let vendorgstingdiuid = document.getElementById('vendorgstingdiuid').value;
				let vendoraddress = document.getElementById('vendoraddress').value;
				//let vendortaxinformation = document.getElementById('vendortaxinformation').value;
				let vendorstate = document.getElementById('vendorstate').value;
				let remarks = document.getElementById('Text51').value;
				let description = document.getElementById('description').value;

				if (activityName == 'Initiator') {
					// if (journalname == '') {
					// 	showError("", "Kindly enter the Journal Name");
					// 	return false;
					// }

					if (accounttype == '') {
						showError("", "Kindly Enter the Account Type");
						return false;
					}

					else if (account == '') {
						showError("", "Kindly Enter the Account");
						return false;
					}

				//	else if (voucher == '') {
				//		showError("", "Kindly Enter the Vouncher");
			//			return false;
				//	}

					else if (invoicenumber == '') {
						showError("", "Kindly Enter the Invoice Number");
						return false;
					}

					else if (invoicedate == '') {
						showError("", "Kindly Enter the Invoice Date");
						return false;
					}

					else if (amounttype == '') {
						showError("", "Kindly Enter the Amount Type");
						return false;
					}

					else if (baseamount == '') {
						showError("", "Kindly Enter the Base Amount");
						return false;
					}

					else if (state == '') {
						showError("", "Kindly Enter the State");
						return false;
					}

					else if (filestatus == '') {
						showError("", "Kindly Enter the FileStatus");
						return false;
					}
					else if (remarks == '') {
						showError("", "Kindly Enter the Remarks");
						return false;
					}

				}
				else if (activityName == 'Approver') {

					if (filestatus == '') {
						showError("", "Kindly Enter the FileStatus");
						return false;
					}
					else if (remarks == '') {
						showError("", "Kindly Enter the Remarks");
						return false;
					}

				}

				else if (activityName == 'AccountsMaker'
					|| activityName == 'AccountsChecker') {

					if (currency == '') {
						showError("", "Kindly Enter the Currency");
						return false;
					}

					else if (currency != 'INR' && exchangerateotherthaninr == '') {
						showError("", "Kindly Enter the Exchange Rate");
						return false;
					}


					else if (customerlocation == '') {
						showError("", "Kindly Enter the Company Location");
						return false;
					}

					else if (customeraddress == '') {
						showError("", "Kindly Enter the Company Address");
						return false;
					}

					/*else if(duedate=='')
					{
							showError("","Kindly Enter the DueDate");
							return false;
					}
					*/
					/*else if(customertaxinformation=='')
					{
						showError("","Kindly Enter the Company Tax Information ");
						return false;
					}*/

					else if (customerstate == '') {
						showError("", "Kindly Enter the Company State");
						return false;
					}

					else if (vendorlocation == '') {
						showError("", "Kindly Enter the Vendor Locaton");
						return false;
					}

					else if (vendoraddress == '') {
						showError("", "Kindly Enter the Vendor Address");
						return false;
					}

					/*else if(vendortaxinformation=='')
					{
						showError("","Kindly Enter the  vendor Tax Information ");
						return false;
					}*/

					else if (vendorstate == '') {
						showError("", "Kindly Enter the Vendor State");
						return false;
					}

					/*else if(vendorgstingdiuid=='')
					{
						showError("","Kindly Enter the GSTIN/GDI/UID Number");
						return false;
					}*/

					else if (filestatus == '') {
						showError("", "Kindly Enter the FileStatus");
						return false;
					}
					else if (remarks == '') {
						showError("", "Kindly Enter the Remarks");
						return false;
					}

					if (description == '') {
						showError("", "Kindly Enter the Description");
						return false;
					}
					if (journalname == '') {
					 	showError("", "Kindly enter the Journal Name");
					 	return false;
					}
				}
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
	com.newgen.omniforms.util.showError("", message);
}