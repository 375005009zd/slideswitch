function PageSilde(el,options){
     this.option = extendObj(PageSilde.default,options);
     this.element = document.getElementById(el);
     this.pagesCount = document.getElementsByClassName(this.option.sector.section);
    this.init();
}

PageSilde.default = {
	sector:{
      sections:'.sections',
      section:'.section'
      page:'.page',
      active:'.active'
	},
	index:0
}

PageSilde.prototype = {
	/*说明：初始化插件*/
	init:function(){
        var pageHtml = '<ul class=' + this.option.sector.page + '>';

	}
}

//扩展对象
function extendObj(default,options){

	//先拷贝default
	var tempObj = cloneObj(default);

	for(var ind in options){
        if(typeof ind === "string"){
            tempObj[ind] = options[ind];
        }
	}
   return tempObj;
}

//拷贝对象
function cloneObj(oldObj){
    if(oldObj == null || typeof oldObj != "object") return oldObj;
    
}