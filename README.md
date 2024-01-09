# if-model-template

`If-model-template` is an environmental impact calculator template which exposes an API for [IEF](https://github.com/Green-Software-Foundation/ief) to retrieve energy and embodied carbon estimates.

## Implementation

Here can be implementation details of the model. For example which API is used, transformations and etc.

## Usage

To run the `<MODEL_HERE>`, model an instance of `ModelPluginInterface` must be created and its `configure()` method called. Then, the model's `execute()` method can be called, passing required arguments to it.

This is how you could run the model in Typescript:

```typescript
async function runModel() {
  const newModel = await new Model().configure(params);
  const usage = await newModel.calculate([
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

runBoavizta();
```

## Testing model integration

### Using local links

For using locally developed model in `IF Framework` please follow these steps: 

1. On the root level of a locally developed model run `npm link`, which will create global package. It uses `package.json` file's `name` field as a package name. Additionally name can be checked by running `npm ls -g --depth=0 --link=true`.
2. Use the linked model in impl by specifying `name`, `model`, `path` in initialize models section. 

```yaml
name: model-demo-link
description: loads model
tags: null
initialize:
  models:
    - name: my-model
      kind: plugin
      model: OutputModel
      path: "<name-field-from-package.json>"
      config:
        allocation: LINEAR
        verbose: true
...
```

### Using directly from Github

You can simply push your model to the public Github repository and pass the path to it in your impl.
For example, for a model saved in `github.com/my-repo/my-model` you can do the following:

npm install your model: 

```
npm install -g https://github.com/my-repo/my-model
```

Then, in your `impl`, provide the path in the model instantiation. You also need to specify which class the model instantiates. In this case you are using the `ModelPluginInterface`, so you can specify `OutputModel`. 

```yaml
name: model-demo-git
description: loads model
tags: null
initialize:
  models:
    - name: my-model
      kind: plugin
      model: OutputModel
      path: https://github.com/my-repo/my-model
      config:
        allocation: LINEAR
        verbose: true
...
```

Now, when you run the `impl` using the IF CLI, it will load the model automatically. Run using:

```sh
impact-engine --impl <path-to-your-impl> --ompl <path-to-save-output>
```
