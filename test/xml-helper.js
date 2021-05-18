import expect from './expect';

import SchemaValidator from 'xsd-schema-validator';

import {
  readFile
} from './helper';

const XSD = 'test/fixtures/xsd/ALL.xsd';


export function fromFile(moddle, file) {
  return fromFilePart(moddle, file, 'bpmn:Definitions');
}

export function fromFilePart(moddle, file, type) {
  const fileContents = readFile(file);

  return moddle.fromXML(fileContents, type);
}

export function toXML(element, opts) {
  return element.$model.toXML(element, opts);
}

export function validate(xml) {

  if (!xml) {
    throw new Error('XML is not defined');
  }

  return new Promise((resolve, reject) => {
    SchemaValidator.validateXML(xml, XSD, function(err, result) {

      if (err) {
        return reject(err);
      }

      try {
        expect(result.valid).to.be.true;
      } catch (err) {
        return reject(err);
      }

      return resolve();
    });
  });
}