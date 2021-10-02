layui.define(function(exports){
	var roleId = $("input[name=menuRoleId]").val();
    var index = {
    init: function(str){
		$.ajax({
			url : ctx + '/ucpSysRoleMenu/queryData',
			type : 'post',
			data : {roleId : roleId},
			success : function(data) {
				if (data.code == 0) {
					var menuList = data.data;
					var text = "";
		            for(var i = 0; i < menuList.length; i++){
		            	if(menuList[i].checked == true){
		            		text = text + '<li class="layui-nav-item"><a class=""href="javascript:;">' + menuList[i].name + '<span class="layui-nav-more"></span></a>';
			            	if(menuList[i].list && menuList[i].list.length > 0){
			            		var dl = '<dl class="layui-nav-child">';
			            		var flag = true;
			            		for(var j = 0; j < menuList[i].list.length; j++){
			            			if( menuList[i].list[j].checked == true){
			            				dl = dl + '<dd data-href="' + ctx + '/' + menuList[i].list[j].url + '">'
				            			+ '<a href="javascript:;">' + menuList[i].list[j].name + '</a></dd>';
			            				flag = false;
			            			}
			            		}
			            		dl = dl + '</dl>';
			            		if(flag){
			            			dl = '';
			            		}
			            	}
			            	text = text + dl + '</li>';
		            	}
		            }
		            $("#menuList").html(text);
		            var ddList = $("#menuList dd");
		        	if(ddList.length > 0){
		        		$(ddList[0]).parent().parent().addClass("layui-nav-itemed");
		        		$(ddList[0]).addClass("layui-this");
		        		var href = $(ddList[0]).attr("data-href");
		        		$("#bodyIframe").attr("src", href);
		        	}
				}else{
					layer.msg(data.msg, {
						time : 2000
					});
				}
			},
			error : function(text) {
				layer.msg("程序错误", {
					time : 2000
				});
			}
		});
     }
   };
    
    $(document).on('click', '#menuList dd', function(e) {
		e.stopPropagation();
		var href = $(this).attr("data-href");
		if(href){
			$("#menuList dd").removeClass("layui-this");
			$(this).addClass("layui-this");
			$("#bodyIframe").attr("src", href);
		}
	});
	
	$(document).on('click', '#menuList li', function() {
		if($(this).hasClass("layui-nav-itemed")){
			$(this).removeClass("layui-nav-itemed");
		}else{
			$(this).addClass("layui-nav-itemed");
		}
	});
	
	$(document).on('click', '#userEditPassword', function() {
		layer.open({
			type : 2,
			title : '修改密码',
			content : ctx + '/ucpSysUser/userEditPassword',
			area : [ '700px', '350px' ]
		});
	});
	
	$(document).on('click', '#exit', function() {
		layer.confirm('确认退出吗？', {
			btn : [ '取消', '确定' ],
			skin : 'my-skin'
		}, function(index, layero) {
			layer.close(index);
		}, function(index) {
			var frameindex = parent.layer.getFrameIndex(window.name);
			parent.layer.close(frameindex);
			parent.window.location = ctx + "/login";
		});
	});
	
   exports('index', index);
});