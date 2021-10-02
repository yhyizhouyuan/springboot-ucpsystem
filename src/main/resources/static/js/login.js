layui.define(function(exports) {
	layui.use([ 'layer', 'form' ], function() {
		var form = layui.form;
		var layer = layui.layer;
		var login = {};
		var time = 180;
		var timeClear = null;
		form.on('submit(getCode)', function(){
			$("#getCode").removeClass("layui-btn-primary");
			$("#getCode").addClass("layui-btn-disabled");
			$("#getCode").attr("disabled","true");
			var username = $("input[name=username]").val();
			var password = $("input[name=password]").val();
			$.ajax({
				url : ctx + "/login/sendVCode",
				type : 'post',
				data : {username : username, password : password},
				success : function(data) {
					layer.msg(data.msg);
					if(data.code == 0){
						timedCount();
					}else{
						$("#getCode").removeClass("layui-btn-disabled");
						$("#getCode").addClass("layui-btn-primary");
						$("#getCode").attr("disabled",false);
					}
				},
				error : function(text) {
					layer.msg("程序错误", {
						time : 2000
					});
				}
			});
			return false;
		});
		
		form.on('submit(vCode)', function(data){
			var username = $("input[name=username]").val();
			var password = $("input[name=password]").val();
			var vCode = $("input[name=vCode]").val();
			$.ajax({
				url : ctx + "/login/auth",
				type : 'post',
				data : {username : username, password : password, vCode : vCode},
				success : function(data) {
					if(data.code == 0){
						window.location = ctx + "/index";
					}else{
						layer.msg(data.msg);
					}
				},
				error : function(text) {
					layer.msg("程序错误", {
						time : 2000
					});
				}
			});
			return false;
		});
		
		function timedCount(){
			$("#getCode").text("获取验证码("+time+"s)");
			time--;
			if(time < 0){
				$("#getCode").removeClass("layui-btn-disabled");
				$("#getCode").addClass("layui-btn-primary");
				$("#getCode").attr("disabled",false);
				$("#getCode").text("获取验证码");
				time = 180;
				clearInterval(timeClear);
				timeClear = null;
			}else if(!timeClear){
				timeClear = setInterval(timedCount, 1000);
			}
		}
		exports('login', login);
	});
});