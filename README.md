## Getting Started

Weather App made using 
NextJS 13.5
Typescript
Tailwind
Tremor-react for Cards and Graphs
GraphQL with Apollo and StepZen
OpenAI integrated for custom summaries of today's weather in the city

OpenAI execution code commented out to avoid charges

### Installation & Running Locally
npx create-next-app@latest

npm run dev
localhost:3000

.env file should have:

API_URL=
NEXT_PUBLIC_STEPZEN_API_KEY=
OPENAI_API_KEY=

Setup StepZen account
cd into stepzen folder and login in with credentials. 
stepzen init to create api endpoint
stepzen import curl to create GraphQL schema
stepzen start to deploy api

Works for every country except the US. Too many cities stalls retrieval of list. Need to find another solution