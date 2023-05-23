var iNumCtr=200;

function CboCtrlInfo(id,iCt){
 let iSel = document.getElementById(id).value,
 lbl = document.getElementById(("tLblCtr"+iCt)),
 obl = document.getElementById(("tDatReq"+iCt)),
 sMErr= document.getElementById(("tMsgErr"+iCt)),
 iMin = document.getElementById(("txtMin"+iCt)),
 iMax = document.getElementById(("txtMax"+iCt));
 
 ////// Limpiar ////////
 lbl.value="";
 obl.value="";
 sMErr.value="";
 iMin.value="";
 iMax.value="";
 //////////////////////////
 Ar201("info","");
 alert(iSel);
 switch(Number(iSel)){

   case 1:{
    Ar201("info","Direccion de EMail Requerida");
    lbl.value="Email";
    obl.value="Dato Obligatorio";
    sMErr.value="Ingresa una Direccion de EMail Correcta";
   }break;
   case 2:{
    Ar201("info","Direccion de EMail Requerida");
    lbl.value="Email";
    obl.value="";
    sMErr.value="Ingresa una Direccion de EMail Correcta";
   }break;
   case 3: case 4:{ 
    lbl.value="Comentario";
    obl.value="Dato Obligatorio";
    sMErr.value="Minimo de Caracteres 1"; 
    iMin.value="1";  
   }break;
   case 5: case 6:{ 
    lbl.value="Comentario";
    obl.value="";
    sMErr.value=""; 
    iMin.value="";  
   }break;
   case 7:{
    lbl.value="C.P";
    obl.value="Dato Obligatorio";
    sMErr.value="El Codigo Postal son 5 Numeros"; 
    iMin.value="5";  
   }break;
   case 8:{
    lbl.value="C.P";
    sMErr.value="El Codigo Postal son 5 Numeros"; 
    iMin.value="5";  
   }break;
   case 9:{
    Ar201("info","Direccion de EMail Requerida");
    lbl.value="Email";
    obl.value="Dato Obligatorio";
    sMErr.value="Ingresa el mismo EMail 2 Veces para que sea Correcto";
   }break;
   case 10:{
    Ar201("info","Direccion de EMail Requerida");
    lbl.value="Email";
    sMErr.value="Ingresa el mismo EMail 2 Veces para que sea Correcto";
   }break;
   case 19:{
    lbl.value="Fecha";
    obl.value="Obligatoria";
    sMErr.value="Fecha Incorrecta"; 
    iMin.value="1975";   
    iMax.value="2020"; 
   }break;
   case 20:{
    lbl.value="Fecha";
    
    sMErr.value="Fecha Incorrecta"; 
    iMin.value="1975";   
    iMax.value="2020"; 
   
   }break;
   case 21:{
    lbl.value="Select HTM";
    obl.value="Dato Obligatorio";
    iMin.value="1";   
    iMax.value="20"; 
   }break;
   case 22:{
    lbl.value="Select HTM";
    iMin.value="1";   
    iMax.value="20"; 
   
   }break;
   case 24:{
    lbl.value="Radio HTM";
    iMin.value="1";   
    iMax.value="5"; 
       
   }break;

   case 25:{
    lbl.value="Select PHP";
    obl.value="Dato Obligatorio";
    iMin.value="id_ciudad";   
    iMax.value="ciudad"; 
   }break;
   case 26:{
    lbl.value="Select PHP";
    iMin.value="id_ciudad";   
    iMax.value="ciudad"; 
   }break;
   case 27:{
    lbl.value="Select PHP MySql";
    obl.value="Dato Obligatorio";
    iMin.value="id_ciudad";   
    iMax.value="ciudad"; 
   }break;
   case 28:{
    lbl.value="Select PHP MySql";
    iMin.value="id_ciudad";   
    iMax.value="ciudad"; 
   }break;
   case 29:{
    lbl.value="Select JSTL";
    obl.value="Dato Obligatorio";
    iMin.value="id_ciudad";   
    iMax.value="ciudad"; 
   }break;
   case 30:{
    lbl.value="Select JSTL";
    iMin.value="id_ciudad";   
    iMax.value="ciudad"; 
   }break;


 }
}



