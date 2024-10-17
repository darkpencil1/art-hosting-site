# Art hosting e-commerce site
## See at: https://art-hosting-site.onrender.com

This web app is a hobby project where my goal is to combine an art portfolio and eCommerce site.
Special flavour is given by the strong thematic elements pulled from the art itself.

### Notable tools used: 
- TypeScript
- React
  - Styled Components
  - Cypress
  - TanStack  
- NodeJs
  - Prisma
- PostgreSQL
- GitHub Actions

## Running the project
### Requirements
For running the project with docker you'll need
- Docker and docker compose

### Option 1: Run the project with docker
  - Pull the project locally on your machine
  ```git clone https://github.com/darkpencil1/art-hosting-site.git```
  - In the root directory run
  ```docker-compose -f docker-compose-development.yml up```
  - See the project by navigating on your browser to [localhost:3000](http://localhost:3000/)

### Option 2: Run the project by launching the processes by yourself
  - run ```npm install``` in both frontend and backend folders
  - start client by running in frontend folder ```npm start```
  - start server by running in backend folder ```npm run dev```
  - See the project by navigating on your browser to [localhost:3000](http://localhost:3000/)

## Structure
### backend
Contains code for running NodeJs. It's further split into controllers that provide functions for spesific content types and routers that serve endpoints. 
Additional code is split into separate helper folder to keep the codebase clean.
Uses Prisma for database operations. Currently stores page views for individual products.

### frontend
Has the code for running React client. Bundling is done by vite. src contains components folder with Pages and the actual components split per page that is using them. Additional the client utilizes React context for managing state for cart and setting the currently viewed product. Context (in src/state/) is made lightweight by using TanStack (in src/hooks/) to handle fetching and state management for data originating from backend.
Site uses lot of animations, these are done with the excellent animation library done by these folks: https://www.framer.com/motion/
Styling is done with styled-components library.

### Typing
Types shared by frontend and backend and found in project root at shared/. Frontend further has types it only uses at src/resources/interfaces/ 

### GitHb Actions
Actions run Cypress tests for frontend on each push to main branch.

## Credits
Design, code and art by darkpencil1
