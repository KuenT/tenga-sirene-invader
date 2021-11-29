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

Once every CSV file has been created, this message should appear at the very bottom of
the file. It tells you which commands you should run next !
![](https://lh3.googleusercontent.com/HrNiI589Y2lztIVcJzQ8dYHeHflPvvN7iBIkHhoOpYR49AGnMcbcgT0Dt735L61vY3AzR1Hm0JLn2qMpvUyeH7C8KSUm6WC8bQ4-S4gwktvdgZy1S8xBq8a-Ty4uqgseG_XbYkeIy3NcLCiTfiH5J2b5dlvPwnyvBR9lV_fIFZWp1loBp_myJ-MsnKSavUK2f3LPoBEluoTmHImEZXuPLmWt9mr1pPZfcTyCT55mtPqXjyIYdVioxxek0CzFqS_IXxrQJVdGwpNY40aq1dQcFr0wpziCeZR3FDlp2MlnR2BoKTs1ObC_bHdnzMQ410nlN5F_8aGzjKcqwpVUugQhCXLwvm2ok_QG2UJo792hEWxzIs6PsRMWFm4J1R96RtWLFef9aAV_uMqeKzWzLaBGJdcWkG9gkrr_PVAeJSlS4uA1FmxyCyfqnb7l2xQWToOTXbdtFS8ugFjY2d5rBrf78AL1B0FoSapzkm2-MYJYTpMQXOBP0ip8H1BMp_nQS491ZvQUd78dG3xU_U8Ge5Xb6FSFs21bUg1QRRDx08wh2gzPaGDRGqzU3ITGYnHuqtelN8WI-QYFmwmx9a3qfN7FNTC3qxDbFATNE2SrlrX4znow2ufH1z11Jzi6jc4lC5lH-3ZA7Y2OrPXogdsMsKJTxzM_zmz1Wh-ATYy13j5xYdfM33fnR9vIzulEN-xks36Ut2BUnhTyNzpWz0WwmXPNdD87=w1450-h1302-no?authuser=0)

MongoDB after the run
![](https://lh3.googleusercontent.com/DxaZ6nwS0WxbgLRe-elD7u_smIo1eV3alCMDRZoBg8DQ9y_BCWhTAXWYXlLsCHz2EWaJ7nE9RTEvJgmw7wSO6TxTf7Pylxc2CDS0hZ3Nn0pb3mVKD6WmsuWDDtbtc7tTmN_K6_oDqMdCQmyoQQAM14RVhCAWK6lzgFTyrgi9vv6fw3dhlyA-qzphWi_F9Dydjo45w8KcAPFwd4YeJNxbBLojXjp9oyl6qzIg4I9oLSJqQGyY0JK43LDbUpPwdZ6MxTLFyYpX_QqylT_k74B2UM6bPITNZpZbda1uhWXTeFh2eifYBTF_J6hpR6o9w9KuoT75Pafi8-4vvKy1wowvNn6lnenOBqMfbgoIr0ceVkXqFOkQ6yIOg-xi1QxZochQQNJT_H7iiy7NJCjYFIvdyMrVjZRjpdKvW-qsOsXgqtC9ke7v2JxdsCi-7zQ6JBC68AXVCZU5F1mGSYha174nS4mHp3HoASu64bvnH-Sx39IGHeTm_Y6F8TGdpxYmn8yMSwp1oIaqoU2uaB7bK-4TSsM3DEhEkT26eyAM6NCtOrRhh6Bb0rlBBWIb7hyarBy_aQVOzqk6YdU6QwE4dFbZsipX5TtePMZAgwL0tG-40kI54YMcZslf3vf-QtCvwQDe4YKXhQJ0HcD8nBNxcAUCTi2PjsXZvIXmaS3f1Of0USQBxxwkWbGnLevNpADBObN6a-AxuZA_jtxpnhmZuX4kIhzA=w2232-h1426-no?authuser=0)

If you want to delete the CSV files created during the split, you should run the following command :
```shell
rm -r data/generated/*  
```