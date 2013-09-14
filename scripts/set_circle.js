//-----------------------------------------------------
//         用于设置背景同心圆
//
//-----------------------------------------------------


(function(window){

//global variables
var set_circle = {
    user_center_distance : 1400,
    user_side_width : 330,
    user_nav_width : 100,
    user_main_BW : 5,
    user_side_BW : 0
};
set_circle.user_side_BW = set_circle.user_center_distance + set_circle.user_side_width;

//set circle
var set_circle_init = {
    tId : null,
    //size init
    size_init : function (){
        var win = $(window);
        set_circle.win_width = win.width();
        set_circle.win_height = win.height();
        set_circle.user_main_size = (set_circle.win_width - set_circle.user_nav_width + set_circle.user_center_distance) * 2;
        return this;
    },

    //bace method for all circles
    set_solidCircle : function($target, win_height, radius){
        $target.css({"top" : (win_height / 2 - radius) + "px",
            "left" : (-(set_circle.user_center_distance + radius)) + "px",
            "border-width" : radius + "px",
            "border-radius" : "100%"});
    },
    set_hollowCircle : function($target, win_height, size, bw){
        $target.css({"height" : size - bw + "px",
            "width" : size  - bw + "px",
            "top" : (win_height - size) / 2 + "px",
            "left" : (-(set_circle.user_center_distance + size / 2)) + "px",
            "border-width" : bw + "px",
            "border-radius" : "100%"});
    },

    //for user page
    set_side : function(){
        this.set_solidCircle ($(".g-user-side-bg").eq(0), set_circle.win_height, set_circle.user_side_BW);
        return this;
    },
    set_main : function(){
        this.set_hollowCircle ($(".g-user-main-bg").eq(0), set_circle.win_height, set_circle.user_main_size, set_circle.user_main_BW);
        return this;
    },
    process : function (page){
        clearTimeout(this.tId);
        var that = this;
        that.size_init();
	switch(page) {
		case "user":
                        this.tId = setTimeout (function(){
                            that.set_side();
                            that.set_main();
                        }, 100);
			break;
		case "square":
			break;		
	}
    }
}


window.set_circle_init = set_circle_init;
window.set_circle = set_circle;
})(window);
