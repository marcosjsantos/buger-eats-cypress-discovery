import SignupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        SignupPage.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()
        SignupPage.alertMerssageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect Email', function () {

        var deliver = signupFactory.deliver()
        
        deliver.email = 'user.com.br'

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()
        SignupPage.alertMerssageShouldBe('Oops! Email com formato inválido.')

    })

    it('Required fields', function(){
        SignupPage.go()
        SignupPage.submit()
        SignupPage.alertMerssageShouldBe('É necessário informar o nome')
        SignupPage.alertMerssageShouldBe('É necessário informar o CPF')
        SignupPage.alertMerssageShouldBe('É necessário informar o email')
        SignupPage.alertMerssageShouldBe('É necessário informar o CEP')
        SignupPage.alertMerssageShouldBe('É necessário informar o número do endereço')
        SignupPage.alertMerssageShouldBe('Selecione o método de entrega')
        SignupPage.alertMerssageShouldBe('Adicione uma foto da sua CNH')
    })
})