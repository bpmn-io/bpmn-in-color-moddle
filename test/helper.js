import fs from 'fs';

import SimpleBpmnModdle from 'bpmn-moddle';

import bpmnInColorSchema from '../resources/bpmn-in-color.json';


export function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'UTF-8' });
}

export function createModdle(additionalPackages = {}, options) {
  return SimpleBpmnModdle({ color: bpmnInColorSchema, ...additionalPackages }, options);
}