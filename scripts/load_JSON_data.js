//-----------------------------------------------------
//      加载数据
//
//-----------------------------------------------------


(function (window){
    var path = "xxxxx",
        add_url_parameter = function (url, parameter){
            var result = url,
                i = 0;
                len = parameter.length;
            if (result.indexOf("?") == -1){
                result = result + "?" + parameter[0][0] + parameter[0][1];
                i++;
            }
            for (; i < len; i++){
                result = result + "&" + parameter[i][0] + parameter[i][1];
            }
            return result;
        };
    var handler_JSONP = {
        skilltree_data : {
            handler : function (jsonData){
                var root = $(".g-user-main");
                root.empty();
                window.skilltree.crea_tree(root, jsonData);
            },
            url : add_url_parameter(path, [["callback", "handler_JSONP.skilltree_data.handler"]])
        },
        skilltree_list : {
            handler : function (jsonData){
            },
            url : add_url_parameter(path, [["callback", "handler_JSONP.skilltree_list.handler"]])
        }
    };

    function launch_JSONP (url) {
        $("<script>").attr({ src: url, type: "text/javascript" }).appendTo($("head").eq(0));
    }

    window.handler_JSONP = handler_JSONP;
    window.launch_JSONP = launch_JSONP;
})(window);
