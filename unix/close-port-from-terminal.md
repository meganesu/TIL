# Close a port from the command line

1. Find the process ID for the process occupying the port (e.g., port 3000 in the example below).

```sh
lsof -i :3000
```

2. Kill that process.

```sh
kill -9 <PID>
```
