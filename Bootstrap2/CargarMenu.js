var iTotalFacura=0, //No Modificar
sConfAggProd="Agregar Producto a la Factura",
sGenFacPdf="Generar Factura PDF";
function GenFactPdf(){var doc=new jsPDF("l","pt","letter");var y=20;doc.setLineWidth(2);doc.text(200, y=+20,"Factura");doc.autoTable({html:"#tblFactura",startY:30,rowPageBreak:"auto",horizontalPageBreak:true,horizontalPageBreakRepeat:0,theme:"grid",headStyles:{fillColor:"#800000",textColor:"#ffff00",halign:"center",fontSize:10},bodyStyles:{textColor:"#000000",fontSize:9},alternateRowStyles:{fillColor:"#f4f6f6"},columnStyles:{0:{ halign:"center",cellWidth:"auto"},1:{ halign:"left",cellWidth:"auto"},2:{ halign:"center",cellWidth:"auto"},3:{ halign:"center",cellWidth:"auto"}}});doc.save("Factura-Pdf");}
function GenFacturaPdf(){if(Ar506("cmdGenFactPdf")){document.getElementById("cmdGenFactPdf").onclick=function(){if(confirm(sGenFacPdf)){GenFactPdf();}};}}
function AgregarProducto(){if(Ar506("cmdAgProdFact")&&Ar506("iTotFac")&&Ar506("cmdGenFactPdf")){document.getElementById("cmdAgProdFact").onclick=function(){if(confirm(sConfAggProd)){AgProd();}};}}
function AgProd(){let s,t=tFact.content.cloneNode(true),iCanF=t.getElementById("iCanF"),iProF=t.getElementById("iProF"),iPreF=t.getElementById("iPreF"),iSubF=t.getElementById("iSubF"),iTotalFactura=document.getElementById("iTotFac");if(!isNaN(txtCantidad.value)&&!isNaN(txtPrecio.value)&&Ar37(txtProducto.value).length>0){iCanF.innerHTML=txtCantidad.value;iProF.innerHTML=txtProducto.value;iPreF.innerHTML=txtPrecio.value;s=parseFloat(txtCantidad.value)*parseFloat(txtPrecio.value);iTotalFacura+=s;txtCantidad.value="",txtPrecio.value="",txtProducto.value="";iTotFac.innerHTML=Ar34(iTotalFacura);iSubF.innerHTML=Ar34(s);list.appendChild(t);}}
function Dat2Pdf_1(C){if(Ar506("Pdf_Tbl_1")&&Ar506("lblR1C1")&&Ar506("txtR"+C+"C2")){let i,sTbl="<table id=\"tblPdf1\">";for(i=1;i<=C;i++){sTbl+="<tr><td>"+document.getElementById("lblR"+i+"C1").innerHTML+"</td><td>"+document.getElementById("txtR"+i+"C2").value+"</td></tr>";}sTbl+="</table>";document.getElementById("Pdf_Tbl_1").innerHTML=sTbl;sTbl="";GenerarPdf1Reg();}}
function Dat2Pdf(C){if(Ar506("Pdf_Tbl")&&Ar506("txtR1C1")&&Ar506("txtR"+C+"C2")){let i,sTbl="<table id=\"tblPdf1\">";for(i=1;i<=C;i++){sTbl+="<tr><td>"+document.getElementById("txtR"+i+"C1").value+"</td><td>"+document.getElementById("txtR"+i+"C2").value+"</td></tr>";}sTbl+="</table>";document.getElementById("Pdf_Tbl").innerHTML=sTbl;sTbl="";GenerarPdf1Reg();}}
function TblSelPdf(A,B,C,D,E){return s="<br><div class=\"container\"><div class=\"row\"><div class=\"col\"><button class=\"btn btn-success\" onclick=\"if(confirm('"+A+"')){GenerarPdf();}\"><i class=\"bi bi-chevron-double-up\"> "+B+"</i></button></div><div class=\"col\"><b>&lt;-- "+C+" --&gt;</b></div><div class=\"col\"><button class=\"btn btn-success\" onclick=\"if(confirm('"+D+"')){GenerarPdf1Reg();}\">"+E+" <i class=\"bi bi-chevron-double-down\"></i></button></div></div></div><br>";}
function CargarDataTable(){if(Ar506("tblPdf")){let dTable=document.querySelector("#tblPdf");let dataTable=new DataTable(dTable,{perPages:5,perPageSelect:[5,10,20,25,50,100,150,200,500,1000],labels:{placeholder:"Buscar...",perPage:"Ver {select} Registros por Pagina",noRows:"No se encontraron Registros con ese Criterio de Busqueda",info:"Mostrando {start} a {end} de {rows} Registros (pagina {page} de {pages} paginas)"}});}}
function CargarJson(){if(Ar506("cmdDatJson")){document.getElementById("cmdDatJson").onclick=function(){CargarDatosJson();};}}
function CargarXml(){if(Ar506("cmdDatXml")){document.getElementById("cmdDatXml").onclick=function(){CargarDatosXML();};}}
function GenPdf(){if(Ar506("tblPdf")&&Ar506("cmdGenPdf")){document.getElementById("cmdGenPdf").onclick=function(){GenerarPdf();};}}
function CargarGui(U,I){if(Ar506(I)){let X=new XMLHttpRequest();X.open("GET",((U+"?v=")+Math.random(99999999)),true);X.onreadystatechange=function(){if(X.readyState==4&&X.status==200){let Mnu=X.responseText;if(Mnu.length>0){document.getElementById(I).innerHTML=Mnu;}}};X.send(null);}}
function CargaMnuFo(){
 GenPdf();CargarXml();CargarJson();AgregarProducto();GenFacturaPdf();
 CargarGui("NavBar.htm","MnuJsNavBar");
 CargarGui("Footer.htm","FooterX");
 if(typeof CargarDatosJson==='function'){CargarDatosJson();}
 if(typeof CargarDatosXML==='function'){CargarDatosXML();}
 CargarDataTable();
}