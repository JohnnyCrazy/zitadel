ARG NODE_VERSION=18

#######################
## With this step we prepare all node_modules, this helps caching the build
## Speed up this step by mounting your local node_modules directory
## We also copy and generate the source code
#######################
FROM node:${NODE_VERSION} as npm-base
WORKDIR /console

# Dependencies
COPY console/package.json console/package-lock.json ./
RUN npm ci

# Sources
COPY console .
COPY --from=zitadel-base:local /proto /proto
COPY --from=zitadel-base:local /usr/local/bin /usr/local/bin/.
COPY build/console build/console/
RUN build/console/generate-grpc.sh

#######################
## copy for local dev
#######################
FROM scratch as npm-copy
COPY --from=npm-base /console/src/app/proto/generated /console/src/app/proto/generated

#######################
## angular lint workspace and prod build
#######################
FROM npm-base as angular-build

RUN npm run lint
RUN npm run prodbuild

#######################
## Only Copy Assets
#######################
FROM scratch as angular-export
COPY --from=angular-build /console/dist/console .
