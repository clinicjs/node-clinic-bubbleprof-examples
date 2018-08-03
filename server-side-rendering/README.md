# SSR Example
This example uses code similar to the [react-pwa](https://github.com/nearform/react-pwa) and [autocannon](https://github.com/mcollina/autocannon).  There are Two autocannon scripts that will do the following:

1. request stories via the happy path
2. request stories with an event loop issue
 
Each request is rendered on the server.

## Dependencies
[node-clinic](https://github.com/nearform/node-clinic)

[autocannon](https://github.com/mcollina/autocannon)

[react-pwa](https://github.com/nearform/react-pwa)

```
npm i -g clinic autocannon 
```

```
cd server-side-rendering
npm i
```

## Running the example
There are two servers involved with this example. 

1. contains the API for doing the SSR.
2. contains the API that the first server requests data from.

As mentioned above, all requests are rendered by the server.

#### starting the data server
```
npm run start:data
```
#### starting the SSR server with bubbleprof

```
clinic bubbleprof -- node server
```
Then run the autocannon script to request the stories.
```
node server-side-rendering/stories.js
```
Once autocannon completes its run you should see results like similar to what is below:
```
Running 10s test @ http://localhost:3000
10 connections
...
40 requests in 10s, 474 kB read
```
At this point, you can stop the server that bubbleprof is gathering details about.  Once bubbleprof finishes its analyses of the data it will open the UI with a visualizaiton of the results.