function CboCtrol(i,r){
 let s="<select name=\"cboTipoCtrol"+i+"\" id=\"cboTipoCtrol"+i+"\" onchange=\"CboCtrlInfo('cboTipoCtrol"+i+"',"+i+")\">";
 s+="<option value=\"0\"></option>";
 if(r===1){
   s+="<option value=\"1\">Email Requerido</option>";
   s+="<option value=\"3\">Comentario Requerido</option>";   
   s+="<option value=\"4\">Comentario Requerido Estricto</option>";   
   s+="<option value=\"7\">Digitos Exactos Requerido</option>";   
   s+="<option value=\"9\">Confirmar Email Requerido</option>";
   s+="<option value=\"11\">Rango Numerico Entero Requerido</option>";
   s+="<option value=\"13\">Rango Numerico Decimal Requerido</option>";
   s+="<option value=\"15\">Numero Entero Requerido</option>";   
   s+="<option value=\"17\">Numero Decimal Requerido</option>"; 
   s+="<option value=\"19\">Select Fecha Requerido</option>";   
   s+="<option value=\"21\">Select HTML Requerido</option>"; 
   s+="<option value=\"25\">Select Php Pdo Requerido</option>";
   s+="<option value=\"27\">Select Php MySqli Requerido</option>";
   s+="<option value=\"29\">Select JSTL Requerido</option>"; 
      
 }else{
   s+="<option value=\"2\">Email</option>";
   s+="<option value=\"5\">Comentario</option>";   
   s+="<option value=\"6\">Comentario Estricto</option>";   
   s+="<option value=\"8\">Digitos Exactos</option>";        
   s+="<option value=\"10\">Confirmar Email</option>";  
   s+="<option value=\"12\">Rango Numerico Entero</option>";  
   s+="<option value=\"14\">Rango Numerico Decimal </option>";  
   s+="<option value=\"16\">Numero Entero</option>";  
   s+="<option value=\"18\">Numero Decimal</option>";  
   s+="<option value=\"20\">Select Fecha</option>";
   s+="<option value=\"26\">Select Php Pdo</option>";     
   s+="<option value=\"28\">Select Php MySqli</option>";  
   s+="<option value=\"30\">Select JSTL</option>";   
 
 }
 
 s+="<option value=\"22\">Select HTML</option>";  
 s+="<option value=\"23\">Checkbox HTML</option>";
 s+="<option value=\"24\">Radio HTML</option>";  
 
 
 s+="<option value=\"31\"></option>";  
 s+="<option value=\"32\"></option>";
 s+="<option value=\"33\"></option>";  
 
 
 
 s+="</select>";
 return s;
}
function Generar(){
 let i,sFrmIni="",sFrmFin="",s="",sNCr="";
 let sMaxL="",sNomCtrol="",sLblCtrol="",sMsgErr="",sMsgReq="",iMinimoChrs="",iMaximoChrs="";
 for(i=1;i<=iNumCtr;i++){
   sNCr="cboTipoCtrol"+i;
   if(document.getElementById(sNCr)!==null){
     sMaxL=document.getElementById(("tMxL"+i)).value;
     sNomCtrol=document.getElementById(("tNomCtr"+i)).value;
     sLblCtrol=document.getElementById(("tLblCtr"+i)).value;
     sMsgErr=document.getElementById(("tMsgErr"+i)).value;
     sMsgReq=document.getElementById(("tDatReq"+i)).value;
     iMinimoChrs=document.getElementById(("txtMin"+i)).value;
     iMaximoChrs=document.getElementById(("txtMax"+i)).value;
     switch(Number(document.getElementById(sNCr).value)){
       case 1:{s+=Email(1,i,sMaxL,sNomCtrol,(sLblCtrol.length === 0 ? "Email" : sLblCtrol),(sMsgErr.length===0 ? "Ingresa una Direccion de E-Mail Correcta" : sMsgErr),(sMsgReq.length===0 ? "dato Obligatorio" : sMsgReq));}break;
       case 2:{s+=Email(0,i,sMaxL,sNomCtrol,(sLblCtrol.length === 0 ? "Email" : sLblCtrol),(sMsgErr.length===0 ? "Ingresa una Direccion de E-Mail Correcta" : sMsgErr),(sMsgReq.length===0 ? "dato Obligatorio" : sMsgReq));}break;
       case 3:{s+=Comentario(1,i,sMaxL,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,1,iMinimoChrs);}break;
       case 4:{s+=Comentario(1,i,sMaxL,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,3,iMinimoChrs);}break;
       case 5:{s+=Comentario(0,i,sMaxL,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,1,iMinimoChrs);}break;
       case 6:{s+=Comentario(0,i,sMaxL,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,3,iMinimoChrs);}break;
       case 7:{s+=DigitosExactos(1,i,sMaxL,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,iMinimoChrs);}break;       
       case 8:{s+=DigitosExactos(0,i,sMaxL,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,iMinimoChrs);}break;
       case 9:{s+=ConfirmarEmail(1,i,sMaxL,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq);}break;
       case 10:{s+=ConfirmarEmail(0,i,sMaxL,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq);}break;
       case 11:{s+=RangoNumerico(1,i,iMinimoChrs,iMaximoChrs,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,1);}break;
       case 12:{s+=RangoNumerico(0,i,iMinimoChrs,iMaximoChrs,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,1);;}break;
       case 13:{s+=RangoNumerico(1,i,iMinimoChrs,iMaximoChrs,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,2);;}break;       
       case 14:{s+=RangoNumerico(0,i,iMinimoChrs,iMaximoChrs,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,2);;}break;
       case 15:{s+=Numeros(1,i,sNomCtrol,sLblCtrol,sMsgReq,20);}break;
       case 16:{s+=Numeros(0,i,sNomCtrol,sLblCtrol,sMsgReq,20);}break;
       case 17:{s+=Numeros(1,i,sNomCtrol,sLblCtrol,sMsgReq,21);}break;
       case 18:{s+=Numeros(0,i,sNomCtrol,sLblCtrol,sMsgReq,21);}break;
       case 19:{s+=FechaSel(1,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgErr,sMsgReq);}break;
       case 20:{s+=FechaSel(0,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgErr,sMsgReq);;}break;
       case 21:{s+=SelectHtm(1,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgReq);}break;
       case 22:{s+=SelectHtm(0,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgReq);}break;
       case 23:{s+=Checkbox(i,sNomCtrol,sLblCtrol);}break;
       case 24:{s+=Radio(sNomCtrol,sLblCtrol,iMinimoChrs,iMaximoChrs);}break;

       case 25:{s+=SelectPhpPdo(1,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgReq);}break;
       case 26:{s+=SelectPhpPdo(0,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgReq);}break;
       case 27:{s+=SelectPhpMySqli(1,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgReq);}break;
       case 28:{s+=SelectPhpMySqli(0,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgReq);}break;
       case 29:{s+=SelectJstl(1,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgReq);}break;
       case 30:{s+=SelectJstl(0,i,sNomCtrol,iMinimoChrs,iMaximoChrs,sLblCtrol,sMsgReq);}break;





       
     }
   }
 }
 sFrmIni="    <"+"!-- Inicio Formulario --"+">\n    <div class=\"container\">\n      <h3><span id=\"InfoSeguridad\" data-seg-prot1=\"\" data-seg-prot2=\"\"></span></h3>\n      <form autocomplete=\"off\" name=\"frm\" id=\"frm\" reptile=\"0.23.0.6\" method=\"post\" action=\"\">\n";
 sFrmFin+="        <div class=\"row\">\n";
 sFrmFin+="          <div class=\"col\">\n";
 sFrmFin+="            <button id =\"button\" class=\"col-12 btn btn-success\">\n";
 sFrmFin+="              <span>Enviar </span><i id=\"icono\" class=\"bi bi-send-check-fill\"></i>\n";
 sFrmFin+="            </button>\n";
 sFrmFin+="          </div>\n";
 sFrmFin+="          <div class=\"col\">\n";
 sFrmFin+="           <input type=\"button\" id=\"cmdBorrar\" class=\"col-12 btn btn-danger\" value=\"Limpiar\" data-chingon21=\"0\" data-chingon22=\"Deseas Borrar los datos ingresados.\"  data-ar-cls-momov=\"col-12 btn btn-danger\" data-ar-cls-moout=\"col-12 btn btn-danger\" />\n";
 sFrmFin+="          </div>\n";
 sFrmFin+="        </div>\n";
 sFrmFin+="        <div class=\"container\" align=\"center\">\n";
 sFrmFin+="          <input class=\"form-check-input\" type=\"checkbox\" name=\"chkBorrar\" id=\"chkBorrar\" data-kung-lao=\"cmdBorrar\" data-kung-lao-1=\"0\" />\n";
 sFrmFin+="          <label class=\"form-check-label\" for=\"chkBorrar\"><h3>Activame para poder Limpiar el Formulario</h3></label>\n";
 sFrmFin+="        </div>\n";
 sFrmFin+="      </form>\n    </div>\n";
 sFrmFin+="    <"+"!-- Fin Formulario --"+">\n";
 document.getElementById("txtCodigo").value=sFrmIni+s+sFrmFin;
 Ar460("txtCodigo");
 s="";
}

