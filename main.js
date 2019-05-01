  $(document).ready(function(){
        $(".checkbox3").click(function(){
			$( 'label').toggleClass( "highlight" );
            $(".sidebar").animate({
                width: "toggle"
            });
        });
    });