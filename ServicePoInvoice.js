function eventDispatched_ServicePoInvoice(pId, pEvent) {
	console.log("inside custom js function");
	switch (pEvent.type) {
		case 'click':
			{
				console.log("inside click event");
				console.log(pEvent.srcElement.id);
				switch (pEvent.srcElement.id) {
					case 'Btn_Resolve':
						{
							return true;
						}

					case 'Btn_Delete_Invoice':
						if (confirm("Are You Sure You Want to Delete Row ?")) {
							return true;
						} else {
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
					case 'Btn_Modify_financialdimension':
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
					case 'Pick_department':
					case 'Clear_qocVendor':
					case 'Clear_ledgeraccount':
					case 'Clear_ledgercostcenter':
					case 'Clear_vendor':
					case 'Clear_ledgergla':
					case 'Clear_department':
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
						
						case 'qwht_adjustedtdsamount':
						{
							var qwht_adjustedtdsamount = document.getElementById("qwht_adjustedtdsamount").value;
							qwht_adjustedtdsamount = Math.round(qwht_adjustedtdsamount);
							com.newgen.omniforms.formviewer.setNGValue("qwht_adjustedtdsamount", qwht_adjustedtdsamount);
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
							com.newgen.omniforms.formviewer.setNGValue("duedate", document.getElementById('postingdate').value);
							return true;
						}
						break;
				}
			}
			break;
	}
	return true;
}
function tab_clicked_ServicePoInvoice(tabName, sheetIndex, activityName) {
	let TabName = tabName;
	let SheetIndex = sheetIndex;
	switch (TabName) {
		case 'Tab1':
			switch (SheetIndex) {
				case '0':
					if ((activityName == 'Accounts') || (activityName == 'AXSyncException')) {
						setControlHeight("Tab1", "398px");
						setControlTop("Tab2", "1218px");
						setControlHeight("FRM_ServicePoInvoice", "1590px");
					} else if ((activityName == 'Approver') || (activityName == 'PurchaseUser')) {
						setControlHeight("Tab1", "272px");
						setControlTop("Tab2", "1090px");
						setControlHeight("FRM_ServicePoInvoice", "1455px");
					}
					else {
						setControlHeight("Tab1", "398px");
						setControlTop("Tab2", "1217px");
						setControlHeight("FRM_ServicePoInvoice", "1590px");
					}
					break;

				case '1':
					if ((activityName == 'Approver') || (activityName == 'PurchaseUser')) {
						setControlHeight("Tab1", "243px");
						setControlTop("Tab2", "1062px");
						setControlHeight("FRM_ServicePoInvoice", "1432px");
					}
					else {
						setControlHeight("Tab1", "296px");
						setControlTop("Tab2", "1085px");
						setControlHeight("FRM_ServicePoInvoice", "1452px");
					}
					break;

				case '2':
					setControlHeight("Tab1", "453px");
					setControlTop("Tab2", "1274px");
					setControlHeight("FRM_ServicePoInvoice", "1643px");
					break;

				case '3':
					setControlHeight("Tab1", "304px");
					setControlTop("Tab2", "1123px");
					setControlHeight("FRM_ServicePoInvoice", "1490px");
					break;

				case '4':
					setControlHeight("Tab1", "100px");
					setControlTop("Tab2", "920px");
					setControlHeight("FRM_ServicePoInvoice", "1290px");
					break;

				case '5':
					setControlHeight("Tab1", "400px");
					setControlTop("Tab2", "1220px");
					setControlHeight("FRM_ServicePoInvoice", "1590px");
					break;

				case '6':
					setControlHeight("Tab1", "451px");
					setControlTop("Tab2", "1273px");
					setControlHeight("FRM_ServicePoInvoice", "1640px");
					break;

				case '7':
					setControlHeight("Tab1", "250px");
					setControlTop("Tab2", "1070px");
					setControlHeight("FRM_ServicePoInvoice", "1440px");
					break;

				case '8':
					setControlHeight("Tab1", "373px");
					setControlTop("Tab2", "1193px");
					setControlHeight("FRM_ServicePoInvoice", "1565px");
					break;
			}
			break;
		case 'Tab2':
			switch (SheetIndex) {
				case '3':
					return true;
					break;
			}
			break;
	}
	return true;
}
function formPopulated_ServicePoInvoice(activityName) {
	switch (activityName) {
		case 'Introduction':
			setControlVisible("Frame2", false);
			setControlVisible("Tab1", false);
			setControlVisible("Tab2", false);
			setControlEnabled("proctype", true);
			setControlEnabled("scanuserremarks", true);
			break;

		case 'Initiator':
			setControlEnabled("holdamount", true);
			setControlHeight("Tab1", "398px");
			setControlTop("Tab2", "1217px");
			setControlHeight("FRM_ServicePoInvoice", "1590px");
			setControlEnabled("proctype", true);
			setControlEnabled("holdamount", false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			break;


		case 'Approver':
			setControlVisible("Btn_fetchpodetails", false);
			setControlVisible("Btn_DeletePO", false);
			setControlVisible("Btn_Delete_Invoice", false);
			setControlEnabled("holdamount", false);
			setControlEnabled("proctype", false);
			setControlEnabled("Frame2", false);
			setControlHeight("Tab1", "272px");
			setControlHeight("FRM_ServicePoInvoice", "1463px");
			setControlTop("Tab2", "1090px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			break;

		case 'PurchaseUser':
			setControlVisible("Btn_fetchpodetails", false);
			setControlVisible("Btn_DeletePO", false);
			setControlVisible("Btn_Delete_Invoice", false);
			setControlEnabled("holdamount", false);
			setControlEnabled("proctype", false);
			setControlEnabled("Frame2", false);
			setControlEnabled("Btn_refreshpodetails", true);
			setControlVisible("Btn_refreshpodetails", true);
			setControlHeight("Tab1", "272px");
			setControlHeight("FRM_ServicePoInvoice", "1463px");
			setControlTop("Tab2", "1090px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			break;

		case 'AccountsMaker':
		case 'AccountsChecker':
			setControlVisible("Btn_fetchpodetails", false);
			setControlEnabled("proctype", false);
			setControlVisible("Btn_DeletePO", false);
			setControlEnabled("Frame2", false);
			setControlEnabled("invoicenumber", true);
			setControlEnabled("invoicedate", true);
			setControlEnabled("postingdate", true);
			setControlEnabled("duedate", true);
			setControlEnabled("holdamount", true);
			setControlEnabled("narrationremarks", true);
			setControlEnabled("invoiceamount", false);
			setControlHeight("Tab1", "398px");
			setControlTop("Tab2", "1218px");
			setControlHeight("FRM_ServicePoInvoice", "1590px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);

			break;

		case 'AXSyncException':
			setControlVisible("Btn_fetchpodetails", false);
			setControlEnabled("proctype", false);
			setControlVisible("Btn_DeletePO", false);
			setControlEnabled("Frame2", false);
			setControlEnabled("invoicenumber", true);
			setControlEnabled("invoicedate", true);
			setControlEnabled("postingdate", true);
			setControlEnabled("duedate", true);
			setControlEnabled("holdamount", true);
			setControlEnabled("narrationremarks", true);
			setControlEnabled("invoiceamount", false);
			setControlHeight("Tab1", "398px");
			setControlTop("Tab2", "1218px");
			setControlHeight("FRM_ServicePoInvoice", "1590px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, true);
			break;
	}
	return true;
}
function validate_PoInvoices(pEvent, activityName) {
	switch (pEvent) {
		case 'I':
			{
				return true;
			}
			break;
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

				if (activityName == 'Initiator') {
					if (invoicenumber == '') {
						showError("", "Kindly enter the Invoice Number");
						return false;
					}

					else if (invoicedate == '') {
						showError("", "Kindly Enter the Invoice Date");
						return false;
					}

					else if (invoiceamount == '') {
						showError("", "Kindly Enter the Invoice Amount");
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
				}
				else if (activityName == 'Approver') {
					if (filestatus == '') {
						showError("", "Kindly Enter the FileStatus");
						return false;
					}

				}
				else if (activityName == 'Accounts' || activityName == 'AXSyncException') {
					if (filestatus == '') {
						showError("", "Kindly Enter the FileStatus");
						return false;
					}

					else if (postingdate == '') {
						showError("", "Kindly Enter the Posting Date");
						return false;
					}


					else if (currency == '') {
						showError("", "Kindly Enter the Currency");
						return false;
					}

					else if (currency != 'INR') {
						if (exchangerateotherthaninr == '') {
							showError("", "Kindly Enter the Exchange Rate");
							return false;
						}

					}
					else if (invoicenumber == '') {
						showError("", "Kindly enter the Invoice Number");
						return false;
					}

					else if (invoicedate == '') {
						showError("", "Kindly Enter the Invoice Date");
						return false;
					}

					else if (invoiceamount == '') {
						showError("", "Kindly Enter the Invoice Amount");
						return false;
					}
				}
				else {
					if (remarks == '') {
						showError("", "Kindly Enter the Remarks");
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