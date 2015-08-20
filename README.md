# grunt-simple-nunit-runner

Run nunit tests using [Grunt](http://gruntjs.com/). This plugin use [edge.js](http://tjanczuk.github.io/edge/#/) and require .NET 4.5 

## The "nunit" task

In your project's Gruntfile, add a section named `nunit` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    nunit: {
        dev: {
            src: ['path/to/tests.dll']
        }
    }
});
```

## Continuous testing flow 

Some samples are available [here](https://github.com/MiKaDoO/grunt-simple-nunit-runner)