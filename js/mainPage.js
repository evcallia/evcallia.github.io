$(document).ready(function() {
    // Scroll functionality
    $('body').scrollspy({target: ".navbar", offset: 50});
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // modal pop up
    $('.description').click(function(){
        var popUp = $($(this).parent()[0]).find('.project-details')[0];
        var modal = $('.modal-content')[0];
        $(modal).html($(popUp).html());
        $('.modal')[0].style.display = "block";
    });

    // modal hide
    window.onclick = function(event) {
        var modal = $('.modal')[0];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // allow clicking on icons to activate links
    $('.contact-link').click(function(){
        $(this).find('a')[0].click();
    });
});
