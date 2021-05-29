// ==UserScript==
// @name Bypass security
// @namespace Script Runner Pro
// @match https://sapa.sef.pt/Agendamento/Agendar
// @grant none
// ==/UserScript==
// automatic entry of codes in sef portal
if (window.location.href == 'https://sapa.sef.pt/Agendamento/Agendar' && $("#MainContent_lblDadosPedidos").text()!=""){
let q_text = $("#MainContent_lblDadosPedidos").text();
console.log(q_text);
PositionArray = Object.assign([], q_text);
matches = q_text.match(/\d+/g);
    var i=0
    console.log(matches[0] , matches[1] , matches[2]);
    var NISS = "12080914353";
    var NIF = "300591454";
    var MI = "56545711";
    NISS = NISS.split("");
    NIF = NIF.split("");
    MI = MI.split("");
    if (q_text.search("Segurança Social")>0){
        number = 1;
        //var NISS =[1,2,0,8,0,9,1,4,3,5,3];
        $("#MainContent_lstP").val(NISS[matches[0]-1]);
        $("#MainContent_lstS").val(NISS[matches[1]-1]);
        $("#MainContent_lstT").val(NISS[matches[2]-1]);
    }
    else if (q_text.search("identificação fiscal")>0){
        //var NIF =[3,0,0,5,9,1,4,5,4];
        number = 2;
        $("#MainContent_lstP").val(NIF[matches[0]-1]);
        $("#MainContent_lstS").val(NIF[matches[1]-1]);
        $("#MainContent_lstT").val(NIF[matches[2]-1]);
    }
    else {
        //var MI =[5,6,5,4,6,7,1,1];
        number = 3;
        $("#MainContent_lstP").val(MI[matches[0]-1]);
        $("#MainContent_lstS").val(MI[matches[1]-1]);
        $("#MainContent_lstT").val(MI[matches[2]-1]);
    }
$("#MainContent_btnValidar").click();
}