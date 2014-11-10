
function HistoryStack(){
	this.stack = [];
}

HistoryStack.prototype = {
	constructor:HistoryStack,
	push:function(id,url){
		this.stack.push(HistoryStack.buildEntry(id,url));
	},
	pop:function(){
		return this.stack.pop();
	},
	top:function(){
		return this.stack.length ? this.stack[this.stack.length-1] : null;
	},
	clear:function(){
		this.stack = [];
	}
};


HistoryStack.buildEntry = function(id,url){
	return {
		id:id,
		url:url
	};
}