# Argent Bank

## Introduction

Argent Bank is a new start-up in the banking industry.

## Installation

### Front-end Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) (or your preferred IDE)
- [Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [NodeJS (**version 18.15.0**)](https://nodejs.org/en/) - includes NPM 9.5.0
- [NPM (**version 9.5.0**)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Install and launch the front-end

#### 1. Fork this repository

- Click on the fork button in the top right corner of the [repository](https://github.com/htaylor91/p13_taylor_heather) page.

#### 2. Clone the forked respository to your local machine

- Replace the url below with the url of your forked repository.

    `https://github.com/your-username/project-name.git`

- Open a terminal window and navigate to the directory that will store your project.

    ```bash
    cd project-name
    ```

- In your terminal, run the command below. The dot at the end will clone the project into the current directory.

    ```bash
    git clone https://github.com/your-username/project-name.git .
    ```

#### 3. Install the front-end dependencies

- In your terminal, run the commands below to install the dependencies listed in the package.json file.

    ```bash
    cd Front
    npm install
    ```

#### 4. Launch the front-end

- In your terminal, run the command below to launch the project.

    ```bash
    npm run dev
    ```

    The front-end of the project will launch in your browser at `http://localhost:5173`

    ---

### Install and launch the back-end

You can skip forking and cloning the back-end repository, since it is included in this repository.

1. Before installing the back-end dependencies:

    Open a new terminal window, and navigate to the back-end directory from the root of your project:

    ```bash
    cd Back
    ```

2. See the instructions in the [Back-end ReadMe](https://github.com/htaylor91/p13_taylor_heather/tree/master/Back#readme) to install the dependencies, launch the back-end, populate the database, and see the API documentation.

3. In the .env file of the back-end repository, verify that you have the updated DATABASE_URL:

    ```bash
    # original URL
    DATABASE_URL="mongodb://localhost/argentBankDB"

    # updated URL
    DATABASE_URL="mongodb://127.0.0.1/argentBankDB"
    ```

---

## Front-end Technologies

[![Vite](https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=yellow&labelColor=000)](https://vitejs.dev/)
[![React JS](https://img.shields.io/badge/React_JS-61dafb?style=for-the-badge&logo=react&logoColor=61dafb&labelColor=000)](https://react.dev/)
[![ReactRouter](https://img.shields.io/badge/React_Router-ca4245?style=for-the-badge&logo=reactrouter&labelColor=000)](https://reactrouter.com/en/main)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white&labelColor=000)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&labelColor=000)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=1572b6&labelColor=000)
![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&labelColor=000)
