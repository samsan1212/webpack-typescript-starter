# Webpack Typescript Starter #

Love **Webpack**? Love **Typescript**? Feel frustrated of starting a Webpack + Typescript project?

***Webpack Typescript Starter comes to help*** :muscle::muscle::muscle:

## Philosophy ##

Webpack Typescript Starter aims to ease the pain of setting Webpack + Typescript project.

With this starter, you can easily set up a

* NodeJS project
* Frontend project
* Small script migrating to an existing HTML template engine

Although Webpack Typescript Starter can be the starter of a frontend project,
it **does not compete** with those wonderful frontend starters, e.g.
[Create React App](https://create-react-app.dev/),
[GatsbyJS](https://www.gatsbyjs.org/),
[VueJS CLI](https://cli.vuejs.org/),
[Angular](https://angular.io/guide/setup-local)

Webpack Typescript Starter only provide an environment of Webpack + Typescript, and letting you guys do your magic in there :wink:

## Getting Started ##

1. Clone this project

   ```bash
   git clone https://github.com/samsan1212/webpack-typescript-starter.git
   ```

   OR create a new repository from this template by navigating to this [link](https://github.com/samsan1212/webpack-typescript-starter/generate "Github generate from template repository")

2. Under the project root directory, run

    ```bash
    npm install
    ```

    OR

    ```bash
    yarn
    ```

3. Bob's your uncle:tada::tada::tada:

   You can perform your magic inside **```src```** folder

## Configurations ##

### HTML Template file ###

In the directory ```webpack/plugins```, there is a template HTML file ```html-template.html```.

The starter generates a HTML file ```bin/index.html``` with the script tags of the bundled javascript files, using this template HTML in the compile time.

If you need the HTML file containing only the script tags of the bundled javscript files, you can empty the content inside the template HTML. *(Especially for those who want to migrate custom Javascripts to existing HTML template engine)*

### noHTML ###

In ```package.json```, there is a config ```noHTML```

If you are writing NodeJS program, you probably won't need the generated HTML file.

In this case, you can type ```yes``` in the config ```noHTML```,

```json
"config": {
  "noHTML": "yes"
}
```

then no HTML will be emitted during the compile time.
