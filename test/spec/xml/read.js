import { find } from 'min-dash';

import expect from '../../expect';

import {
  createModdle
} from '../../helper';

import {
  fromFile
} from '../../xml-helper';


describe('read', function() {

  let moddle;


  beforeEach(() => {
    moddle = createModdle();
  });


  it('should import types on BPMNShape', async function() {

    // given
    const { rootElement: definitions } = await fromFile(moddle, 'test/fixtures/bpmn/simple.bpmn');
    const diagram = definitions.diagrams[0];


    // when
    const shape = find(diagram.plane.planeElement, el => el.id === 'Event_1kw5c3l_di');

    // then
    expect(shape.get('border-color')).to.eql('#FFFF00');
    expect(shape.get('background-color')).to.eql('#FFFF00');
  });


  it('should import types on BPMNEdge', async function() {

    // given
    const { rootElement: definitions } = await fromFile(moddle, 'test/fixtures/bpmn/simple.bpmn');
    const diagram = definitions.diagrams[0];


    // when
    const edge = find(diagram.plane.planeElement, el => el.id === 'Flow_0cg72xx_di');

    // then
    expect(edge.get('border-color')).to.eql('#FFFF00');
  });


  it('should import types on BPMNLabel', async function() {

    // given
    const { rootElement: definitions } = await fromFile(moddle, 'test/fixtures/bpmn/simple.bpmn');
    const diagram = definitions.diagrams[0];


    // when
    const shape = find(diagram.plane.planeElement, el => el.id === 'Event_1kw5c3l_di');
    const label = shape.label;

    // then
    expect(label.get('color')).to.eql('#FFFF00');
  });
});
