/**
 * Created by Esat IBIS on 2017-03-11.
 * Project: project-one.
 * @author: Esat IBIS <esat.taha.ibis@gmail.com>
 */

$( document ).ready(function() {
    console.log( "ready!" );
    let countChecked = function() {
        let n = $( "input:checked" ).length;
        let navbar = $('nav');
        let imgs = $('img.img-thumbnail').toArray();
        console.log(imgs);
        if (n > 0 ) {
            navbar.removeClass('navbar-light ng-faded').addClass('navbar-inverse bg-inverse');
            let styles = {
                backgroundColor : "#333",
                color : "#eee"
            };
            $('body').css(styles);
            $('.footer').css({
                backgroundColor : "#292B2C",
                color: "#eee"
            });
            imgs.forEach(function (img) {
                img.src = "http://placehold.it/350/EEEEEE/222222"
            })

        } else {
            navbar.removeClass('navbar-inverse bg-inverse').addClass('navbar-light ng-faded');
            //noinspection JSDuplicatedDeclaration
            let styles = {
                backgroundColor : "#fff",
                color: "#222"
            };
            $('body').css(styles);
            $('.footer').css({
                backgroundColor : "#f5f5f5",
                color : "#636C7E"
            });
            imgs.forEach(function (img) {
                img.src = "http://placehold.it/350/CCCCCC/969696"
            })
        }
    };
    $( "input[type=checkbox]" ).on( "click", countChecked );
});