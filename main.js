  $(document).ready(function(){
        $(".checkbox3").click(function(){
			$( 'label').toggleClass( "highlight" );
            $(".sidebar").animate({
                width: "toggle"
            });
        });

        $(".card-main__item").click(function(){
          $(".card-main__item").removeClass( "card-main__active" );
      $( this ).toggleClass( "card-main__active" );
    });

    $(".menu-tools-item").click(function(){
      $(".menu-tools-item").removeClass( "active-tool" );
  $( this ).toggleClass( "active-tool" );
  });

  $(".sidebar-title").click(function(){

$( this ).toggleClass( "active-title" );
 $( this ).next( ".js-togle__btn" ).slideToggle( "slow" );
});
$(".nav-main__arrow").click(function(){
    $( this ).toggleClass( "active-rotate" );
$(".inner-page .sidebar" ).toggleClass( "active-sidebar" );
});
      });

      $(".nav-main__item").click(function(){
        $(".nav-main__item").removeClass( "nav-main__active" );
    $( this ).addClass( "nav-main__active" );
    });
