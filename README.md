# Better Bus App

A remake of Honolulu's DaBus app using ~~native Swift~~ **React-Native** for client-side application and a **Node.js** server for back-end API requests.

*Update (01/21/2016)*: Switched to React-Native as an easier transition to learning both React and Swift/Obj-C at the same time. Also will be able to build for iOS and not leave behind Android users behind. 

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