function SelectJstl(iRequerido,iNumCtrol,sNomCtrol,iValIni,iValFin,sLblCtrol,sMsgReq){
 let s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 s+="            <label for=\""+sNomCtrol+"\"><i class=\"bi bi-123\"></i> Select PHP Mysql</label>\n";  
 s+="          </div>\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 if(iRequerido===1){
    s+="            <select name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" lucas=\"m_err"+iNumCtrol+"\" lucas1=\""+sMsgReq+"\">\n";   
 } else {
    s+="            <select name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\">\n";   
 }

 s+="              <option value=\"\"></option>\n";
 s+="                <c:choose>\n";
 s+="                  <c:when test=\"${XXXXXXXX.rowCount != 0}\">\n";  
 s+="                    <c:forEach var=\"aDatos_"+sNomCtrol+"\" items=\"${XXXXXXXX.rows}\">\n";
 s+="                       <option value=\"${aDatos_"+sNomCtrol+"."+iValIni+"}\">${aDatos_"+sNomCtrol+"."+iValFin+"}</option>\n";
 s+="                    </c:forEach>\n";  
 s+="                  </c:when>\n";
 s+="                </c:choose>\n";
 s+="            </select>\n";  
 if(iRequerido===1){
    s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\">"+sMsgReq+"</h3>\n"; 
 } 

 s+="          </div>\n";
 s+="        </div>\n";  
 
 return s;
}

