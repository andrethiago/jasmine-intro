describe("Stack", function() {
	
	it("Deve saber que a pilha não está vazia", function() {
		var pilha = new Stack();
		
		pilha.push(1);
		
		expect(pilha.isEmpty()).toBe(false);
	});
	
	it("Deve saber que a pilha está vazia", function() {
		var pilha = new Stack();
		
		expect(pilha.isEmpty()).toBe(true);
	});
	
	it("Deve implementar o LIFO (Last In, First Out) : a retirada é do elemento que está no topo.", function() {
		var pilha = new Stack();
		
		pilha.push(1);
		pilha.push(2);
		pilha.push(3);
		pilha.push(5);
		
		expect(pilha.pop()).toEqual(5);
	});
	
	it("O método peek() permite verificar o topo da pilha.", function() {
		var pilha = new Stack();
		
		pilha.push(1);
		pilha.push(2);
		pilha.push(3);
		pilha.push(5);
		
		var item = pilha.peek();
		
		expect(item).toEqual(5);
	});
	
	it("Chamar o pop() deve remover o elemento do topo da pilha.", function() {
		var pilha = new Stack();
		
		pilha.push(1);
		pilha.push(2);
		pilha.push(3);
		pilha.push(5);
		
		pilha.pop();
		
		expect(pilha.size()).toEqual(3);
	});
	
	it("Chamar o peek() apenas verifica o topo da pilha, sem removê-lo.", function() {
		var pilha = new Stack();
		
		pilha.push(1);
		pilha.push(2);
		pilha.push(3);
		pilha.push(5);
		
		pilha.peek();
		
		expect(pilha.size()).toEqual(4);
	});
	
	it("Chamar o pop() em uma pilha sem elementos deve lançar uma exceção", function() {
		var pilha = new Stack();
		
		expect(function() {pilha.pop()}).toThrow(new Error("Pilha está vazia!"));
	})
	
	
}); 