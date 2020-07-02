function tab_clicked_SupplyPoInvoices(tabName, sheetIndex, activityName) {
	let tabName1 = tabName;
	let sheetIndex1 = sheetIndex;
	let itemTypeFlage = document.getElementById('itemtypeflag').value;
	switch (tabName1) {
		case 'Tab1':
			switch (sheetIndex1) {
				case '0':
				case '1':
				case '2':
					if (activityName == 'AccountsMaker' || activityName == 'AccountsChecker' || activityName == 'AXAccountsSyncException') {
						com.newgen.omniforms.formviewer.setHeight("Frame1", "1650px");
						com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1650px");
						com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
						com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
					}
					break;

				case '3':
				case '6':
				case '7':
					com.newgen.omniforms.formviewer.setHeight("Frame1", "1835px");
					com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1835px");
					com.newgen.omniforms.formviewer.setTop("Tab2", "1375px");
					com.newgen.omniforms.formviewer.setHeight("Tab1", "460px");
					break;

				case '4':
					com.newgen.omniforms.formviewer.setHeight("Frame1", "1657px");
					com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1657px");
					com.newgen.omniforms.formviewer.setTop("Tab2", "1197px");
					com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
					break;

				case '5':
					com.newgen.omniforms.formviewer.setHeight("Frame1", "1455px");
					com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1455px");
					com.newgen.omniforms.formviewer.setTop("Tab2", "995px");
					com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
					break;

				case '8':
					com.newgen.omniforms.formviewer.setHeight("Frame1", "1645px");
					com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1645px");
					com.newgen.omniforms.formviewer.setTop("Tab2", "1175px");
					com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
					break;

			}
			break;
		/*	case 'Tab2':
				switch (sheetIndex1) {
					case '0': //initiator
						com.newgen.omniforms.formviewer.setHeight("Frame1", "1375px");
						com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1375px");
						com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
						com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
						com.newgen.omniforms.formviewer.setHeight("Tab2", "177px");
						break;
	
					case '1': //puchase user
						break;
	
	
					case '2': //store user
						if (activityName == 'StoreMaker' ||activityName == 'StoreChecker' || activityName == 'AXStoreSyncException') {
							com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
							com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
							com.newgen.omniforms.formviewer.setHeight("Tab2", "578px");
							com.newgen.omniforms.formviewer.setHeight("Frame1", "1650px");
							com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1650px");
						}
						break;
	
					case '3': //Quality
						if (itemTypeFlage == 'PP Bags') {
							if (activityName == 'QualityMaker' || activityName == 'AXQualitySyncException') {
								com.newgen.omniforms.formviewer.setHeight("Frame1", "1375px");
								com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1375px");
								com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
								com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
								com.newgen.omniforms.formviewer.setHeight("Tab2", "177px");
							}
						}
						if (itemTypeFlage == 'None' || itemTypeFlage == 'Quarantine') {
							if (activityName == 'QualityMaker' || activityName == 'QualityChecker' || activityName == 'AXQualitySyncException') {
								com.newgen.omniforms.formviewer.setHeight("Frame1", "1750px");
								com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1550px");
								com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
								com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
								com.newgen.omniforms.formviewer.setHeight("Tab2", "385px");
							}
						}
						break;
	
					case '4': //acounts
						break;
	
					case '6': //AX Exception
						if (activityName == 'QualityMaker'
							|| activityName == 'QualityChecker'
							|| activityName == 'AXQualitySyncException'
							|| activityName == 'StoreMaker'
							|| activityName == 'StoreChecker'
							|| activityName == 'AXStoreSyncException'
							|| activityName == 'Initiator') {
							com.newgen.omniforms.formviewer.setHeight("Frame1", "1515px");
							com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1515px");
							com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
							com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
							com.newgen.omniforms.formviewer.setHeight("Tab2", "280px");
						}
						break;
					case '7':
						break;
				}
				break;*/

	}
	return true;

}
function eventDispatched_SupplyPoInvoices(pId, pEvent) {

	switch (pEvent.type) {
		case 'click':
			switch (pEvent.srcElement.id) {
				case 'Btn_add_multplegrn':
				case 'Btn_delete_multiplegrn':
				case 'Btn_combine':
				case 'Btn_Resolve':
				case 'qtd_exempt':
				case 'Btn_cancelGRN':
				case 'Btn_Export_GateEntry':
				case 'Pick_chargesCode':
				case 'Btn_View':
					return true;
					break;


				case 'Btn_Add_Maintaincharges':
				case 'Btn_Delete_Maintaincharges':
				case 'Btn_Modify_Maintaincharges':
				case 'Btn_Allocate_Maintaincharges':
					return true;


				case 'Btn_AddLine':
				case 'Btn_DeleteLine':
				case 'Btn_Clear_Vendor':
					return true;

				case 'Btn_updateregistration':
				case 'Btn_Modify_Withholdingtax':
				case 'Btn_Modify_Taxdocument':
				case 'Btn_Modify_Prepayment':
					return true;

				case 'Btn_NegativeGRN':
					return true;

				/*	case 'Btn_GenerateGRN':
					return true;
					
					case 'Btn_CancelGRN':
					//com.newgen.omniforms.util.showError("","Are You Sure You Want to Cancel GRN ?");	
					if(confirm("Are You Sure You Want to Cancel GRN ?"))
					{
					return true;	
					}
					else{
						return false;
					}
				*/
				case 'Pick_MultipleGRNPo':
					return true;
					break;


				case 'btn_fetchpogedetails':
					let invoiceno = document.getElementById('invoiceno').value;
					let purchaseorderno = document.getElementById('purchaseorderno').value;
					if ((invoiceno == '' || invoiceno == null) || (purchaseorderno == '' || purchaseorderno == null)) {
						com.newgen.omniforms.util.showError("", "Invoice Number and Purchase Order No. Can not be Empty");
						return false;
					}
					return true;

				case 'currency':
				case 'invoiceamount':
				case 'exchangerate':
					return false;

				case 'Btn_updateQuaratinedetails':
					return true;


				case 'Pick_chargescode':
				case 'Pick_category':
				case 'Pick_min':
				case 'Pick_max':
				case 'Pick_companylocation':
				case 'Pick_hsnsacvalue':
				case 'Pick_vendorlocation':
				case 'Pick_tdsgroup':
				case 'Pick_registrationno':
				case 'Pick_qocVendor':
					{
						return true;
					}
					break;

			}
			switch (pId) {
				case 'q_gateentrylines':
					console.log("Inside button click q_gateentrylines");
					return true;
			}

			break;

		case 'change':
			switch (pEvent.srcElement.id) {
				case 'multiplegrn':
					return true;
					break;

				case 'invoicedate':
					return true;
					break;
				
				case 'purchaseorderno':
					return true;
					break;

				case 'grnstartdate':
				case 'grnenddate':
					return true;
					break;

				case 'qoc_linenumber':
				case 'qoc_category':
				case 'qoc_chargesvalue':
				case 'qoc_chargesat':
					return true;

				case 'q_sb_linenumber':
					return true;

				case 'postingdate':
					return true;

				case 'invoicedate':
					return true;
				case 'qtd_hsnsacdescription':	
					alert("inside tooltip");
					com.newgen.omniforms.formviewer.setToolTip("qtd_taxcomponent",document.getElementById('qtd_taxcomponent').value);
					alert("after tool tip");
					return true;
				
				case 'qwht_tdspercent':
				case 'qtd_taxamount':
				case 'qwht_adjustedoriginamount':
					return true;

				case 'qwht_adjustedtdsamount':
					{
						var qwht_adjustedtdsamount = document.getElementById("qwht_adjustedtdsamount").value;
						qwht_adjustedtdsamount = Math.round(qwht_adjustedtdsamount);
						com.newgen.omniforms.formviewer.setNGValue("qwht_adjustedtdsamount", qwht_adjustedtdsamount);
						return true;
					}
					break;

				case 'purchaseorderno':
					return true;

				case 'invoiceamount':
					return true;

				case 'invoiceno':
					return true;

				case 'q_polines_Quantity':
					return true;

				case 'Quality_linenumber':
					return true;

				case 'Q_acceptedquantity':
					return true;

				case 'Q_rejectedquantity':
					return true;

				case 'purchasestatus':
					var purchasestatus1 = document.getElementById('purchasestatus').value;
					if (purchasestatus1 == 'Purchase Return') {
						com.newgen.omniforms.formviewer.setVisible("Label33", true);
						com.newgen.omniforms.formviewer.setVisible("returnpo", true);

					}
					else {
						com.newgen.omniforms.formviewer.setVisible("Label33", false);
						com.newgen.omniforms.formviewer.setVisible("returnpo", false);
					}
					return true;


				case 'initiatorstatus':
					var initiatorstatus = document.getElementById('initiatorstatus').value;
					if (initiatorstatus == 'Exception') {
						com.newgen.omniforms.formviewer.setVisible("Label21", true);
						com.newgen.omniforms.formviewer.setVisible("initiatorexception", true);
					}
					else {
						com.newgen.omniforms.formviewer.setVisible("Label21", false);
						com.newgen.omniforms.formviewer.setVisible("initiatorexception", false);
					}
					return true;

				case 'storestatus':
					var storestatus = document.getElementById('storestatus').value;
					if (storestatus == 'Exception') {
						com.newgen.omniforms.formviewer.setVisible("Label45", true);
						com.newgen.omniforms.formviewer.setVisible("storeexception", true);						
						com.newgen.omniforms.formviewer.setVisible("Label27", false);
						com.newgen.omniforms.formviewer.setVisible("multiplegrnholdflag", false);
					} else if (storestatus == 'Submit For GRN'
					||storestatus == 'Create GRN') {
						com.newgen.omniforms.formviewer.setVisible("Label45", false);
						com.newgen.omniforms.formviewer.setVisible("storeexception", false);
						com.newgen.omniforms.formviewer.setVisible("Label27", true);
						com.newgen.omniforms.formviewer.setVisible("multiplegrnholdflag", true);
					}
					else {
						com.newgen.omniforms.formviewer.setVisible("Label45", false);
						com.newgen.omniforms.formviewer.setVisible("storeexception", false);				
						com.newgen.omniforms.formviewer.setVisible("Label27", false);
						com.newgen.omniforms.formviewer.setVisible("multiplegrnholdflag", false);
					}
					return true;

				case 'accountsstatus':
					var accountsstatus = document.getElementById('accountsstatus').value;
					if (accountsstatus == 'Exception') {
						com.newgen.omniforms.formviewer.setVisible("Label46", true);
						com.newgen.omniforms.formviewer.setVisible("accountsexception", true);
					}
					else {
						com.newgen.omniforms.formviewer.setVisible("Label46", false);
						com.newgen.omniforms.formviewer.setVisible("accountsexception", false);
					}
					return true;

				case 'qualitystatus':
					let qualityStatus = document.getElementById('qualitystatus').value;
					let itemTypeFlag = document.getElementById('itemtypeflag').value;
					if (qualityStatus == 'Exception' && itemTypeFlag == 'PP Bags') {
						com.newgen.omniforms.formviewer.setVisible("Label31", true);
						com.newgen.omniforms.formviewer.setVisible("qualityexception", true);
						com.newgen.omniforms.formviewer.setVisible("Label42", true);
						com.newgen.omniforms.formviewer.setVisible("qualityremarks", true);
						com.newgen.omniforms.formviewer.setTop("Label31", "37px");
						com.newgen.omniforms.formviewer.setTop("qualityexception", "56px");
					}
					else if (qualityStatus == 'Exception' && itemTypeFlag == 'Quarantine') {
						com.newgen.omniforms.formviewer.setVisible("Label31", true);
						com.newgen.omniforms.formviewer.setVisible("qualityexception", true);
						//	com.newgen.omniforms.formviewer.setTop("Label31","238px");
						//	com.newgen.omniforms.formviewer.setTop("qualityexception","256px");
					}
					else if (qualityStatus == 'Exception' && itemTypeFlag == 'Raw Material') {
						com.newgen.omniforms.formviewer.setVisible("Label31", true);
						com.newgen.omniforms.formviewer.setVisible("qualityexception", true);
						com.newgen.omniforms.formviewer.setTop("Label31", "37px");
						com.newgen.omniforms.formviewer.setTop("qualityexception", "56px");
					} else if (qualityStatus == 'Exception' && (itemTypeFlag == 'NULL' || itemTypeFlag == '')) {
						com.newgen.omniforms.formviewer.setVisible("Label31", true);
						com.newgen.omniforms.formviewer.setVisible("qualityexception", true);
						com.newgen.omniforms.formviewer.setTop("Label31", "37px");
						com.newgen.omniforms.formviewer.setTop("qualityexception", "56px");
					}
					else {
						com.newgen.omniforms.formviewer.setVisible("Label31", false);
						com.newgen.omniforms.formviewer.setVisible("qualityexception", false);
					}
					return true;
			}
			break;
	}
}
function validate_SupplyPoInvoices(pEvent, activityName) {
	switch (pEvent) {
		case 'I':
		case 'D':
			{
				let previousactivity = document.getElementById('previousactivity').value;
				if (activityName == 'MultipleGRNInvoicing') {
					return true;
				}
				if (activityName == 'Initiator') {
					let initiatorstatus = document.getElementById('initiatorstatus').value;
					let invoicenumber = document.getElementById('invoiceno').value;
					let invoiceamount = document.getElementById('invoiceamount').value;
					let invoicedate = document.getElementById('invoicedate').value;
					let ponumber = document.getElementById('purchaseorderno').value;

					if (initiatorstatus == 'Exception') {
						let initiatorException = document.getElementById('initiatorexception').value;
						if (initiatorException == '' || initiatorException == null) {
							com.newgen.omniforms.util.showError("", "Kindly Select Any Exception");
							return false;
						}
						else {
							return true;
						}

					}
					if (initiatorstatus != 'Exception' && initiatorstatus != 'Discard') {
					if (ponumber == '' || ponumber == null) {
						com.newgen.omniforms.util.showError("", "Kindly Enter the Purchase Order Number");
						return false;
					}
					if (invoicenumber == '' || invoicenumber == null) {
						com.newgen.omniforms.util.showError("", "Kindly Enter the Invoice Number");
						return false;
					}
					if (invoiceamount == '' || invoiceamount == null) {
						com.newgen.omniforms.util.showError("", "Kindly Enter the Invoice Amount");
						return false;
					}
					if (invoicedate == '' || invoicedate == null) {
						com.newgen.omniforms.util.showError("", "Kindly Enter the Invoice Date");
						return false;
					}
					if (initiatorstatus == '') {
						com.newgen.omniforms.util.showError("", "Kindly enter the decision");
						return false;
					}
				}
				}

				if (activityName == 'StoreMaker'
					|| activityName == 'StoreChecker') {
					let storestatus = document.getElementById('storestatus').value;
					if (storestatus == '') {
						com.newgen.omniforms.util.showError("", "Kindly select any Decision");
						return false;
					}
					if (storestatus == 'Exception') {
						let storeexception = document.getElementById('storeexception').value;
						if (storeexception == '' || storeexception == null) {
							com.newgen.omniforms.util.showError("", "Kindly Select Any Exception");
							return false;
						}
					}
					if (storestatus == 'Submit For GRN'
					|| storestatus == 'Create GRN') {
						let multiplegrnholdflag = document.getElementById('multiplegrnholdflag').value;
						if (multiplegrnholdflag == '' || multiplegrnholdflag == null) {
							com.newgen.omniforms.util.showError("", "Kindly Select Hold For Single Invoice Multiple GRN Flag");
							return false;
						}
					}
				}

				if (activityName == 'PurchaseUser') {
					let purchasestatus = document.getElementById('purchasestatus').value;
					if (purchasestatus == 'Hold' || purchasestatus == '' || purchasestatus == null) {
						com.newgen.omniforms.util.showError("", "Clear the exception to proceed further");
						return false;
					}
					if (purchasestatus == 'Purchase Return') {
						let returnpo = document.getElementById('returnpo').value;
						if (returnpo == '' || returnpo == null) {
							com.newgen.omniforms.util.showError("", "Kindly Enter Return PO Number");
							return false;
						}
					}
				}

				if (activityName == 'QualityMaker'
					|| activityName == 'QualityChecker') {
					let qualitystatus = document.getElementById('qualitystatus').value;
					if (qualitystatus == '') {
						com.newgen.omniforms.util.showError("", "Kindly select any Decision");
						return false;
					}
					if (purchasestatus == 'Hold' || purchasestatus == '' || purchasestatus == null) {
						com.newgen.omniforms.util.showError("", "Kindly accept the case");
						return false;
					}
					return true;
				}
				
				
				if (activityName == 'AccountsMaker'
					|| activityName == 'AccountsChecker') {
					let accountsstatus = document.getElementById('accountsstatus').value;
					let narrationremarks = document.getElementById('narrationremarks').value;
					if (narrationremarks == '') {
						com.newgen.omniforms.util.showError("", "Kindly Enter any Narration Remarks");
						return false;
					}
					if(accountsstatus==''){
						com.newgen.omniforms.util.showError("", "Kindly Select Any Status");
						return false;
					}
					if (accountsstatus == 'Exception') {
						let accountsexception = document.getElementById('accountsexception').value;
						if (accountsexception == '' || accountsexception == null) {
							com.newgen.omniforms.util.showError("", "Kindly Select Any Exception");
							return false;
						}
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
function formPopulated_SupplyPoInvoice(activityName) {
	switch (activityName) {
		case 'ManualIntroduction':
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, false);
			break;

		case 'Initiator':
			com.newgen.omniforms.formviewer.setEnabled("purchaseorderno", true);
			com.newgen.omniforms.formviewer.setEnabled("proctype", true);
			com.newgen.omniforms.formviewer.setEnabled("multiplegrn", true);
			com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", true);
			com.newgen.omniforms.formviewer.setHeight("Frame1", "1655px");
			com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1655px");
			com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
			com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
			//com.newgen.omniforms.formviewer.setHeight("Tab2", "177px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, false);
			break;

		case 'StoreMaker':
		case 'StoreChecker':
			var multiplegrn = document.getElementById("multiplegrn").value;
			com.newgen.omniforms.formviewer.setVisible("Btn_View", true);
			com.newgen.omniforms.formviewer.setVisible("Btn_cancelGRN", true);
			com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", false);
			com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
			com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
			//com.newgen.omniforms.formviewer.setHeight("Tab2", "578px");
			com.newgen.omniforms.formviewer.setHeight("Frame1", "1655px");
			com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1655px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, true);//@chnge
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, true);
			com.newgen.omniforms.formviewer.setEnabled("accountsstatus",false);//@added
			com.newgen.omniforms.formviewer.setEnabled("accountsremarks",false);//@added
			console.log("multiplegrn :" + multiplegrn);
			if (multiplegrn == 'True') {
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				com.newgen.omniforms.formviewer.setTop("Label39", "46px");
				com.newgen.omniforms.formviewer.setTop("storestatus", "64px");
				com.newgen.omniforms.formviewer.setTop("Label40", "103px");
				com.newgen.omniforms.formviewer.setTop("storeremarks", "120px");
			}
			break;
			
		
		case 'HoldMultipleGRN':
			var multiplegrn = document.getElementById("multiplegrn").value;
			com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", false);
			com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
			com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
			//com.newgen.omniforms.formviewer.setHeight("Tab2", "578px");
			com.newgen.omniforms.formviewer.setHeight("Frame1", "1655px");
			com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1655px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, true);
			console.log("multiplegrn :" + multiplegrn);
			if (multiplegrn == 'True') {
				com.newgen.omniforms.formviewer.setVisible("Frame4", false);
				com.newgen.omniforms.formviewer.setTop("Label39", "46px");
				com.newgen.omniforms.formviewer.setTop("storestatus", "64px");
				com.newgen.omniforms.formviewer.setTop("Label40", "103px");
				com.newgen.omniforms.formviewer.setTop("storeremarks", "120px");
			}
			break;

		case 'AXStoreSyncException':
			com.newgen.omniforms.formviewer.setVisible("Btn_cancelGRN", true);
			com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", false);
			com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
			com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
			//com.newgen.omniforms.formviewer.setHeight("Tab2", "578px");
			com.newgen.omniforms.formviewer.setHeight("Frame1", "1655px");
			com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1655px");
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, true);

			com.newgen.omniforms.formviewer.setVisible("Label39", false);
			com.newgen.omniforms.formviewer.setVisible("storestatus", false);
			com.newgen.omniforms.formviewer.setVisible("Label40", false);
			com.newgen.omniforms.formviewer.setVisible("storeremarks", false);
			break;

		case 'QualityMaker':
		case 'QualityChecker':
			com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", false);

			com.newgen.omniforms.formviewer.setEnabled("Frame2", false);

			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, false);

			let itemTypeFlag = document.getElementById('itemtypeflag').value;
			if (itemTypeFlag == 'PP Bags') {
				com.newgen.omniforms.formviewer.setHeight("Frame1", "1655px");
				com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1655px");
				com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
				//com.newgen.omniforms.formviewer.setHeight("Tab2", "177px");

				com.newgen.omniforms.formviewer.setVisible("Btn_updateQuaratinedetails", false);
				com.newgen.omniforms.formviewer.setVisible("Quality_linenumber", false);
				com.newgen.omniforms.formviewer.setVisible("Label112", false);
				com.newgen.omniforms.formviewer.setVisible("Frame6", false);
				com.newgen.omniforms.formviewer.setVisible("Label23", false);
				com.newgen.omniforms.formviewer.setVisible("Quality_itemselect", false);
				com.newgen.omniforms.formviewer.setVisible("Label42", true);
				com.newgen.omniforms.formviewer.setVisible("qualityremarks", true);

				com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
				com.newgen.omniforms.formviewer.setTop("Label41", "37px");
				com.newgen.omniforms.formviewer.setTop("qualitystatus", "56px");
				com.newgen.omniforms.formviewer.setTop("Label42", "101px");
				com.newgen.omniforms.formviewer.setTop("qualityremarks", "121px");
			}
			else if (itemTypeFlag == 'None' || itemTypeFlag == 'Quarantine') {
				com.newgen.omniforms.formviewer.setHeight("Frame1", "1655px");
				com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
				//	com.newgen.omniforms.formviewer.setHeight("Tab2", "385px");
				com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1655px");

				com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");

				com.newgen.omniforms.formviewer.setVisible("Quality_itemselect", true);
				com.newgen.omniforms.formviewer.setVisible("Label23", true);
				com.newgen.omniforms.formviewer.setVisible("Frame6", true);
				com.newgen.omniforms.formviewer.setVisible("Label42", true);
				com.newgen.omniforms.formviewer.setVisible("qualityremarks", true);
			}
			else if (itemTypeFlag == 'NULL' || itemTypeFlag == '') {
				com.newgen.omniforms.formviewer.setHeight("Frame1", "1655px");
				com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1655px");
				com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
				//com.newgen.omniforms.formviewer.setHeight("Tab2", "177px");

				com.newgen.omniforms.formviewer.setVisible("Btn_updateQuaratinedetails", false);
				com.newgen.omniforms.formviewer.setVisible("Quality_linenumber", false);
				com.newgen.omniforms.formviewer.setVisible("Label112", false);
				com.newgen.omniforms.formviewer.setVisible("Frame6", false);
				com.newgen.omniforms.formviewer.setVisible("Label23", false);
				com.newgen.omniforms.formviewer.setVisible("Quality_itemselect", false);
				com.newgen.omniforms.formviewer.setVisible("Label42", true);
				com.newgen.omniforms.formviewer.setVisible("qualityremarks", true);

				com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
				com.newgen.omniforms.formviewer.setTop("Label41", "37px");
				com.newgen.omniforms.formviewer.setTop("qualitystatus", "56px");
				com.newgen.omniforms.formviewer.setTop("Label42", "101px");
				com.newgen.omniforms.formviewer.setTop("qualityremarks", "121px");
			}
			break;

		case 'AXQualitySyncException':
			com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", false);

			com.newgen.omniforms.formviewer.setEnabled("Frame2", false);

			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, false); qualitystatus

			com.newgen.omniforms.formviewer.setVisible("Label41", false);
			com.newgen.omniforms.formviewer.setVisible("qualitystatus", false);
			com.newgen.omniforms.formviewer.setVisible("Label42", false);
			com.newgen.omniforms.formviewer.setVisible("qualityremarks", false);


			//	let itemTypeFlag = document.getElementById('itemtypeflag').value;
			//	 if (itemTypeFlag == 'None' || itemTypeFlag == 'Quarantine') {
			com.newgen.omniforms.formviewer.setHeight("Frame1", "1655px");
			com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
			//com.newgen.omniforms.formviewer.setHeight("Tab2", "385px");
			com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1655px");

			com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");

			com.newgen.omniforms.formviewer.setVisible("Quality_itemselect", true);
			com.newgen.omniforms.formviewer.setVisible("Label23", true);
			com.newgen.omniforms.formviewer.setVisible("Frame6", true);

			//	}
			break;

		case 'PurchaseUser':
			com.newgen.omniforms.formviewer.setEnabled("Frame2", false);
			com.newgen.omniforms.formviewer.setEnabled("btn_fetchpogedetails", true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, false);
			break;

		case 'AccountsMaker':
		case 'AccountsChecker':
			var multiplegrn = document.getElementById("multiplegrn").value;
			com.newgen.omniforms.formviewer.setVisible("Btn_View", true);
			com.newgen.omniforms.formviewer.setHeight("Frame1", "1650px");
			com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
			//com.newgen.omniforms.formviewer.setHeight("Tab2", "361px");
			com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1650px");
			com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
			com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", false);

			com.newgen.omniforms.formviewer.setEnabled("postingdate", true);
			com.newgen.omniforms.formviewer.setEnabled("duedate", true);
			com.newgen.omniforms.formviewer.setEnabled("holdamount", true);
			com.newgen.omniforms.formviewer.setEnabled("narrationremarks", true);

			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, true);
			console.log("multiplegrn :" + multiplegrn);
			if (multiplegrn == 'True') {
				com.newgen.omniforms.formviewer.setVisible("Frame11", true);
				com.newgen.omniforms.formviewer.setVisible("Frame9", false);
			}

			break;

	case 'End':
			var multiplegrn = document.getElementById("multiplegrn").value;
			com.newgen.omniforms.formviewer.setHeight("Frame1", "1650px");
			com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
			//com.newgen.omniforms.formviewer.setHeight("Tab2", "361px");
			com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1650px");
			com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
			com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", false);

			com.newgen.omniforms.formviewer.setEnabled("postingdate", false);
			com.newgen.omniforms.formviewer.setEnabled("duedate", false);
			com.newgen.omniforms.formviewer.setEnabled("holdamount", false);
			com.newgen.omniforms.formviewer.setEnabled("narrationremarks", false);
			com.newgen.omniforms.formviewer.setEnabled("Tab1", false);
			com.newgen.omniforms.formviewer.setEnabled("Tab2", false);
			
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, true);
			console.log("multiplegrn :" + multiplegrn);
			
			com.newgen.omniforms.formviewer.setEnabled("Frame2", false);
			com.newgen.omniforms.formviewer.setEnabled("Btn_Export_GateEntry", true);
			break;
			
		case 'AXAccountsSyncException':
			com.newgen.omniforms.formviewer.setHeight("Frame1", "1650px");
			com.newgen.omniforms.formviewer.setHeight("Tab1", "312px");
			//com.newgen.omniforms.formviewer.setHeight("Tab2", "361px");
			com.newgen.omniforms.formviewer.setHeight("FRM_SupplyPoInvoices", "1650px");
			com.newgen.omniforms.formviewer.setTop("Tab2", "1195px");
			com.newgen.omniforms.formviewer.setVisible("btn_fetchpogedetails", false);

			com.newgen.omniforms.formviewer.setEnabled("postingdate", true);
			com.newgen.omniforms.formviewer.setEnabled("duedate", true);
			com.newgen.omniforms.formviewer.setEnabled("holdamount", true);
			com.newgen.omniforms.formviewer.setEnabled("narrationremarks", true);

			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 0, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 1, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 2, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 3, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 4, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 6, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 7, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab1", 8, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 0, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 1, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 2, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 3, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 4, false);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 5, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 6, true);
			com.newgen.omniforms.formviewer.setSheetVisible("Tab2", 7, true);
			break;
	}
	return true;
}