# Myōbu Website 

https://myobu.io/

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Build and run locally](#build-and-run-locally)
  - [Prerequisites](#prerequisites)
- [Steps](#steps)
- [Build](#build)

<!-- /code_chunk_output -->


## Build and run locally 

### Prerequisites

* Node Package Manager (npm): suggested to install [nvm](https://github.com/nvm-sh/nvm) to easily manage multiple node and npm versions with it.
  
  ```bash
  nvm install lts/erbium # Install nodejs lts v12
  nvm alias default lts/erbium
  ```

* yarn: run `npm install -g yarn` to install the yarn command.  

## Steps

1. Install necessary npm packages

```bash
yarn install
```

2. Run and serve locally

```bash
yarn serve
```

## Build

```bash
yarn build
```