function SelectPhpMySqli(iRequerido,iNumCtrol,sNomCtrol,iValIni,iValFin,sLblCtrol,sMsgReq){
 let s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n"; 
 s+="            <label for=\""+sNomCtrol+"\"><i class=\"bi bi-123\"></i> Select PHP Mysql</label>\n";
 s+="          </div>\n"; 
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 if(iRequerido===1){
   s+="            <select name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" lucas=\"m_err"+iNumCtrol+"\" lucas1=\""+sMsgReq+"\">\n";  
 }else{
   s+="            <select name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\">\n";   
 } 

 s+="              <option value=\"\"></option>\n";
 s+="              <?php if($result = $mysqli->query($sSQL)) {\n"; 
 s+="                if($result->num_rows > 0){\n";
 s+="                   while( $reg = $result->fetch_assoc() ) { ?>\n"; 
 s+="                     <option value=\"<?php echo $reg[\""+iValIni+"\"]; ?>\"><?php echo $reg[\""+iValFin+"\"];?></option>\n";
 s+="              <?php }\n";
 s+="                }\n"; 
 s+="              }\n";
 s+="              ?>\n"; 
 
 s+="            </select>\n"; 
 if(iRequerido===1){
   s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\">"+sMsgReq+"</h3>\n";
 }
 s+="          </div>\n"; 
 s+="        </div>\n";  
 return s;
}

