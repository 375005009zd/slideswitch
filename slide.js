

function PageSwitch(element,options){
   this.settings = extend(PageSwitch.default,options||{});
   this.element = element;
   this.init();
}

PageSwitch.prototype ={
	/*说明：初始化插件*/
	/*实现：初始化dom结构，布局、分页及绑定事件*/
	init: function(){

	}
}

PageSwitch.default = {
	//这是做什么用的
	selectors: {
		sections: ".sections",
		section: ".section",
		page: ".pages",
		active: ".active"
	},
	index: 0,
	easing: "ease",
	duration: 500,
	loop: false,
	pagination: true,
	keyboard: true,
	direction: "vertical",
	callback: ""
}

//扩展对象
function extendObj(default,options){

	//先拷贝default
	var tempObj = cloneObj(default);

	for(var ind in options){
       tempObj[ind] = options[ind];
	}
	return tempObj;

}

//拷贝对象
function cloneObj(oldObj){
	var newObj = {};
    if(oldObj == null || typeof oldObj != "object") return oldObj;
    for(var i in oldObj){
          newObj[i] = oldObj[i]
    }
    return newObj;
}
