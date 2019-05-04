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
    $(".sidebar-title").removeClass( "active-title" );
$( this ).toggleClass( "active-title" );
 $( this ).next( ".js-togle__btn" ).slideToggle( "slow" );
});
      });
