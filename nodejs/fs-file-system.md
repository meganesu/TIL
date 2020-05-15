# `fs`: Working with your file system

## Read from a file

* Async: `fs.readFile(filename, [encoding], [callback])`
* Sync: `fs.readFileSync(filename, [encoding])`

```javascript
const fs = require('fs')

// Async
const readFile = async () => {
  const buffer = await fs.readFile('growing-guide.html')
  const content = buffer.toString()
}
readFile()

// Sync
const buffer = fs.readFileSync('growing-guide.html')
const content = buffer.toString()
```

## Write to a file

```javascript
const fs = require('fs')

const content = 'hey there'

fs.writeFile(filename, content, err => {
      if (err) throw err;
      console.log('file saved successfully!')
```
