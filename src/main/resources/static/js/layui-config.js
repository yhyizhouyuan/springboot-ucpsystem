layui.config({
	base : ctx + '/js/' // 假设这是你存放拓展模块的根目录
}).extend({ // 设定模块别名
	index : 'index',
	login : 'login',
	taskList : 'manage/taskList',
	serviceStatusList : 'manage/serviceStatusList',
	reportList : 'manage/reportList',
	channelWarningList : 'manage/channelWarningList',
	taskEmergencyList : 'manage/taskEmergencyList',
	taskEmergencyAddSms : 'manage/taskEmergencyAddSms',
	taskEmergencyAddVideo : 'manage/taskEmergencyAddVideo',
	replacementList : 'manage/replacementList',
	smsReplacement : 'manage/smsReplacement',
	channelList : 'manage/channelList',
	channelAdd : 'manage/channelAdd',
	channelEdit : 'manage/channelEdit',
	appList : 'manage/appList',
	appAdd : 'manage/appAdd',
	appEdit : 'manage/appEdit',
	appEditPermisson : 'manage/appEditPermisson',
	whiteList : 'manage/whiteList',
	whiteListAdd : 'manage/whiteListAdd',
	userList : 'manage/userList',
	userAdd : 'manage/userAdd',
	userEdit : 'manage/userEdit',
	userEditPassword : 'manage/userEditPassword',
	modelList : 'manage/modelList',
	modelListAdd: 'manage/modelListAdd',
	modelListEdit: 'manage/modelListEdit',
	roleList : 'manage/roleList',
	roleAdd : 'manage/roleAdd',
	roleEdit : 'manage/roleEdit',
	roleEditPermision : 'manage/roleEditPermision',
	menuList : 'manage/menuList',
	menuAdd : 'manage/menuAdd',
	menuEdit : 'manage/menuEdit',
	ucpPublicLogList : 'manage/ucpPublicLogList',
	videoModelList : 'manage/videoModelList',
	videoModelListAdd : 'manage/videoModelListAdd',
	videoModelListDelete : 'manage/videoModelListDelete',
	md5 : 'util/md5',
	authtree : 'util/authtree'
});
$(function() {
	layui.use('element', function() {
		var element = layui.element;
		element.init();
	});
	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
});

function checkDate(){
	var startTime = $("#startTime").val();
	var endTime = $("#endTime").val();
	if(startTime != '' && endTime != '' && endTime < startTime){
		layer.msg("日期区间不正确，请重新选择");
		return false;
	}
	return true;
}