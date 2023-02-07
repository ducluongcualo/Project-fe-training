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

### User stories
#### Thermal IoT
##### Device site
|Requirements|User Story|
|---|---|
|Device authentication|As a user,  I should be able to login to device using deviceId and password|
||||
|Device status|As a user, I would like to see device current status of temperature and humidity|
||||
|Device signal view|As a user, I would like to see signal which the device send to server in real time |
||||
|Device starting|As a user, I need a button to start and to stop sending signal to server|
||||
|Device stimulator|As a user, I would like to have button to stimulate anomaly and threshold signals for humidity and temperature|
||||
|Device stimulator|As a user, I would like to have button to stimulate anomaly and threshold signals for humidity and temperature|

##### Admin site
|Requirements|User Story|
|---|---|
|Admin authentication|As an admin,  I would like to login using my email and password|
||||
|Admin dashboard|As an admin,  I should be able to view my overall system statuses and statistic|
||||
|Device starting|As a customer, I need a button to start and to stop sending signal to server|
||||
|Admin device searching|As a admin, I would like to search my device via input device ID |
||||
|Admin device monitoring|As a admin, I would like to observe my device status in realtime |

#### BnK Market Admin
|Requirements|User Story|
|---|---|
|Admin authentication|As an admin,  I should be able to login email and password|
||||
|Product list|As an admin, I would like to manage my product list|
||||
|Product detail|As an admin, I would like to manage my product detail|
||||
|Customer list|As an admin, I would like to view customer list|
||||
|Customer detail|As an admin, I would like to edit customer detail info|
||||
|Order list|As an admin, I would like to manage my customer's order|
||||
|Order detail|As an admin, I would like to view customer 's order detail|

## Requirements

__Knowledge__

- Member must know how to set up and use antd or mui component library.
- Member must know how to reuse component and UI templates.
- Know how to use hooks correctly to handle state, reaction and memorization.
- Know how to manage app state efficiently.
- Show considerations for performance, efficiency and clean structure.
- Follow coding best practices.
- Know how to handle i18n
- Environment variable

__Practice__
1. Project must be Typescript based
2. Error Handling
3. All unexpected error must be catch to prevent system crashed
4. UI template and common component must be reusable
5. API requests must be as minimal as possible
6. Render time must be on purpose only
7. Lighthouse points must be above 7.5 except SEO
8. App state management must be cleared and easy to maintain
