import SingupPage from '../pages/SingupPage'

describe('Cadastro', ()=>{
    it('O usuário deve se tornar um entregador', ()=>{

        var deliver = {
            name: 'Marcos Santos',
            cpf: '00000078910',
            email: 'marcosjsantosmjs@gmail.com',
            whatsapp: '19999999999',
            address:{
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

        var singunp = new SingupPage()

        singunp.go()
        singunp.fillForm(deliver)
        singunp.submit()
                
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        singunp.modalContentShouldBe(expectedMessage)

    })

    it('CPF Incorreto', ()=>{

        var deliver = {
            name: 'Marcos Santos',
            cpf: '000000789AA',
            email: 'marcosjsantosmjs@gmail.com',
            whatsapp: '19999999999',
            address:{
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

        var singunp = new SingupPage()

        singunp.go()
        singunp.fillForm(deliver)
        singunp.submit()
        singunp.alertMerssageShouldBe('Oops! CPF inválido')

    })
})