function SelectPhpPdo(iRequerido,iNumCtrol,sNomCtrol,iValIni,iValFin,sLblCtrol,sMsgReq){
 let s="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 s+="            <label for=\""+sNomCtrol+"\"><i class=\"bi bi-123\"></i> Select PHP PDO</label>\n";
 s+="          </div>\n";  
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 if(iRequerido===1){
   s+="            <select name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" lucas=\"m_err"+iNumCtrol+"\" lucas1=\""+sMsgReq+"\">\n"; 
 } else {
   s+="            <select name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" lucas=\"m_err"+iNumCtrol+"\" lucas1=\""+sMsgReq+"\">\n"; 
 }

 s+="              <option value=\"\"></option>\n";  
 s+="              <?php if(count($aDatos_"+sNomCtrol+")>0){ foreach($aDatos_"+sNomCtrol+" as $reg): ?>\n";
 s+="                <option value=\"<?php echo $reg[\""+iValIni+"\"]; ?>\"><?php echo $reg[\""+iValFin+"\"];?></option>\n";
 s+="              <?php endforeach; }  ?>\n";  
 s+="            </select>\n";
 if(iRequerido===1){
   s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\">"+sMsgReq+"</h3>\n"; 
 } 

 s+="          </div>\n";  
 s+="        </div>\n";
 return s;
}




function Radio(sNomCtrol,sLblCtrol,iValIni,iValFin){
 let i,s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 s+="             "+sLblCtrol+"\n";  
 s+="          </div>\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 for(i=iValIni;i<=iValFin;i++){
   s+="            <div class=\"form-check\">\n";  
   s+="              <input class=\"form-check-input\" type=\"radio\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"_"+i+"\" value=\""+i+"\">\n";
   s+="              <label class=\"form-check-label\" for=\""+sNomCtrol+"_"+i+"\">"+sLblCtrol+"  "+i+"</label>\n";
   s+="            </div>\n"; 
 }
 s+="          </div>\n";
 s+="        </div>\n";
 return s;
}



