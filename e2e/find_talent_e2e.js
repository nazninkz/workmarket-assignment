describe('find talent test cases', function () {

    context('user visiting star profile from search result page ', function () {
        before(() => {
            cy.visit('https://dev.workmarket.com/login');
            cy.get('input[id="login-email"]').type('qa+candidatetest@workmarket.com');
            cy.get('input[id="login-password"]').type('candidate123');
            cy.get('#login_page_button').click();
        });
        it('click find talent button', function () {
            cy.get('div:nth-child(2) > div:nth-child(2) > a > div > div ').click('center')
        });

        it('search typeahead Placeholder text', function () {
            cy.get('#input-text').should('have.attr', 'placeholder', 'Search for workers, companies, job titles, and skills')
        });

        it('search test in the search typeahead', function () {
            cy.get('#input-text').type('test{enter}');
        });

        it ('verify the test text contain each person card', function(){
            cy.get('#search_results').then(items => {
                for (let i = 0; i < items.length; i++) {
                    cy.wrap(items[i]).should('contain', 'test')
                }
            });
        });

    });
});
