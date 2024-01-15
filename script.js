document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        el: '#app',
        data: {
            lista: ['Item 1', 'Item 2', 'Item 3'],
        },
        methods: {
            adicionarItem: function() {
                const novoItem = prompt('Digite um novo item:');
                if (novoItem) {
                    this.lista.push(novoItem);
                }
            },
            removerItem: function(index) {
                this.lista.splice(index, 1);
            },
        },
    });
});
