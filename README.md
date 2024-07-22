# Monor
[Nx workspace](https://nx.dev) is around for quite a time now amongst the others such as [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) and [Turbo repo](https://turbo.build/) that aims to take an approach on having enhanced collaboration through visibility by allowing teams to better communicate and collaborate. In a large team, this is specially beneficial. Developers can see the entire codebase, understand the context of their work better and make cross-project changes effortlessly.

## The WHY?
Teams tend to choose mono repo over poly repo to have;
1. **Improved collaboration and code sharing:** A monorepo makes it easier for teams to see all the codebase in one place, reuse code across projects, and work on related changes together.
2. **Simplified dependency management:** With all code in one place, there is no need to worry about version conflicts between separate repositories. 
3. **Standardization and visibility:** A monorepo makes it easier to enforce coding practices and tooling across the entire codebase, as well as see how all the different parts of the system fit together.


> [!Note] 
> However, it's important to consider the potential drawbacks of monorepos as well like increased repository size and complexity overtime.


## The HOW?
Let's get thorough understanding of workings of various JS projects inside Nx monorepo. We shall take gradual development approach where we will house various frontend and backend projects inside this repository. We shall aim for;

1. How to house various projects inside Nx workspace
2. How to implement the concept of reusable components and utilities 
3. How to prepare projects to production with CICD on github

## Tech Stack
We shall maintain this repository having some initial tech stack in mind, however we shall keep updating gradually as per our need.
1. [NextJS](https://nextjs.org/) for frontend projects
2. [ReactJS](https://react.dev/) for frontend proejcts
3. [NestJS](https://nestjs.com/) for backend projects
4. [mongoDB](https://www.mongodb.com/) for storing our data
5. REST & [Graphql](https://graphql.org/) API
6. [AuthJS](https://authjs.dev/) or [NextAuth](https://next-auth.js.org/) for authentication and authorization

We shall keep up with the list as our tech stack grows or shrinks.

## Useful Nx commands
Have a look at detailed [Nx API commands](https://nx.dev/nx-api/nx) list for further info. We shall list commands that we used in this repo here.

