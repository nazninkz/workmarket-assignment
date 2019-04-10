describe('sign up e2e test case', function () {

    context('user can sign up successfully', function () {
        before(() => {
            cy.visit('https://dev.workmarket.com/register/campaign/10081C503B209A0C8E7F05FDCC1AA98D4C904DEEF5F73265CAE38C744E7EAD3E');
            cy.get('[tabindex="0"] > :nth(1)').contains('Join as an individual');
            cy.get('[tabindex="0"] > :nth(1)').click();

        });

        it('type first name', function () {
            cy.get('input[name="firstName"]').type('Kazi')
        });

        it('type Last name ', function () {
            cy.get('input[id="lastname"]').type('Naznin')
        });
        it('type email address', function () {
            cy.get('input[id="email"]').type('qa+candidatetest@workmarket.com');
        });
        it('type password ', function () {
            cy.get('input[id="password"]').type('candidate123')
        });

        it('click the checkbox', function () {
            cy.get('[type="checkbox"]').check({ force: true }).should('be.checked');
        })
        it('click register button ', function () {
            cy.get('[data-component-identifier="wm-validating-form__submit"]').click()
        });

    });

    context('user cant sign up  b/c invaild email', function () {
        before(() => {
            cy.visit('https://dev.workmarket.com/register/campaign/10081C503B209A0C8E7F05FDCC1AA98D4C904DEEF5F73265CAE38C744E7EAD3E');
            cy.get('[tabindex="0"] > :nth(1)').contains('Join as an individual');
            cy.get('[tabindex="0"] > :nth(1)').click();

        });

        it('type first name', function () {
            cy.get('input[name="firstName"]').type('Kazi')
        });

        it('type Last name ', function () {
            cy.get('input[id="lastname"]').type('Naznin')
        });
        it('type wrong email address', function () {
            cy.get('input[id="email"]').type('qa+candidatetest@workmarket');
        });
        it('type password ', function () {
            cy.get('input[id="password"]').type('candidate123')
        });

        it('click the checkbox', function () {
            cy.get('[type="checkbox"]').check({ force: true }).should('be.checked');
        })
        it('click register button ', function () {
            cy.get('[data-component-identifier="wm-validating-form__submit"]').should('be.disabled')
        });

    });

    context('user cant sign up with 5chr pw ', function () {
        before(() => {
            cy.visit('https://dev.workmarket.com/register/campaign/10081C503B209A0C8E7F05FDCC1AA98D4C904DEEF5F73265CAE38C744E7EAD3E');
            cy.get('[tabindex="0"] > :nth(1)').contains('Join as an individual');
            cy.get('[tabindex="0"] > :nth(1)').click();
        });

        it('type first name', function () {
            cy.get('input[name="firstName"]').type('Kazi')
        });

        it('type Last name ', function () {
            cy.get('input[id="lastname"]').type('Naznin')
        });
        it('type email address', function () {
            cy.get('input[id="email"]').type('qa+candidatetest@workmarket.com');
        });
        it('type wrong password ', function () {
            cy.get('input[id="password"]').type('Ca123')
        });

        it('click the checkbox', function () {
            cy.get('[type="checkbox"]').check({ force: true }).should('be.checked');
        })
        it('click register button ', function () {
            cy.get('[data-component-identifier="wm-validating-form__submit"]').should('be.disabled')
        });

    });

});
