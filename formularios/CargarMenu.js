let iTotalFacura=0,rma=Ar409();function GenFactPdf(){var doc=new jsPDF("l","pt","letter");var y=20;doc.setLineWidth(2),sNomPdf=(Ar507("ConfigFactura","nombrePdf")?Ar508("ConfigFactura","nombrePdf"):"Factura-Pdf");doc.text(200,y=+20,(Ar507("ConfigFactura","titulo")?Ar508("ConfigFactura","titulo"):"Factura"));doc.autoTable({html:"#tblFactura",startY:30,rowPageBreak:"auto",horizontalPageBreak:true,horizontalPageBreakRepeat:0,theme:"grid",headStyles:{fillColor:(Ar507("ConfigFactura","colorFondo")?Ar508("ConfigFactura","colorFondo"):"#800000"),textColor:(Ar507("ConfigFactura","colorLtra")?Ar508("ConfigFactura","colorLtra"):"#ffff00"),halign:"center",fontSize:(Ar507("ConfigFactura","TamLtr")?Number(Ar508("ConfigFactura","TamLtr")):12)},bodyStyles:{textColor:"#000000",fontSize:(Ar507("ConfigFactura","datTamLtr")?Number(Ar508("ConfigFactura","datTamLtr")):11)},alternateRowStyles:{fillColor:"#f4f6f6"},columnStyles:{0:{halign:"center",cellWidth:"auto"},1:{halign:"left",cellWidth:"auto"},2:{ halign:"center",cellWidth:"auto"},3:{ halign:"center",cellWidth:"auto"}}});doc.save(sNomPdf);}function GenFacturaPdf(){if(Ar506("cmdGenFactPdf")){document.getElementById("cmdGenFactPdf").onclick=function(){if(Ar507("ConfigFactura","genFacPdf")){if(confirm(Ar508("ConfigFactura","genFacPdf"))){GenFactPdf();}}else{GenFactPdf();}};}}function AgregarProducto(){if(Ar506("cmdAgProdFact")&&Ar506("iTotFac")&&Ar506("cmdGenFactPdf")){document.getElementById("cmdAgProdFact").onclick=function(){if(Ar507("ConfigFactura","aggProd")){if(confirm(Ar508("ConfigFactura","aggProd"))){AgProd();}}else{AgProd();}};}}function AgProd(){let s,t=tFact.content.cloneNode(true),iCanF=t.getElementById("iCanF"),iProF=t.getElementById("iProF"),iPreF=t.getElementById("iPreF"),iSubF=t.getElementById("iSubF"),iTotalFactura=document.getElementById("iTotFac");if(!isNaN(txtCantidad.value)&&!isNaN(txtPrecio.value)&&Ar37(txtProducto.value).length>0){iCanF.innerHTML=txtCantidad.value;iProF.innerHTML=txtProducto.value;iPreF.innerHTML=txtPrecio.value;s=parseFloat(txtCantidad.value)*parseFloat(txtPrecio.value);iTotalFacura+=s;txtCantidad.value="",txtPrecio.value="",txtProducto.value="";iTotFac.innerHTML=Ar34(iTotalFacura);iSubF.innerHTML=Ar34(s);list.appendChild(t);}}function Dat2Pdf_1(C){if(Ar506("Pdf_Tbl_1")&&Ar506("lblR1C1")&&Ar506("txtR"+C+"C2")){let i,sTbl="<table id=\"tblPdf1\">";for(i=1;i<=C;i++){sTbl+="<tr><td>"+document.getElementById("lblR"+i+"C1").innerHTML+"</td><td>"+document.getElementById("txtR"+i+"C2").value+"</td></tr>";}sTbl+="</table>";Ar201("Pdf_Tbl_1",sTbl);sTbl="";GenerarPdf1Reg();}}function Dat2Pdf(C){if(Ar506("Pdf_Tbl")&&Ar506("txtR1C1")&&Ar506("txtR"+C+"C2")){let i,sTbl="<table id=\"tblPdf1\">";for(i=1;i<=C;i++){sTbl+="<tr><td>"+document.getElementById("txtR"+i+"C1").value+"</td><td>"+document.getElementById("txtR"+i+"C2").value+"</td></tr>";}sTbl+="</table>";Ar201("Pdf_Tbl",sTbl);sTbl="";GenerarPdf1Reg();}}function TblSelPdf(A,B,C,D,E){return s="<br><div class=\"container\"><div class=\"row\"><div class=\"col\"><button class=\"btn btn-success\" onclick=\"if(confirm('"+A+"')){GenerarPdf();}\"><i class=\"bi bi-chevron-double-up\"> "+B+"</i></button></div><div class=\"col\"><b>&lt;-- "+C+" --&gt;</b></div><div class=\"col\"><button class=\"btn btn-success\" onclick=\"if(confirm('"+D+"')){GenerarPdf1Reg();}\">"+E+" <i class=\"bi bi-chevron-double-down\"></i></button></div></div></div><br>";}function CargarDataTable(){if(Ar506("tblPdf")){let dTable=document.querySelector("#tblPdf");let dataTable=new DataTable(dTable,{perPages:5,perPageSelect:[5,10,20,25,50,100,150,200,500,1000],labels:{placeholder:"Buscar...",perPage:"Ver {select} Registros por Pagina",noRows:"No se encontraron Registros con ese Criterio de Busqueda",info:"Mostrando {start} a {end} de {rows} Registros (pagina {page} de {pages} paginas)"}});}}function CargarJson(){if(Ar506("cmdDatJson")){document.getElementById("cmdDatJson").onclick=function(){CargarDatosJson();};}}function Exporta_Txt(){if(Ar506("cmdExportarTxt")){document.getElementById("cmdExportarTxt").onclick=function(){ExportarTxt();};}}function CargarXml(){if(Ar506("cmdDatXml")){document.getElementById("cmdDatXml").onclick=function(){CargarDatosXML();};}}function GenPdf(){if(Ar506("tblPdf")&&Ar506("cmdGenPdf")){document.getElementById("cmdGenPdf").onclick=function(){GenerarPdf();};}}function CargarGui(U,I){if(Ar506(I)){let X=new XMLHttpRequest();X.open("GET",((U+"?v=")+Math.random(99999999)),true);X.onreadystatechange=function(){if(X.readyState==4&&X.status==200){let Mnu=X.responseText;if(Mnu.length>0){Ar201(I,Mnu);}}};X.send(null);}}function CargaMnuFo(){if(typeof Eventos==='function'){Eventos();}GenPdf();CargarXml();CargarJson();AgregarProducto();GenFacturaPdf();Exporta_Txt();CargarGui("NavBar.htm","MnuJsNavBar");CargarGui("Footer.htm","FooterX");Ar201("bEditElimAct","Si los botones para editar y eliminar no funcionan ,te recomiendo que agregues un nuevo dato, al hacer esto se restablecen los eventos para los botones.");if(typeof CargarDatosJson==='function'){CargarDatosJson();}if(typeof CargarDatosXML==='function'){CargarDatosXML();}if(typeof CargarDatosTxt==='function'){CargarDatosTxt();}if(typeof TblHtmJs==='function'&&Ar506("TblHtmJs")){TblHtmJs();}CargarDataTable();}function PdfWhatsAppEnviado(){var doc=new jsPDF("l","pt","letter");var y=20;doc.setLineWidth(2);doc.text(200, y=+20, "WhatsApp Enviados");doc.autoTable({html:"#tblPdf",startY:30,rowPageBreak:"auto",horizontalPageBreak:true,horizontalPageBreakRepeat:0,theme:"grid",headStyles:{fillColor:"#008000",textColor:"#FFFFFF",halign:"center",fontSize:10},bodyStyles:{textColor:"#000000",fontSize:9},alternateRowStyles:{fillColor:"#f4f6f6"},columnStyles:{}});doc.save("WhatsApp_Enviados");}function p(c,Q,Z,O,N){var gk=new XMLHttpRequest(),d=document.getElementById(c);gk.open("GET",Q+"&camp="+Ar51(Z)+"&ord="+Ar51(O)+"&ver="+document.getElementById(N).value);gk.onreadystatechange=function(){if(gk.readyState==4 && gk.status==200){d.innerHTML=gk.responseText;CargarDataTable();}};gk.send(null);}function pag(U){p('dp',U,document.f.cC,document.f.cO,'R');}function LimpiarFormulario(){if(Ar506("cmdAceptar")){document.getElementById("cmdAceptar").disabled=true;}Ar86(document.forms[0]);}function MsgDatoGuardado(M,T){Ar201("m_err200",M);setTimeout(LimpiarMsgDatoGuardado,(T*1000));}function LimpiarMsgDatoGuardado(){Ar201("m_err200","");}function SelectHtmlEstadosPais(AA,RR,MM){let s="",i;if(MM.length>0){s+="<select name=\""+AA+"\" id=\""+AA+"\" lucas=\"m_err"+RR+"\" lucas1=\""+MM+"\" class=\"form-control\">\n";}else{s+="<select name=\""+AA+"\" id=\""+AA+"\" class=\"form-control\">\n";}for(i=0;i<aEdosMexico.length;i++){s+="<option value=\""+i+"\">"+aEdosMexico[i]+"</option>\n";}s+="</select>\n";return s;}function SelectHtmlEstadoCivil(AA,RR,MM){let s="",i;if(MM.length>0){s+="<select name=\""+AA+"\" id=\""+AA+"\" lucas=\"m_err"+RR+"\" lucas1=\""+MM+"\" class=\"form-control\">\n";}else{s+="<select name=\""+AA+"\" id=\""+AA+"\" class=\"form-control\">\n";}for(i=0;i<aEdoCiv.length;i++){s+="<option value=\""+i+"\">"+aEdoCiv[i]+"</option>\n";}s+="</select>\n";return s;}function SelectHtmlFormaPago(AA,RR,MM){let s="",i;if(MM.length>0){s+="<select name=\""+AA+"\" id=\""+AA+"\" lucas=\"m_err"+RR+"\" lucas1=\""+MM+"\" class=\"form-control\">\n";}else{s+="<select name=\""+AA+"\" id=\""+AA+"\" class=\"form-control\">\n";}for(i=0;i<aFormaPago.length;i++){s+="<option value=\""+i+"\">"+aFormaPago[i]+"</option>\n";}s+="</select>\n";return s;}function guardLocStorDB(){localStorage.setItem(LocStorDB,JSON.stringify(datLocStorDB));}function dibTblLocStor(){if(rma){guardLocStorDB();renTblLoSt();}}function elimRegLocStor(index){datLocStorDB.splice(index,1);dibTblLocStor();}function Accordion(X){if(X.length>0){let s="";for(let i=0;i<X.length;i++){s+="<div class=\"accordion-item\"><h2 class=\"accordion-header\" id=\"HeadAccordion"+(i+1)+"\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#ColAccordion"+(i+1)+"\" aria-expanded=\"false\" aria-controls=\"ColAccordion"+(i+1)+"\">"+X[i][0]+"</button></h2><div id=\"ColAccordion"+(i+1)+"\" class=\"accordion-collapse collapse \" aria-labelledby=\"HeadAccordion"+(i+1)+"\" data-bs-parent=\"#Accordion\"><div class=\"accordion-body\"><strong>"+X[i][1]+".</strong><br>"+X[i][2]+"</div></div></div>";Ar201("Accordion",s);}}}function FrmSumaCheckbox(A,R,M){let cmdAceptar=document.getElementById(A),chkAceptar = document.getElementById(R);document.getElementById(M).value="";chkAceptar.checked=false;chkAceptar.disabled=true;cmdAceptar.disabled=true;}