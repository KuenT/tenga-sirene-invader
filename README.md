# Sirene Invader

This Node.js code reads data from a large csv file, spilts it into smaller chunks of data and store into MongoDB database using parallel worker tasks to improve the effeciency of the process

## Prerequisites

Install MongoDB on your system

- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/): `npm i -g pm2`

## Getting started

Download the code

```shell
npm install
npm run start
```
Check the logs folder to see for any errors in the workers in the ./logs/error.log
Check the logs folder for the worker execution logs in ./logs/workerlog.log
Once execution is completed, run the below from a new bash/terminal to delete all the running workers

```shell
pm2 delete all
```
Other handy pm2 commands for monitoring or viewing logs of the running processes.

```shell
pm2 monit
pm2 logs  
```

![](https://lh3.googleusercontent.com/DxaZ6nwS0WxbgLRe-elD7u_smIo1eV3alCMDRZoBg8DQ9y_BCWhTAXWYXlLsCHz2EWaJ7nE9RTEvJgmw7wSO6TxTf7Pylxc2CDS0hZ3Nn0pb3mVKD6WmsuWDDtbtc7tTmN_K6_oDqMdCQmyoQQAM14RVhCAWK6lzgFTyrgi9vv6fw3dhlyA-qzphWi_F9Dydjo45w8KcAPFwd4YeJNxbBLojXjp9oyl6qzIg4I9oLSJqQGyY0JK43LDbUpPwdZ6MxTLFyYpX_QqylT_k74B2UM6bPITNZpZbda1uhWXTeFh2eifYBTF_J6hpR6o9w9KuoT75Pafi8-4vvKy1wowvNn6lnenOBqMfbgoIr0ceVkXqFOkQ6yIOg-xi1QxZochQQNJT_H7iiy7NJCjYFIvdyMrVjZRjpdKvW-qsOsXgqtC9ke7v2JxdsCi-7zQ6JBC68AXVCZU5F1mGSYha174nS4mHp3HoASu64bvnH-Sx39IGHeTm_Y6F8TGdpxYmn8yMSwp1oIaqoU2uaB7bK-4TSsM3DEhEkT26eyAM6NCtOrRhh6Bb0rlBBWIb7hyarBy_aQVOzqk6YdU6QwE4dFbZsipX5TtePMZAgwL0tG-40kI54YMcZslf3vf-QtCvwQDe4YKXhQJ0HcD8nBNxcAUCTi2PjsXZvIXmaS3f1Of0USQBxxwkWbGnLevNpADBObN6a-AxuZA_jtxpnhmZuX4kIhzA=w2232-h1426-no?authuser=0)