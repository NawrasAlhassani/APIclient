$(function () {
      $("#datepicker").datepicker({
            showWeek: true,
            firstDay: 1,
            showOn: "button", 
            buttonImage: "C:/Users/nawra_000/Downloads/webbtjänster/1000166764.gif",
            buttonImageOnly: true,
            buttonText: "Select date"
                
    });
        $("#hour").selectmenu()
            .selectmenu("menuWidget")
            .addClass("overflow");
   
        $("#minute").selectmenu()
            .selectmenu("menuWidget")
            .addClass("overflow");
   });
