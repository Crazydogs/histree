(function(window){

function switching () {
    var that = {};

    that.circle_zoom = function (target, time, end_radius, if_solid) {
        if(if_solid){
            target.animate({
                borderWidth: end_radius,
                top: set_circle.win_height / 2 - end_radius + "px",
                left: (-(set_circle.user_center_distance + end_radius)) + "px"
            },time);
        }else{
            target.animate({
                top: set_circle.win_height / 2 - end_radius + "px",
                left: (-(set_circle.user_center_distance + end_radius)) + "px",
                height: end_radius * 2 + "px",
                width: end_radius * 2 + "px"
            },time);
        }
    };

    that.rotate = function (target, time, direction) {
        var target_offset = target.offset(),
        origin = (-(target_offset.left + set_circle.user_center_distance)) + "px";
        target.css({"transform-origin": origin,
            "-o-transform-origin": origin,
            "-ms-transform-origin": origin,
            "-moz-transform-origin": origin,
            "-webkit-transform-origin": origin});
        alert(target.css("-webkit-transform-origin"));
        target.animate({"transform": "rotate(90deg)",
            "-o-transform": "rotate(90deg)",
            "-ms-transform": "rotate(90deg)",
            "-moz-transform": "rotate(90deg)",
            "-webkit-transform": "rotate(90deg)"
        },time);
    };

    return that;
}

window.switching = switching();
})(window);
