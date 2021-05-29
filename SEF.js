var loja_value = ["10C","110","12L","130","140",
			"20L","210","22L","230","240","250",
 	 "260","270","30L","310","318","330",
 	 "340","350","40L","420","430","440","450",
];
//Get all values from the select field of delegations
var loja_value = $("#MainContent_lstUNOR>option").map(function() { return $(this).val(); });
//var loja_value = ["10C"];
var msg_id = "MainContent_Mensagem";
var ele_id = "MainContent_lstUNOR";
var result;
var delay_val = 0;
function get_data() {
  console.log("Waiting");
  result2 = $("#MainContent_Mensagem").html();
  selected_text = $("#MainContent_lstUNOR option:selected").text();
  console.log("DATA:", selected_text, result2);
  search = result2.search(selected_text);
  console.log("search:" + search);
  var element = document.getElementById(msg_id);
  result = element.innerHTML;
  //result = $("#MainContent_Mensagem").html();
  console.log("Result:",result);
  if (result.search("Não existem") > 0) {
    console.log("No dates available");
    console.log("Next?");
  }
  else{
      console.log("Check date:",result);
  }
}
function add_wait(delay_val){
  
}
function data_1(loja_value) {
  console.log(loja_value);
  $("#MainContent_lstUNOR").val(loja_value);
  document.getElementById(ele_id).dispatchEvent(new Event("change"));
  $("#MainContent_lstUNOR").change();
  setTimeout("__doPostBack('ctl00$MainContent$lstUNOR','')", 0);
}

for (let i = 0; i < loja_value.length; i++) {
    delay_val1 = (delay_val + 1000);
    if (i==0){delay_val1=0;}
  setTimeout(function () {
    data_1(loja_value[i]);
  }, delay_val1);
  delay_val = ((i + 3) * 1000); //2 secs 
  console.log(i, delay_val);
  setTimeout(function () {
    get_data();
  }, delay_val);
}




// automatic entry of codes in sef portal
let q_text = $("#MainContent_lblDadosPedidos").text();
console.log(q_text);
PositionArray = Object.assign([], q_text);
matches = q_text.match(/\d+/g);
    var i=0
    console.log(matches[0] , matches[1] , matches[2]);
    if (q_text.search("Segurança Social")>0){
        number = 1;
        var NISS =[1,2,0,8,0,9,1,4,3,5,3];
        $("#MainContent_lstP").val(NISS[matches[0]-1]);
        $("#MainContent_lstS").val(NISS[matches[1]-1]);
        $("#MainContent_lstT").val(NISS[matches[2]-1]);
    }
    else if (q_text.search("identificação fiscal")>0){
        var NIF =[3,0,0,5,9,1,4,5,4];
        number = 2;
        $("#MainContent_lstP").val(NIF[matches[0]-1]);
        $("#MainContent_lstS").val(NIF[matches[1]-1]);
        $("#MainContent_lstT").val(NIF[matches[2]-1]);
    }
    else {
        var MI =[5,6,5,4,6,7,1,1];
        number = 3;
        $("#MainContent_lstP").val(MI[matches[0]-1]);
        $("#MainContent_lstS").val(MI[matches[1]-1]);
        $("#MainContent_lstT").val(MI[matches[2]-1]);
    }
    $("#MainContent_btnValidar").click();


    

/*function data_2() {
  loja_value = ["110"];
  $("#MainContent_lstUNOR").val(loja_value);
  console.log(loja_value);
  document.getElementById(ele_id).dispatchEvent(new Event("change"));
  $("#MainContent_lstUNOR").change();
  setTimeout("__doPostBack('ctl00$MainContent$lstUNOR','')", 6000);
}
setTimeout(function () {
  data_2();
}, 7000);
setTimeout(function () {
  get_data();
}, 10000);

function data_3() {
  loja_value = ["12L"];
  $("#MainContent_lstUNOR").val(loja_value);
  console.log(loja_value);
  document.getElementById(ele_id).dispatchEvent(new Event("change"));
  $("#MainContent_lstUNOR").change();
  setTimeout("__doPostBack('ctl00$MainContent$lstUNOR','')", 12000);
}
setTimeout(function () {
  data_3();
}, 13000);
setTimeout(function () {
  get_data();
}, 15000);

function data_4() {
  loja_value = ["130"];
  $("#MainContent_lstUNOR").val(loja_value);
  console.log(loja_value);
  document.getElementById(ele_id).dispatchEvent(new Event("change"));
  $("#MainContent_lstUNOR").change();
  setTimeout("__doPostBack('ctl00$MainContent$lstUNOR','')", 17000);
}
setTimeout(function () {
  data_4();
}, 18000);
setTimeout(function () {
  get_data();
}, 20000);*/
