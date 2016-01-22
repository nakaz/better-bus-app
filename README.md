# Better Bus App

A remake of Honolulu's DaBus app using ~~native Swift~~ **React-Native** for client-side application and a **Node.js** server for back-end API requests.

*Update (01/21/2016)*: Switched to React-Native as an easier transition to learning both React and Swift/Obj-C at the same time. Also will be able to build for iOS and not leave behind Android users behind. 

### Get Started

Make sure you have React-Native CLI installed globally. 

```bash
npm install -g react-native-cli
``` 

Then install the node dependencies with `npm install` for now. 

To start the app run `npm run start` or `react-native start` in the root. Open project.xproject with in xCode. This is currently an iOS-first project, then Android. 

Theres no need to run the server since its already online at `calm-everglades-9373.herokuapp.com`. Requests are located below. 

However if you want to run it locally: `npm run dev` will start it up. You'll need the `.env` file so it'd be best to use the online server.  

### API Requests (Server)
These are all `GET` HTTP Requests and will return a `JSON` file as a response.

#### Arrivals
`/arrivals/stop/:param`: Parameter is a `stop number` (found on the sign or geo-location). Will `GET` an unkown amount of bus arrivals at stop ID.

#### Vehicle
`/vehicle/:param`: Parameter is a `Vehicle ID` found on the bus. Will `GET` information based on vehicle ID.

#### Routes
`/routes/num/:param`: Parameter is the `number/text` of the bus route. 

For Ex. (in bold)
  * '**A** CityExpress! WAIPAHU'
  * '**1** Kalihi Transit Center'
  * '**6** UNIVERSITY - Woodlawn Drive')
Will `GET` all bus with the route number and their start/end points.

`/routes/name/:param`: Parameter is the `name` of the target point.
For ex. (in bold) 
  * 'A **CityExpress! WAIPAHU**'
  * '1 **Kalihi Transit Center**'
  * '6 **UNIVERSITY - Woodlawn Drive**')
Will `GET` all bus routes matching name in query.
