function FrmLimpiar(f){let i,r,z;for(i=0;i<f.elements.length;i++){if(f.elements[i].type !== "button"){if(f.elements[i].type==="checkbox"){f.elements[i].checked=false;}else if(f.elements[i].type==="radio"){r=document.getElementsByName(f.elements[i].name);for(z=0;z<r.length;z++){r[z].checked=false;}}else if(f.elements[i].type==="select-one"||f.elements[i].type==="select-multiple"){f.elements[i].options[0].selected=true;}else{f.elements[i].value="";}}}}
function TblSelPdf(A,B,C,D,E){return s="<br><div class=\"container\"><div class=\"row\"><div class=\"col\"><button class=\"btn btn-success\" onclick=\"if(confirm('"+A+"')){GenerarPdf();}\"><i class=\"bi bi-chevron-double-up\"> "+B+"</i></button></div><div class=\"col\"><b>&lt;-- "+C+" --&gt;</b></div><div class=\"col\"><button class=\"btn btn-success\" onclick=\"if(confirm('"+D+"')){GenerarPdf1Reg();}\">"+E+" <i class=\"bi bi-chevron-double-down\"></i></button></div></div></div><br>";}
function Copiar(){let a,i;for(let a=0;a<Copiar.arguments.length;a++){i=("sDato"+(a+1));if(document.getElementById(i)!==null){document.getElementById(i).innerHTML=TdPdfJs(Copiar.arguments[a]);}}}
function TrPdfJs(R){return R.replace(/'/gi,'\\\'').replace(/"/gi,'\\\'\\\'');}function TdPdfJs(R){return R.replace(/"/gi,'\"').replace(/'/gi,'\'');}
function CargarDataTable(){if(document.getElementById("tblPdf")!==null){let dTable=document.querySelector("#tblPdf");let dataTable=new DataTable(dTable,{perPages:5,perPageSelect:[5,10,20,25,50,100,150,200,500,1000],labels:{placeholder:"Buscar...",perPage:"Ver {select} Registros por Pagina",noRows:"No se encontraron Registros con ese Criterio de Busqueda",info:"Mostrando {start} a {end} de {rows} Registros (pagina {page} de {pages} paginas)"}});}}
function CargarJson(){if(document.getElementById("cmdDatJson")!==null){document.getElementById("cmdDatJson").onclick=function(){CargarDatosJson();};}}
function CargarXml(){if(document.getElementById("cmdDatXml")!==null){document.getElementById("cmdDatXml").onclick=function(){CargarDatosXML();};}}
function GenPdf(){if(document.getElementById("tblPdf")!==null&&document.getElementById("cmdGenPdf")!==null){document.getElementById("cmdGenPdf").onclick=function(){GenerarPdf();};}}
function CargarGui(U,I){if(document.getElementById(I)!==null){let X=new XMLHttpRequest();X.open("GET",((U+"?v=")+Math.random(99999999)),true);X.onreadystatechange=function(){if(X.readyState==4&&X.status==200){let Mnu=X.responseText;if(Mnu.length>0){document.getElementById(I).innerHTML=Mnu;}}};X.send(null);}}
function CargaMnuFo(){
 GenPdf(); CargarXml(); CargarJson();
 CargarGui("NavBar.htm","MnuJsNavBar");
 CargarGui("Footer.htm","FooterX");
 if(typeof CargarDatosJson==='function'){CargarDatosJson();}
 if(typeof CargarDatosXML==='function'){CargarDatosXML();}
}