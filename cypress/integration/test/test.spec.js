
describe('Tam transactions detail', () => {
    it('successfully loads', () => {
        cy.visit('/');

        cy.get('.acceptAll-W4Y0hWcd > .content-YKkCvwjV').click();
        // cy.get('#\31 m').click();
        cy.get('.tabs-AMXsejLP #\\31 m').click();

        console.log(cy.get('.tablesWrapper-RaUvtPLE > :nth-child(1)'));
        cy.get(':nth-child(1) > .tableWrapper-lGguCZQa > .table-lGguCZQa').should(($input) => {
            console.log($input.val());
            // console.log($input.get()[0].children);
            // console.log($input.get()[0].children[1].children);

            console.log($input.data());
        });
        cy.get(':nth-child(1) > .tableWrapper-lGguCZQa > .table-lGguCZQa').should(($input) => {
          console.log($input.val());

            console.log($input.get()[0].children[0].children[1].children[1].innerHTML);
            console.log($input.data());
        })
        cy.get(':nth-child(1) > .tableWrapper-lGguCZQa > .table-lGguCZQa > tbody > :nth-child(2) > :nth-child(2)').should(($input) => {
            console.log($input.val());
            console.log($input.get());
            console.log($input.data());
        });

        cy.request('POST' ,'http://daco:3000/daco', {}).then(response => {
           console.log('fake request', response);
        });
    });
});
