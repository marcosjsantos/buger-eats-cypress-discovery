import signup from '../pages/SingupPage'

describe('Cadastro', () => {

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })

    it('O usuário deve se tornar um entregador', function () {

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF Incorreto', function () {

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMerssageShouldBe('Oops! CPF inválido')

    })
})