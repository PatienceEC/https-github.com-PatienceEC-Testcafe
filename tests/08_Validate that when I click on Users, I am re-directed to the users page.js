import { Selector } from 'testcafe';
fixture `Dashboard Link`
    .page `https://enabillstaging.saratoga.co.za/`;

    const name = Selector('#UserName');
    const pass = Selector('#Password');
    
test(`Users`, async t => {
        await t
                .typeText(name,'patiencek@saratoga.co.za')
                .typeText(pass,'3@5@yKk8PflBjaV8ZIeI')
                .click(Selector('#LogOnSubmit'))
                .click(Selector('#menuItems').find('a').nth(3).find('div'))
    
    
});