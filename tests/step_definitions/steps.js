const { I } = inject();
const execSync = require('child_process').execSync;

Before(() => {
  execSync('cd ../backend && NODE_ENV=test node fixtures.js');
});


Given('я нахожусь на странице входа', () => {
  I.amOnPage('/login');
});

When('я ввожу {string} в поле {string}', (value, fieldName) => {
  I.fillField({id: fieldName}, value);
});

When('я нажимаю на кнопку {string}', (button) => {
  I.click({id: button});
});

Then('я перехожу на главную страницу', () => {
  I.amOnPage('/');
});

Then('я перехожу на страницу создания фотографии {string}', (path) => {
  I.waitForElement('#userDisplayName', 20);
  I.amOnPage(path);
});

When('я выбираю файл {string}', (id) => {
  I.attachFile(`input[id=${id}]`, './data/test.jpg');
});


Then('я вижу текст {string}', (text) => {
  I.see(text);
});

Then('я вижу текст удаленной фотографии {string}', (text) => {
  I.waitForElement('.Toastify__toast-body', 50);
  I.see(text);
})
