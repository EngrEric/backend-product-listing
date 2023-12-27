# Product Listing GraphQL API
This backend infrastructure for a product listing application is built with NestJS, a powerful and extensible Node.js framework. The backend implements a GraphQL server using Apollo Server to handle product-related data. It provides functionalities such as fetching a list of products, retrieving detailed information about a specific product, and integrating postgresql as data source for seamless frontend development.

## Installation

```bash
$ yarn install
```

## Running the app
- Run a local PostgreSQL server
- Update the `.env` file with your database connection details

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Project Structure
```
backend
├── dist
├── node_modules
├── src
│   ├── db
│   │   ├── constants.ts
│   │   ├── db.module.ts
│   │   └── db.providers.ts 
│   └── products 
│       ├── dto 
│       │   ├── create-product.input.ts 
│       │   └── update-product.input.ts 
│       ├── entities 
│       │   └── product.entity.ts 
│       ├── product.providers.ts  
│       ├── products.module.ts  
│       ├── products.resolver.spec.ts  
│       ├── products.resolver.ts  
│       ├── products.service.spec.ts  
│       └── products.service.ts   
├── app.controller.specs.js   
├── app.module.js   
├── app.resolver.js   
├── app.service.js   
├── main.js    
├── test    
├── .eslintrc.js    
├── .gitignore    
├── .prettierrc    
├── nest-cli.json    
├── package.json     
├── README.md     
├── tsconfig.build.json     
├── tsconfig.json     
└── yarn.lock      
```