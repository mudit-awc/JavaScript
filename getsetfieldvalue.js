function getsetFieldValue(){
					console.log("inside proctype");
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
						alert("Enter the Value of PAN Number ");
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
					if(com.newgen.omniforms.formviewer.getNGValue("Text22")==""){
						alert("Enter the Value of Qty/Size ");
					}
					if(com.newgen.omniforms.formviewer.getNGValue("pannumber")==""){
						alert("Enter the Value of PAN Number ");
					}
					if(com.newgen.omniforms.formviewer.getNGValue("invoicenumber")==""){
						alert("Enter the Value of Invoice Number ");
					}
					if(com.newgen.omniforms.formviewer.getNGValue("invoicedate")==""){
						alert("Enter the Value of Invoice Date");
					}
					if(com.newgen.omniforms.formviewer.getNGValue("totaltaxableamount")==""){
						alert("Enter the Value of Total Taxable Amount ");
					}
					if(com.newgen.omniforms.formviewer.getNGValue("totalbillamount")==""){
						alert("Enter the Value of Total Bill Amount");
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
					break;
					
	
}