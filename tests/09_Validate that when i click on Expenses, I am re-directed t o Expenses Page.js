import { Selector }from 'testcafe';
fixture `Dasbhboard Link`
    .page `https://enabillstaging.saratoga.co.za`;
    
    const name = Selector('#UserName');
    const pass = Selector('#Password');
    
test(`Expenses`, async t => {
    await t
                .typeText(name,'patiencek@saratoga.co.za')
                .typeText(pass,'3@5@yKk8PflBjaV8ZIeI')
                .click(Selector('#LogOnSubmit'))
                .click(Selector('#menuItems').find('a').nth(2).find('div'))
    
});