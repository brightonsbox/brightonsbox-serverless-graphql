# brightonsbox-serverless-graphql
An example of building a serverless GraphQL API using NodeJS and Apollo.

As a time-poor father of a 2 year old I apologise in advance for the 
succinct nature of this README. This project serves as an introduction
for me to implementing a GraphQL server using NodeJS and TypeScript.

The goal is to provide details of my CV via serverless GraphQL API. 

I'm using NodeJS version 18.15.0 (Hydrogen LTS). I use NVM for version
management locally.

I have decided to leverage the [Apollo](https://www.apollographql.com/)
library to quickly get something working.  It is open source (so it 
doesn't cost me anything), yet is used by many in industry. I'm following
their documentation to get started.

At this point, I have spun up a quick working example. To run:

```shell
npm install
npm run dev
```

Then navigate to http://localhost:4000 to reach the Sandbox. 

This can also be run using the `serverless` framework as described
[here](https://www.apollographql.com/docs/apollo-server/deployment/lambda).

To demonstrate it running locally and responding to an example query
defined in the [example-query.json](example-query.json) file, run:

````shell
npm run serverless-local
````

To deploy to your AWS account, run:

```shell
export AWS_SECRET_ACCESS_KEY=...
export AWS_ACCESS_KEY_ID=...
```

with relevant credentials, then run:

```shell
npm run serverless-deploy
```

To remove from your AWS account, run:

```shell
npm run serverless-remove
```
