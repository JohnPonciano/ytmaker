const readline = require('readline-sync')


function start(){

    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

        function askAndReturnSearchTerm (){

            return readline.question ('Escreva uma a busca de um termo presente no Wikipedia: ')  
        }

        function askAndReturnPrefix(){
            const prefixes = [ 'Oque e', 'porque', 'por que','quem e','quando','a historia']
            const seletedPrefixIndex = readline.keyInSelect(prefixes, 'escolha uma opcao')
            const seletedPrefixText = prefixes[seletedPrefixIndex]
            
            return seletedPrefixText
        }
            console.log(content)


}

start()