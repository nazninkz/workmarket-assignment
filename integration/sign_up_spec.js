describe('sign up test cases', function () {

    beforeEach(function () {
        cy.visit('https://dev.workmarket.com/register/campaign/10081C503B209A0C8E7F05FDCC1AA98D4C904DEEF5F73265CAE38C744E7EAD3E');
        cy.get('[tabindex="0"] > :nth(1)').contains('Join as an individual');
        cy.get('[tabindex="0"] > :nth(1)').click();
    });
    it('verify first name input field', function () {
        cy.get('input[name="firstName"]').type('Kazi')
    });

    it('verify Last name input field', function () {
        cy.get('input[id="lastname"]').type('Naznin')
    });
    it('verify email address input field', function () {
        cy.get('input[id="email"]').type('nazninkz@gmail.com');
    });
    it('verify password input field', function () {
        cy.get('input[id="password"]').type('abc123')
    });
    it('verify wrong email warning text', function () {
        cy.get('input[id="email"]').type('naznin@gmail,com').then(() => {
            cy.get('input[id="password"]').click()
            cy.get('div:nth-child(3) > div:nth-child(4)').contains('Please enter a valid  email')
        });
    });
    it('verify wrong email warning Test', function () {
        cy.get('input[id="password"]').type('abc123').click().then(() => {
           cy.get('input[id="email"]').click()
           cy.get('div:nth-child(4) > div:nth-child(5)').contains('Please enter a valid password')
        });
    });
    it('verify placeholder', function(){
        cy.get('#landing-page-bucket > div > div:nth-child(2) > div:nth-child(2) > div').within(() => {
            cy.get(' div:nth-child(4) > label > span > span:nth-child(1)').contains('Password')
            cy.get(' div:nth-child(3) > label > span > span:nth-child(1)').contains('Email')
            cy.get(' div:nth-child(2) > label > span > span:nth-child(1)').contains('Last Name')
            cy.get(' div:nth-child(1) > label > span > span:nth-child(1)').contains('First Name')

        });
    });

    it('click the checkbox', function () {
        cy.get('[type="checkbox"]').check({ force: true }).should('be.checked');
    });

    it('register button should be disable', function () {
        cy.get('[data-component-identifier="wm-validating-form__submit"]').should('be.disabled')
    });

});
