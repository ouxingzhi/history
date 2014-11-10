
var History = function(tree,stack){
	this.tree = tree;
	this.stack = stack;

};

History.prototype = {
	constructor:History,

	back:function(id){
		var top = this.stack.pop(),
			prev = this.stack.top(),
			url = '';
		if(top && top.id === id && prev && prev.id){
			url = prev.url;
		}else{
			url = this.tree.getPrevUrl(id);
			this.stack.clear();
		}
		if(url){
			location.hash = url;
		}
		return url;
	},
	forward:function(id,url){
		this.stack.push(id,url);
		location.hash = url;
	}
};

