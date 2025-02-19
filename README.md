# Node.js http server port already in use error

This repository demonstrates a common error in Node.js where an HTTP server fails to start because the specified port is already in use.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a robust solution.

## Bug

The `bug.js` file attempts to create an HTTP server on port 8080. If another process is already using this port, the server will fail to start and throw an error. This is a typical scenario during development or if a server is improperly shut down.

## Solution

The `bugSolution.js` file addresses this issue by using the `'error'` event listener on the server object to handle the 'EADDRINUSE' error gracefully.  Instead of crashing, the server logs an informative message and attempts to listen on a different port.