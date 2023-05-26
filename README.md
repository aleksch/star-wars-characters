Installation:
`yarn install`

To start server:
`yarn dev`

Used packages:
[React](https://react.dev/), [react-router-dom](https://reactrouter.com/en/main), [antd](https://ant.design/)

### Project structure
`src`
`├── components`               - [Components folder](#componets)
`├── mocks  `                  - some mocked data
`├── modules`                  - [main logic in our aplication](#modules)
`├── pages`                    - react components that are used in routing 

### Componets

We store components that can be both reusable and not.
Components are assembled from the design system in this case [antd](https://ant.design/).
In these components we can use the context we need.
The usual structure looks like this -

`component-name`
`├── component-name.tsx`        - component file
`├── use-component-name.ts`     - component logic separated from its display
`├── index.ts`                  - used to export from a component

### Modules
Сontains the main business logic of the application

Structure:
`modules`
`├── infra.tsx`             - application logic that can be used by all modules and other parts of the application
`├──├── data-provider`      - some templates for our data-priveders
`├──├── data-provider`      - some templates for our mappers
`├──├── value-object`       - when our front-end application works with data, it can use the types of this data only from this folder (in this case, `character.value-object.ts` and `people-result.value-object.ts` are described here)
`├── module-name`
`├──├── interface` - contains files used to work with react components
`├──├──├── use-module-name.ts` - file with the main logic (get data from adapter and store it)
`├──├── mappers` - map data from data-provider to value-object
`├──├── module-name.adapter` - combine data from data-providers
`├──├── module-name.data-provider` - contains classes used to work with data sources (https://swapi.dev/api and localStorage in this case)
`├── use-module-name-context` - use module in our componets (depend of `module-name/interface`)

