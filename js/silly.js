var SILLY=(function (module){
	module.DoIt=function(resultObject){
	resultObject.prepend(Date());
	resultObject.prepend('<br/>');
};

return module;
}(SILLY || {} ));