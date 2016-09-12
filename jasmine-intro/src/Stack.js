// implementação de uma Pilha (FIFO)
function Stack() {
	
	var itens = new Array();
	
	return {
		
		push : function(item) {
			itens.push(item);
		},
		
		pop : function () {
			if(this.isEmpty()) {
				throw new Error("Pilha está vazia!");
			}
			return itens.pop();
		},
		
		peek : function() {
			return itens[itens.length  - 1];
		},
		
		size : function() {
			return itens.length;
		},
		
		isEmpty : function() {
			return itens.length == 0;
		}
	
		
	};
	
}