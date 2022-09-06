
// В тебе має бути клас Admin з такими методами
//  - метод має повертати всі ключі обєкту options
//  - використовуючи метод вище написати метод який має повертати всі обєкти buttons та texts
//  - написати метод який повертає змерджений масив двох полів buttons та texts
//  - написати метод який має повертати всі нейми поля texts

const arr = [
  { title: 'admin', options: { buttons: [{ name: 'edit', type: 'submit' }, { name: 'save', type: 'submit' }], texts: [{ name: 'Edit', show: true }, { name: 'Save', show:false}] } },
  { title: 'admin 1', options: { buttons: [{ name: 'edit', type: 'submit' }, { name: 'save', type: 'submit' }], texts: [{ name: 'Edit', show: true }, { name: 'Save', show:false}] } },
  { title: 'admin 2', options: { buttons: [{ name: 'edit', type: 'submit' }, { name: 'save' }], texts: [{ name: 'Edit', show: true }, { name: 'Save', show:false}] } },
  { title: 'admin 3', options: { buttons: [{ name: 'edit', type: 'submit' }, { name: 'save', type: 'submit' }] } }
]

class Admin {
  constructor (data) {
    this.options = data.options
    this.texts = data.options.texts
    this.buttons = data.options.buttons
  }

  getOptionKey () {
    return Object.keys(this.options);
  }

  getObjects () {
    return this.getOptionKey().map(key => this.options[key]);
  }

  mergeOptions () {
    return [...this?.buttons, ...this?.texts ??[]]
  }

  getTextNames () {
    return this.texts?.map(item => item.name) ??  'No data';
  }
}

const admin = new Admin(arr[1]);
admin.getOptionKey();
admin.getObjects('buttons');
admin.mergeOptions();
admin.getTextNames();
