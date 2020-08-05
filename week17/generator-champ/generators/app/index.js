const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('babel', {
            type: Boolean,
            description: '是否启用babel',
            default: true
        })
    }

    initializing() {
        console.log('this is init')
        console.log(this.destinationRoot())
        console.log(this.sourceRoot())
        // console.log(this.destinationPath())
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('public/index.html'),
            {title: 'Templating with Yeoman'}
        )
    }
}
