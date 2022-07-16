module.exports = plop => {
  plop.setGenerator('generate', {
    description: 'generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Assign a name to your new component!'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.module.css',
        templateFile: 'plop-templates/styles.hbs'
      }
    ]
  })
}
