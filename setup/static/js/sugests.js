const bancos = {
    "Banco do Brasil": 'bb',
    "Caixa Econômica Federal": 'caixa-economica-federal',
    "Itaú Unibanco": 'itau',
    "Bradesco": 'bradesco',
    "Banco Santander": 'santander',
    "Safra": 'safra',
    "BTG Pactual": 'btg-pactual',
    "C6 Bank": 'c6',
    "Nubank": 'nubank',
    "Neon": 'banco-neon-sa',
    "Sofisa Direto": 'sofisa',
    "XP Investimentos": 'xp-investimentos-cctvm-sa',
    "Clear Corretora": 'clear-ctvm',
    "Rico Investimentos": 'rico-ctvm-sa',
    "Inter": 'intermedium',
    "Pagseguro": 'pagseguro',
    "Banco Pan": 'pan',
    "Banco BMG": 'bgm',
    "Banco Neon": 'banco-neon-sa',
};

const bancos2 = [
    "Banco do Brasil",
    "Caixa Econômica Federal",
    "Itaú Unibanco",
    "Bradesco",
    "Banco Santander",
    "Safra",
    "BTG Pactual",
    "C6 Bank",
    "Nubank",
    "Neon",
    "Sofisa Direto",
    "XP Investimentos",
    "Clear Corretora",
    "Rico Investimentos",
    "Inter",
    "Pagseguro",
    "Banco Pan",
    "Banco BMG",
    "Banco Neon",
];

function autocomplete(input, list) {
    //Add an event listener to compare the input value with all countries
    input.addEventListener('input', function () {
        //Close the existing list if it is open
        closeList();

        //If the input is empty, exit the function
        if (!this.value)
            return;

        //Create a suggestions <div> and add it to the element containing the input field
        suggestions = document.createElement('div');
        suggestions.setAttribute('id', 'suggestions');
        suggestions.setAttribute('class', 'col-12 mt-3');
        this.parentNode.appendChild(suggestions);

        //Iterate through all entries in the list and find matches
        for (let i=0; i<list.length; i++) {
            if (list[i].toUpperCase().includes(this.value.toUpperCase())) {
                //If a match is found, create a suggestion <div> and add it to the suggestions <div>
                suggestion = document.createElement('div');
                suggestion.innerHTML = list[i];
                
                suggestion.addEventListener('click', function () {
                    input.value = this.innerHTML;
                    closeList();
                });
                suggestion.style.cursor = 'pointer';

                suggestions.appendChild(suggestion);
            }
        }

    });

    function closeList() {
        let suggestions = document.getElementById('suggestions');
        if (suggestions)
            suggestions.parentNode.removeChild(suggestions);
    }
}

function banksearch () {
    input = document.getElementById('search');
    input.value = bancos[input.value]
    console.log(input.value)
}
autocomplete(document.getElementById('search'), bancos2);