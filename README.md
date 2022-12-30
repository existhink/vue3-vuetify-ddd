# BCA mySaku Admin 

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn or yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Folder Structure

```
    /src
        /modules
            /app
                /ui
                    /components
                /store
                /router
                /constant
                /assets
                /composable
                /helper
                ...
            /other
                /ui
                    /components
                /store
                /routes
                /constant
                /composable
                ...
        /plugins
    /tests
        /e2e
        /unit
```

#### Modules App

Berisi inti aplikasi vue dan komponen umum lainnya

#### Plugins

Berisi konfigurasi library 3rd party yang digunakan

#### Rules

1. Store -> moduleName.store.js
2. Routes -> moduleName.route.js
3. UI Page -> ModuleNameUI.vue [Page]
4. UI Component -> components/ModuleName.vue [Component]
5. Constant -> moduleName.constant.js
6. Composable Method Name -> composableName_methodName
7. State Name -> moduleName_stateName
   ....

#### Comments

Jika ada methods di setiap component atau ada suatu business logic yang memang complex, direkomendasikan untuk menggunakan comment.
Berikut format comments yang sering digunakan di project ini:

```js
/**
 * @description Some function
 *
 * @param {string} string
 *
 * @return {string} string
 */
const func = (string = '') => {
  return string;
};
```

Comment menggunakan dokumentasi dari plain javascript [https://javascript.info/comments](resource)

#### Dependencies & Libraries
| Library               | Description                    |
|-----------------------|--------------------------------|
| vue-router            | Router                         |
| vuetify               | UI Library                     |
| vue3-easy-data-table  | Data Table                     |
| keycloak-js           | Keycloak Adapter               |
| pinia                 | State Management               |
| @vuelidate            | Form Validator                 |
| axios                 | Http Client                    |
| lodash                | Helper Array/Object            |
| moment                | Helper Date                    |
| @sentry/vue           | Error & Performance Monitoring |
| @vueuse               | Composable Helper              |

