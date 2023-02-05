### Bnk Solutions's NodeJs Frontend Assessments

__Technologies__

- [ReactJS](https://reactjs.org/) Frontend library version 18+
- [Mobx](https://mobx.js.org/) Library for state management
- [Redux Toolkit](https://redux-toolkit.js.org/) Library for state management based on redux
- [Antd](https://ant.design/) / [MUI](https://mui.com/) Component library

<hr>

#### General Information
We are going to build some simple websites:
 - Thermal IoT
 - BnK Market Admin
 - BnK Market

## User stories

|Requirements|User Story|
|---|---|
|User authentication|As a customer,  I should be able to login email and password|
||||
|Product list|As a customer, I would like to see all product of store|
||||
|Checkout|As a customer, I would like to checkout products which is in stock|
||||
|Order history|As a customer, I would like to know my order history|
||||
|User logout|As a customer, I should be able to logout|

## Requirements

__Knowledge__

- The server should be written in NodeJs/ NestJs and Typeorm. The client will consume RESTFUL APIs provided by the server.
- Follow coding best practices.
- Understanding of API Designs
- Understanding of NestJS, API design, ORM, SQL ...
- Show considerations for Speed, Efficiency, and Scalability in your APIs and Database design and coding
- Database migration
- Environment variable

__Practice__

1. Build Structure
    - Authorization Guard
    - Error Handling + Response Interceptor
        - All responses must be the same format

            ```shell
            {
                "systemCode": SYSTEM_CODE,
                "message": "", 
                "data": {}
            }
            ```

        - Data field is different on each API and SYSTEM_CODE is enum
    - All unexpected exceptions must be caught and return as

        ```shell
        {
            "systemCode": SYSTEM_CODE.INTERNAL_SERVER_ERROR,
            "message": "Error detail come here",
        }
        ```

    - Structure database
        - Configuration
        - Tables must have key and foreign key
        - Create a relationship(if needed)
        - Database must be init and update via script
    - Input validation
        - All API input must be valid typing and no redundancy
    - Create swagger
