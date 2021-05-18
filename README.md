# bpmn-in-color-moddle

[![CI](https://github.com/bpmn-io/bpmn-in-color-moddle/workflows/CI/badge.svg)](https://github.com/bpmn-io/bpmn-in-color-moddle/actions?query=workflow%3ACI)

Read and write BPMN 2.0 diagram files with [BPMN in Color extension](https://github.com/bpmn-miwg/bpmn-in-color) in NodeJS and the browser.

## Usage

```javascript
import BpmnModdle from 'bpmn-moddle';
import BpmnInColorSchema from 'bpmn-in-color-moddle/resources/bpmn-in-color.json';

const moddle = new BpmnModdle({ color: BpmnInColorSchema });

// import XML with color namespace
```

## Resources

* [Issues](https://github.com/bpmn-io/bpmn-in-color-moddle/issues)
* [Changelog](./CHANGELOG.md)

## Building the Project

To run the test suite that includes XSD schema validation you must have a Java JDK installed and properly exposed through the `JAVA_HOME` variable.

Execute the test via

```sh
npm test
```

Perform a complete build of the application via

```sh
npm run all
```

## License

Use under the terms of the [MIT license](http://opensource.org/licenses/MIT).
