//-----------------------------------------------------
//           技能树模块
// 方法：
// creat_tree( root, jsonData ) 在root中根据jsonData构造一棵树
// get_data() 未完成，获取数据
// root元素必须有position支持
// ----------------------------------------------------

(function (window){
var skilltree_module = function(){
	var that = {};

	that.get_data = function(){
	};

	that.creat_tree = function( root, jsonData ){
		var maxx = jsonData.max.x;
		var maxy = jsonData.max.y;
		var size = root.width() / maxx;
		root.css("height", size * maxy);
		$.each( jsonData.data, function( i, data ){
			creat_node( root, data, size );
		});
		animation( size );
	};

	task_count = function( tasklist ){
		var count = 0;
		$.each( tasklist, function( i, val ){
			if( val ){
				count = count + 1;
			}
		});
		return Math.round(count/json_count(tasklist)*100);
	};

	var creat_node = function( root, data, size ){
		
		var newNode = $("<div>").addClass("m-st-Node").css({		//定位节点
			"width":size + "px",
			"height":size + "px",
			"top":(data.position.y - 1) * size + "px",
			"left":(data.position.x - 1) * size + "px",
		});
	
		$("<div>").addClass("m-st-Pro").appendTo(newNode).css({
			"border-right-width":size*0.5 + "px",
			"border-bottom-width":size*0.5 + "px",
			"border-bottom-right-radius":size + "px"
		});
	
		var newMask = $("<div>").addClass("m-st-ProMask").css({
			"height": (100 - task_count( data.task )) * 0.5 + "%"
		}).appendTo(newNode);
	
		var newCircle = $("<div>").addClass("m-st-Circle").css({
			"width":size*0.55 + "px",
			"height":size*0.55 + "px",
			"left":size*0.2 + "px",
			"border-width":size*0.025 + "px"
		}).appendTo(newNode);
	
		$("<span>").addClass("m-st-Name").html(data.name).css({
			"line-height":size*0.55 + "px"
		}).appendTo(newCircle);
	
		$("<span>").addClass("m-st-ProNum").html(task_count(data.task)+"%").appendTo(newMask);
	
		newNode.appendTo(root);
	};

	var animation = function( size ){
		$(".m-st-Circle").bind(
		{
			"mouseenter":function( ev ){
				var target = $(ev.target);
				target.animate({
					width: size*0.51 + "px",
					height: size*0.51 + "px",
					"border-width": size*0.045 + "px"
				}, 70);
				target.children().animate( { "line-height" : size*0.51+"px" }, 70);
			},
			"mouseleave":function( ev ){
				var target = $(ev.target);
				target.animate({
					width: size*0.55 + "px",
					height: size*0.55 + "px",
					"border-width": size*0.025 + "px"
				}, 70);
				target.children().animate( { "line-height" : size*0.55+"px" }, 70);
			}
		});
	}

	var json_count = function( obj ){
		var prop;
		var propCount = 0;
		for (prop in obj) {
			propCount++;
		}
		return propCount;
	};
	return that;

},

tree_list_module = function (){
    var that = {};
    that.creat_tree_list = function (root, jsonData){
        root.empty();
        $.each(jsonData.data, function(i, data){
            append_child(root, data)
        });
    }
    that.append_child = function (root, data){
        var new_li = $("li").append(data + "");
    }
    return that;
}

window.skilltree = skilltree_module();
window.tree_list = tree_list_module();

})(window)
