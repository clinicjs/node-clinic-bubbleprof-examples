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
We only need the server for this example to work. As mentioned above, all requests are rendered by the server.
```
clinic bubbleprof -- node src/server
```
In a second terminal run the [stories](./stories.js) script
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
