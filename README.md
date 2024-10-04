# if-plugin-template

`if-plugin-template` is an environmental impact calculator template which exposes an API for [IF](https://github.com/Green-Software-Foundation/if) to retrieve energy and embodied carbon estimates.

## Implementation

Here can be implementation details of the plugin. For example which API is used, transformations and etc.

## Usage

To run the `<YOUR-CUSTOM-PLUGIN>`, an instance of `PluginFactory` must be created. Then, the plugin's `execute()` method can be called, passing required arguments to it.

This is how you could run the plugin in Typescript:

```typescript
async function runPlugin() {
  const usage = await MyCustomPlugin({}).execute([
    {
      timestamp: '2021-01-01T00:00:00Z',
      duration: '15s',
      'cpu-util': 34,
    },
    {
      timestamp: '2021-01-01T00:00:15Z',
      duration: '15s',
      'cpu-util': 12,
    },
  ]);

  console.log(usage);
}

runPlugin();
```

## Testing plugin integration

>Note: The [If Core](https://github.com/Green-Software-Foundation/if-core) repository contains the `PluginFactory` interface, utility functions, and a set of error classes that can be fully integrated with the IF framework. Detailed information on each error class can be found in the [Errors Reference](../reference/errors.md).

### Using local links

For using locally developed plugin in `IF Framework` please follow these steps: 

1. On the root level of a locally developed plugin run `npm link`, which will create global package. It uses `package.json` file's `name` field as a package name. Additionally name can be checked by running `npm ls -g --depth=0 --link=true`.
2. Use the linked plugin in manifest by specifying `name`, `method`, `path` in initialize plugins section. 

```yaml
name: plugin-demo-link
description: loads plugin
tags: null
initialize:
  plugins:
    my-custom-plugin:
      method: MyCustomPlugin
      path: "<name-field-from-package.json>"
      config:
        ...
...
```

### Using directly from Github

You can simply push your plugin to the public Github repository and pass the path to it in your manifest.
For example, for a plugin saved in `github.com/my-repo/my-plugin` you can do the following:

npm install your plugin: 

```
npm install -g https://github.com/my-repo/my-plugin
```

Then, in your `manifest`, provide the path in the plugin instantiation. You also need to specify which method the plugin instantiates. In this case you are using the `MyCustomPlugin`.

```yaml
name: plugin-demo-git
description: loads plugin
tags: null
initialize:
  plugins:
    my-custom-plugin:
      method: MyCustomPlugin
      path: https://github.com/my-repo/my-plugin
      config:
        ...
...
```

Now, when you run the `manifest` using the IF CLI, it will load the plugin automatically. Run using:

```sh
if -m <path-to-your-manifest> -o <path-to-save-output>
```