function Checkbox(iNumCtrol,sNomCtrol,sLblCtrol){
 let s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 s+="            <label for=\""+sNomCtrol+"\">"+sLblCtrol+"</label>\n";
 s+="          </div>\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 s+="           <input class=\"form-check-input\" type=\"checkbox\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" />\n";
 s+="          </div>\n";
 s+="        </div>\n";
 
 return s;
}
function SelectHtm(iRequerido,iNumCtrol,sNomCtrol,iValIni,iValFin,sLblCtrol,sMsgReq){
 let x,s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 s+="            <label for=\""+sNomCtrol+"\"><i class=\"bi bi-123\"></i> "+sLblCtrol+"</label>\n";
 s+="          </div>\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 if(iRequerido===1){
   s+="            <select name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" lucas=\"m_err"+iNumCtrol+"\" lucas1=\""+sMsgReq+"\" class=\"form-control\">\n"; 
 }else{
   s+="            <select name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\">\n"; 
 }
 s+="             <option value=\"0\"></option>\n";
 for(x=iValIni;x<=iValFin;x++){
    s+="             <option value=\""+x+"\">Opcion "+x+"</option>\n";
 }

 s+="            </select>\n";
 if(iRequerido===1){
    s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\">"+sMsgReq+"</h3>\n";
 }else{
    s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\"></h3>\n";
 }
 s+="          </div>\n";
 s+="        </div>\n";
 return s;
}
function FechaSel(iRequerido,iNumCtrol,sNomCtrol,iValIni,iValFin,sLblCtrol,sMsgErr,sMsgReq){
 let s="";
 s+="        <div class=\"row\">\n";  
 s+="          <div class=\"col-lg-3 col-md-6 col-xs-12\">\n";
 s+="           <label for=\"cbo"+sNomCtrol+"_Dia\"><i class=\"bi bi-calendar-month-fill\"></i> "+sLblCtrol+"</label>\n";
 s+="           <input type=\"hidden\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" maxlength=\"10\" readonly />\n";
 s+="          </div>\n";
 s+="          <div class=\"col-lg-3 col-md-6 col-xs-12\" id=\"i_"+sNomCtrol+"Dia\"></div>\n";
 s+="          <div class=\"col-lg-3 col-md-6 col-xs-12\" id=\"i_"+sNomCtrol+"Mes\"></div>\n";
 s+="          <div class=\"col-lg-3 col-md-6 col-xs-12\" id=\"i_"+sNomCtrol+"Anio\"></div>\n";
 if(iRequerido===1){
   s+="        </div><span duke=\""+sNomCtrol+"\" duke1=\"form-control\" duke2=\""+sMsgErr+"\" duke3=\""+sMsgReq+"\" duke4=\""+iValIni+"\" duke5=\""+iValFin+"\" duke6=\"A&ntilde;o Selecciona ...\" duke7=\"Mes Selecciona ...\" duke8=\"Dia Selecciona ...\" duke9=\"m_err"+iNumCtrol+"\"></span>\n";
 }else{
   s+="        </div><span duke=\""+sNomCtrol+"\" duke1=\"form-control\" duke2=\""+sMsgErr+"\" duke4=\""+iValIni+"\" duke5=\""+iValFin+"\" duke6=\"A&ntilde;o Selecciona ...\" duke7=\"Mes Selecciona ...\" duke8=\"Dia Selecciona ...\" duke9=\"m_err"+iNumCtrol+"\"></span>\n"; 
 }
 s+="        <h3><span id=\"m_err"+iNumCtrol+"\"class=\"text-danger\"></span></h3>\n";
 return s;
}
function Numeros(iRequerido,iNumCtrol,sNomCtrol,sLblCtrol,sMsgReq,iTipoNum){
 let s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n"; 
 s+="            <label for=\""+sNomCtrol+"\"><i class=\"bi bi-123\"></i> "+sLblCtrol+"</label>\n";
 s+="          </div>\n"; 
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 if(iRequerido===1){
    s+="            <input type=\"text\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" placeholder=\""+sLblCtrol+"\" data-Intvan-1=\""+iTipoNum+"\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+iNumCtrol+"\" data-Intvan-6=\"1\" data-Intvan-7=\""+sMsgReq+"\" required />\n";  
 }else{
    s+="            <input type=\"text\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" placeholder=\""+sLblCtrol+"\" data-Intvan-1=\""+iTipoNum+"\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+iNumCtrol+"\" data-Intvan-6=\"0\" />\n";   
 }

 s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\"></h3>\n";
 s+="          </div>\n"; 
 s+="        </div>\n";
 return s;
}
function RangoNumerico(iRequerido,iNumCtrol,iValIni,iValFin,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,iTipoNum){
 let s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 s+="            <label for=\""+sNomCtrol+"\"><i class=\"bi bi-123\"></i> "+sLblCtrol+"</label>\n";
 s+="          </div>\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 if(iRequerido===1){
   s+="            <input type=\"text\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" placeholder=\""+sLblCtrol+"\" data-chingon91=\""+iValIni+"\" data-chingon92=\""+iValFin+"\" data-chingon93=\"m_err"+iNumCtrol+"\" data-chingon94=\""+sMsgErr+"\" data-chingon95=\""+sMsgReq+"\" data-chingon96=\""+iTipoNum+"\" data-chingon-f=\"form-control txtFoc\" data-chingon-b=\"form-control txtBlu\" required />\n"; 
 }else{
   s+="            <input type=\"text\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" placeholder=\""+sLblCtrol+"\" data-chingon91=\""+iValIni+"\" data-chingon92=\""+iValFin+"\" data-chingon93=\"m_err"+iNumCtrol+"\" data-chingon94=\""+sMsgErr+"\" data-chingon96=\""+iTipoNum+"\" data-chingon-f=\"form-control txtFoc\" data-chingon-b=\"form-control txtBlu\" />\n";  
 }

 s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\"></h3>\n";
 s+="          </div>\n";
 s+="        </div>\n";
 return s;
}
function ConfirmarEmail(iRequerido,iNumCtrol,iMaxLen,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq){
 let s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-4 col-md-6 col-xs-12\">\n";
 s+="             <label for=\""+sNomCtrol+"\"><i class=\"bi bi-envelope-fill\"></i> "+sLblCtrol+"</label>\n";  
 s+="          </div>\n";
 s+="          <div class=\"col-lg-4 col-md-6 col-xs-12\">\n";
 if(iRequerido===1){
    s+="            <input class=\"form-control\" type=\"text\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" maxlength=\""+iMaxLen+"\" placeholder=\""+sLblCtrol+"\" required />\n"; 
 } else {
    s+="            <input class=\"form-control\" type=\"text\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" maxlength=\""+iMaxLen+"\" placeholder=\""+sLblCtrol+"\" />\n";
 }
 s+="          </div>\n";
 s+="          <div class=\"col-lg-4 col-md-6 col-xs-12\">\n";
 if(iRequerido===1){
    s+="            <input class=\"form-control\" type=\"text\" name=\""+sNomCtrol+"Conf\" id=\""+sNomCtrol+"Conf\" maxlength=\""+iMaxLen+"\" placeholder=\""+sLblCtrol+"\" required />\n";   
 } else {
    s+="            <input class=\"form-control\" type=\"text\" name=\""+sNomCtrol+"Conf\" id=\""+sNomCtrol+"Conf\" maxlength=\""+iMaxLen+"\" placeholder=\""+sLblCtrol+"\"/>\n";    
 }
 s+="          </div>\n";
 s+="        </div>\n";
 if(iRequerido===1){
   s+="        <h3><span id=\"m_err"+iNumCtrol+"\" data-chingon01=\""+sNomCtrol+"\" data-chingon02=\""+sNomCtrol+"Conf\" data-chingon03=\""+sMsgErr+"\" data-obl=\""+sMsgReq+"\" data-chingon-f=\"form-control\" data-chingon-b=\"form-control\" class=\"text-danger\"></span></h3>\n";
 }else{
   s+="        <h3><span id=\"m_err"+iNumCtrol+"\" data-chingon01=\""+sNomCtrol+"\" data-chingon02=\""+sNomCtrol+"Conf\" data-chingon03=\""+sMsgErr+"\" data-chingon-f=\"form-control\" data-chingon-b=\"form-control\" class=\"text-danger\"></span></h3>\n";
 }
 return s;
}
function DigitosExactos(iRequerido,iNumCtrol,iMaxLen,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,iMinimoChrs){
 let s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 s+="            <label for=\""+sNomCtrol+"\"><i class=\"bi bi-123\"></i> "+sLblCtrol+"</label>\n";
 s+="          </div>\n";
 s+="          <div class=\"col-lg-6 col-md-6 col-xs-12\">\n";
 if(iRequerido===1){
   s+="           <input type=\"text\" name=\"txtCodigoPostalObliga\" id=\"txtCodigoPostalObliga\" maxlength=\""+iMinimoChrs+"\" size=\""+iMinimoChrs+"\" class=\"form-control bi bi-house-door-fill\" placeholder=\""+sLblCtrol+"\" data-terminator-1=\"m_err"+iNumCtrol+"\" data-terminator-2=\""+sMsgErr+"\" data-terminator-3=\""+sMsgReq+"\" data-chingon-f=\"form-control bi bi-house-door-fill txtFoc\" data-chingon-b=\"form-control bi bi-house-door-fill\" required />\n"; 
 } else {
   s+="            <input type=\"text\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" maxlength=\""+iMinimoChrs+"\" size=\""+iMinimoChrs+"\" placeholder=\""+sLblCtrol+"\" class=\"form-control bi bi-house-door-fill\" data-terminator-1=\"m_err"+iNumCtrol+"\" data-terminator-2=\""+sMsgErr+"\" data-chingon-f=\"form-control bi bi-house-door-fill txtFoc\" data-chingon-b=\"form-control bi bi-house-door-fill\" />\n";
 } 
 s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\"></h3>\n";
 s+="          </div>\n";
 s+="        </div>\n";
 return s; 
}


