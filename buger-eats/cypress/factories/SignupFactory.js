var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '00000078910',
            email: faker.internet.email(firstName),
            whatsapp: '19999999999',
            address: {
                postalcode: '13178585',
                street: 'Avenida José Carlos Amaral',
                number: '007',
                details: 'AP 72',
                district: 'Loteamento Residencial Viva Vista',
                city_state: 'Sumaré/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}