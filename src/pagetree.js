
function PageTree(){
	this.data = {};
}

PageTree.prototype = {
	constructor:PageTree,
	buildNode:function(url,prev){
		return {
			prev:prev,
			url:url
		};
	},
	add:function(url,prev){
		this.data[url] = this.buildNode(url,prev);
	},
	getPrevUrl:function(url){
		var curNode = this.data[url];
		return curNode && curNode.prev && this.data[curNode.prev] && this.data[curNode.prev].url;
	}
};


var tree = new PageTree();

tree.add('index','');

tree.add('searchlist','index');

tree.add('searchfilter','searchlist');

tree.add('detail','searchlist');

tree.add('imagelist','detail');

tree.add('imagedetail','imagelist');

tree.add('booking','detail');