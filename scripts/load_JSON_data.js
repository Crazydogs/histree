//-----------------------------------------------------
//      加载数据
//
//-----------------------------------------------------


(function (window){
    var domain = "http://xxxx",
        add_url_parameter = function (url, parameter){
            var result = url,
                i = 0;
                len = parameter.length;
            if (result.indexOf("?") == -1){
                result = result + "?" + encodeURIComponent(parameter[0][0]) + "=" + encodeURIComponent(parameter[0][1]);
                i++;
            }
            for (; i < len; i++){
                result = result + "&" + encodeURIComponent(parameter[i][0]) + "=" + encodeURIComponent(parameter[i][1]);
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
            url : add_url_parameter(domain + "/getSkilltreeData", [["callback", "handler_JSONP.skilltree_data.handler"]])
        },
        skilltree_list : {
            handler : function (jsonData){
            },
            url : add_url_parameter(domain + "/getSkilltreeList", [["callback", "handler_JSONP.skilltree_list.handler"]])
        }
    };

    function launch_JSONP (url) {
        $("<script>").attr({ src: encodeURI(url), type: "text/javascript" }).appendTo($("head").eq(0));
    }

    window.add_url_parameter = add_url_parameter;
    window.handler_JSONP = handler_JSONP;
    window.launch_JSONP = launch_JSONP;
})(window);
