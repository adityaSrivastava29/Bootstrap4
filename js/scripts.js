 $(document).ready(function(){
                $("#mycarousel").carousel( { interval: 2000 } );
            // it sets the slide interval of 2000 milliseconds or 2 sec
                $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
                });

             $("#buttonLogin").click(function(){
             $('#loginModal').modal('show');
             });

            $("#buttonReservation").click(function(){
            $('#reservationFormModal').modal('show');
           });
        });