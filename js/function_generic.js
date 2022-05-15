function load_services(valor){
      let detalle ={
        'Ramo1':'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',

        'Ramo2':'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        
        'Ramo3':'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        
        'Ramo4':'jbfnjbabjfvbjvbfajbfv',
         
        'Ramo5':`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam volu `
      };
      let salida = `
          <img class="img_view" src="recursos/icons/${valor + ".png"}">
          <h2 class="h2_conf">${valor}</h2>
          <p class="p_conf">${detalle[valor]} </p>
      `;
      document.querySelector('.right_services').innerHTML = salida;
    }
    function ver_etiqueta(id){
      document.querySelector('#' + id).setAttribute('class', 'etiqueta');
      document.querySelector('.card_' + id).setAttribute('id', 'card');
    } 
    function quitar_etiqueta(id){
      document.querySelector('#' + id).removeAttribute('class');
      document.querySelector('.card_' + id).removeAttribute('id');
    }
    function inicio(){
      load_services('Ramo1');
    }
    function ver_menu(){
      if (document.querySelector(".img_menu").value == "1"){
        document.querySelector('#menu').setAttribute("class", "ul_movil");
        document.querySelector(".img_menu").value = "2";
      }else{

        document.querySelector('#menu').setAttribute("class", "ul_full");        
        document.querySelector(".img_menu").value = "1";
      }
    } 
window.onload = inicio;
