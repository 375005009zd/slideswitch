function PageSilde(el,options){
     this.option = extendObj(PageSilde.defaultObj,options||{});
     this.element = document.getElementById(el);
     this._init();
}

PageSilde.defaultObj = {
	sector:{
      sections:'.sections',
      section:'.section',
      page:'.pages',
      active:'.active'
	},
	index:0
}

PageSilde.prototype = {
	/*说明：初始化插件*/
    /*实现：初始化dom、分页、绑定事件*/
	_init:function(){
		var that = this;
		 that.sections = document.getElementsByClassName(that.option.sector.sections.substr(1))[0];
		 that.section = document.getElementsByClassName(that.option.sector.section.substr(1));
		 that.pagesCount = that.pagesCount();
        var pageHtml = '<ul class=' + that.option.sector.page.substr(1) + '>';
        for(var i=0;i<that.pagesCount;i++){
             pageHtml += '<li></li>';
        }
        pageHtml +="</ul>";

        that.element.parentNode.innerHTML += pageHtml;
        that._initEvent();

	},
	/*说明：初始化绑定点击事件*/
	_initEvent:function(){
       var that = this;
	   that.pages = document.getElementsByClassName(that.option.sector.page.substr(1))[0];
	   that.pageItem = that.pages.childNodes;

       that.pages.addEventListener('click',function(){
       	    var target = event.target;
       	    var currTarget = event.currentTarget;
       	    if(target !== currTarget){
             that.index = that._getIndex(that.pageItem,target);
             that._scrollPage(target);
       	    }
       	   
       });
	},
	/*滑动动画*/
    _scrollPage:function(target){
    	var that = this;
    	that.activeClass=that.option.sector.active;
       for(var i=0;i<that.pagesCount;i++){
          that.pageItem[i].className= (that.pageItem[i]==target)? "active":'';
       }

       var translateY = "-" + that.section[that.index].offsetTop + "px";
       that.sections.style['transform'] = 'translateY(' + translateY + ')';
       
    },
   /* 获取点击页面的index*/
    _getIndex:function(list,elem){
       if(!elem){ return -1}
       return Array.prototype.indexOf.call(list,elem);
    },
	/*获取滑块页面总数*/
	pagesCount:function(){
       return this.section.length;
	}
}

//扩展对象
function extendObj(defaultObj,options){

	//先拷贝default
	var tempObj = cloneObj(defaultObj);

	for(var ind in options){
        if(typeof ind === "string"){
            tempObj[ind] = options[ind];
        }
	}
   return tempObj;
}

//拷贝对象
function cloneObj(oldObj){
    
    var tempObj = {};
    if(oldObj == null || typeof oldObj != "object") return oldObj;
    for(var i in oldObj){
         tempObj[i] = oldObj[i];
    }
    return tempObj;
}

(function(){
	new PageSilde('silde');
})();