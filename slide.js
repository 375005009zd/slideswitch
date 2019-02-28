function PageSwitch(element,options){
   this.settings = extend(PageSwitch.default,options||{});
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
        if(typeof ind === "string"){

        }
	}

}

//拷贝对象
function cloneObj(oldObj){
    if(oldObj == null || typeof oldObj != "object") return oldObj;
    
}