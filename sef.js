/* <select name="ctl00$MainContent$lstUNOR" onchange="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$lstUNOR\',\'\')', 0)" id="MainContent_lstUNOR" class="form-control">
			<option value="10C">DRNorte - Posto SEF CNAI-Porto</option>
			<option value="110">DelegaÃ§Ã£o de Viana do Castelo </option>
			<option value="12L">Loja do CidadÃ£o de Braga - SEF </option>
			<option value="130">DelegaÃ§Ã£o de Vila Real        </option>
			<option value="140">DelegaÃ§Ã£o de BraganÃ§a         </option>
			<option value="20L">Loja do CidadÃ£o de Coimbra - SEF        </option>
			<option value="210">DelegaÃ§Ã£o de Espinho          </option>
			<option value="22L">Loja do CidadÃ£o de Aveiro - SEF </option>
			<option value="230">DelegaÃ§Ã£o de Viseu            </option>
			<option value="240">DelegaÃ§Ã£o da Guarda           </option>
			<option value="250">DelegaÃ§Ã£o de Castelo Branco   </option>
			<option selected="selected" value="260">DelegaÃ§Ã£o de Leiria           </option>
			<option value="270">DelegaÃ§Ã£o da Figueira da Foz</option>
			<option value="30L">Loja do CidadÃ£o de Agualva-CacÃ©m - SEF </option>
			<option value="310">DelegaÃ§Ã£o de SetÃºbal          </option>
			<option value="318">Posto de Atendimento S.SebastiÃ£o Pedreira</option>
			<option value="330">DelegaÃ§Ã£o de Ã‰vora            </option>
			<option value="340">DelegaÃ§Ã£o de Portalegre       </option>
			<option value="350">DelegaÃ§Ã£o de SantarÃ©m         </option>
			<option value="40L">Loja do CidadÃ£o de Faro - SEF </option>
			<option value="420">DelegaÃ§Ã£o de Beja</option>
			<option value="430">DelegaÃ§Ã£o de Albufeira        </option>
			<option value="440">DelegaÃ§Ã£o de PortimÃ£o</option>
			<option value="450">DelegaÃ§Ã£o de Tavira</option>

		</select> */}
        $(document).ready(function() {
        var loja_value = ["10C","110","12L","130","140","20L","210","22L","230","240","250","260","270","30L","310","318","330","340","350","40L","420","430","440","450"];
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
  delay_val = ((i + 2) * 1000); //2 secs 
  console.log(i, delay_val);
  setTimeout(function () {
    get_data();
  }, delay_val);
}

        var loja_value = ["10C"];
        loja_value.forEach(myFunction);
        function myFunction(item) {
            //sum += item;
            //document.getElementById("demo").innerHTML = sum;
        console.log(item);
        var msg_id = "MainContent_Mensagem";
        var ele_id = "MainContent_lstUNOR";
        $("#MainContent_lstUNOR").val(item);
        //document.getElementById(ele_id).dispatchEvent(new Event('change'));
        //$( "#MainContent_lstUNOR" ).trigger( "change" );
        //$("#MainContent_Mensagem").change();
        document.getElementById("MainContent_btnNovo").click();
        /*$.ajax({
            type: "POST",
            url: "./Agendar",
            data: $('#ctl01').serialize(),
            beforeSend: function (data) {
            },
            success: function(data) {
                setTimeout(function(){ console.log("waiting"); }, 3000);
			  //console.log(data);
			  //$('.logs').html(data);
            },
			error: function(xhr) {
				//$('.logs').attr('data-error',xhr.statusText + xhr.responseText);
			},
			
			
          });*/
        /*element.onchange = function() {
            console.log(element.value);
          }*/
      //document.getElementById("ctl01").submit();
         result1 = $("#MainContent_Mensagem").html();
         javascript:setTimeout('__doPostBack(\'ctl00$MainContent$lstUNOR\',\'\')', 0);
         alert("Next?");
         result2 = $("#MainContent_Mensagem").html();
         selected_text = $( "#MainContent_lstUNOR option:selected" ).text();
         console.log(selected_text,result2);
         search = result2.search(selected_text);
         console.log("search:"+search);
         var element = document.getElementById(msg_id);
          result = element.innerHTML;
          //result = $("#MainContent_Mensagem").html();
          console.log(result);
          if (result.search("Não existem")>0){
              console.log("No dates available");
          }
          }
        });
        
        
        
        
        
          var loja_value = ["10C","110","12L","130","140","20L","210","22L","230","240","250","260","270","30L","310","318","330","340","350","40L","420","430","440","450"];
        for (let i = 0; i < 1; i++) {
          console.log(loja_value[i]);
          var msg_id = "MainContent_Mensagem";
          var ele_id = "MainContent_lstUNOR";

          $("#MainContent_lstUNOR").val(loja_value[i]);
          document.getElementById(msg_id).dispatchEvent(new Event('change'));
          $( "#MainContent_lstUNOR" ).trigger( "change" );
            $("#MainContent_Mensagem").change();
          //document.getElementById("ctl01").submit();
          result1 = $("#MainContent_Mensagem").html();
          //setTimeout('__doPostBack(\'ctl00$MainContent$lstUNOR\',\'\')', 0);
          //do {
            break; 
            javascript:setTimeout('__doPostBack(\'ctl00$MainContent$lstUNOR\',\'\')', 2000);
            
            alert("Next?");
            result2 = $("#MainContent_Mensagem").html();
            selected_text = $( "#MainContent_lstUNOR option:selected" ).text();
            console.log(selected_text,result2);
            search = result2.search(selected_text);
            console.log("search:"+search);
            continue;
            /*do {
                result2 = $("#MainContent_Mensagem").html();
                selected_text = $( "#MainContent_lstUNOR option:selected" ).text();
                //console.log(selected_text,result2);
                search = result2.search(selected_text);
                console.log("search:"+search);
                console.log("waiting");

            }while(search < 0);*/
            //$( "#MainContent_lstUNOR" ).trigger( "change" );
         //}
          //while (result1 != result2);
          alert("Continue?");
          var element = document.getElementById(msg_id);
          result = element.innerHTML;
          //result = $("#MainContent_Mensagem").html();
          console.log(result);
          if (result.search("Não existem")>0){
              console.log("No dates available");
          }
        }





        $("#submit_change").click(function() {
            javascript:setTimeout('__doPostBack(\'ctl00$MainContent$lstUNOR\',\'\')', 0);
          });



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

        
        
        