function Comentario(iRequerido,iNumCtrol,iMaxLen,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq,iEstricto,iMinimoChrs){
 let s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-xs-12\">\n";
 s+="            <label for=\""+sNomCtrol+"\"> <i class=\"bi bi-chat-right-dots-fill\"></i> "+sLblCtrol+"</label>\n";
 if(iRequerido===1){
    s+="            <textarea class=\"form-control\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" maxlength=\""+iMaxLen+"\" placeholder=\""+sLblCtrol+"\" data-kenshi=\""+iEstricto+"\" data-kenshi-1=\"1\" data-kenshi-2=\"m_err"+iNumCtrol+"\" data-kenshi-3=\""+sMsgReq+"\" data-kenshi-4=\""+iMinimoChrs+"\" data-kenshi-5=\""+sMsgErr+"\" data-chingon-f=\"form-control txtFoc\" data-chingon-b=\"form-control\" required ></textarea>\n";
 } else {
   s+="            <textarea class=\"form-control\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" maxlength=\""+iMaxLen+"\" placeholder=\""+sLblCtrol+"\" data-kenshi=\""+iEstricto+"\" data-kenshi-1=\"1\" data-kenshi-2=\"m_err"+iNumCtrol+"\" data-chingon-f=\"form-control txtFoc\" data-chingon-b=\"form-control\"></textarea>\n";
 }
 s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\"></h3>\n";
 s+="          </div>\n";
 s+="        </div>\n";
 return s;
}
function Email(iRequerido,iNumCtrol,iMaxLen,sNomCtrol,sLblCtrol,sMsgErr,sMsgReq){
 let s="";
 s+="        <div class=\"row\">\n";
 s+="          <div class=\"col-xs-12\">\n";
 s+="            <label for=\""+sNomCtrol+"\"><i class=\"bi bi-envelope-fill\"></i> "+sLblCtrol+"</label>\n";
 if(iRequerido===1){
   s+="            <input type=\"email\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" maxlength=\""+iMaxLen+"\" placeholder=\""+sLblCtrol+"\" data-kitana=\""+sMsgErr+"\" data-kitana-i=\"z_ree"+iNumCtrol+"\" data-kitana-o=\""+sMsgReq+"\" data-chingon-f=\"form-control txtFoc\" data-chingon-b=\"form-control\" required />\n";  
 }else{
   s+="            <input type=\"email\" name=\""+sNomCtrol+"\" id=\""+sNomCtrol+"\" class=\"form-control\" maxlength=\""+iMaxLen+"\" placeholder=\""+sLblCtrol+"\" data-kitana=\""+sMsgErr+"\" data-kitana-i=\"z_ree"+iNumCtrol+"\"  data-chingon-f=\"form-control txtFoc\" data-chingon-b=\"form-control\" />";
 }
 s+="            <h3 id=\"m_err"+iNumCtrol+"\" class=\"text-danger\"></h3>\n";
 s+="          </div>\n";
 s+="        </div>\n\n";  
 return s;
}
function nom_serial(T){let i,sNCr="";for(i=1;i<=iNumCtr;i++){sNCr="tNomCtr"+i;if(document.getElementById(sNCr)!==null){switch(T){case 0:{document.getElementById(sNCr).value="";}break;case 1:{document.getElementById(sNCr).value="Ctrl"+i;}break;}}}}
function Ar201(i,v){if(i.length>0 && document.getElementById(i)!==null){document.getElementById(i).innerHTML=v;}}
function Ar460(I){if(document.getElementById(I)!==null && document.getElementById(I).value.length>0){document.getElementById(I).select();document.execCommand("copy");}}
