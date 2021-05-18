import expect from '../../expect';

import {
  assign
} from 'min-dash';

import {
  createModdle
} from '../../helper';


describe('write', function() {

  const moddle = createModdle();


  function write(element, options) {

    // skip preamble for tests
    options = assign({ preamble: false }, options);

    return moddle.toXML(element, options);
  }


  describe('should export types', function() {

    it('BPMNShape', async function() {

      // given
      const bpmnShape = moddle.create('bpmndi:BPMNShape', {
        'background-color': '#ff0000',
        'border-color': '#00ff00'
      });

      const expectedXML =
          '<bpmndi:BPMNShape xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" ' +
                            'xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" ' +
                            'color:background-color="#ff0000" color:border-color="#00ff00" />';

      // when
      const { xml } = await write(bpmnShape);

      // then
      expect(xml).to.eql(expectedXML);
    });


    it('BPMNEdge', async function() {

      // given
      const bpmnShape = moddle.create('bpmndi:BPMNEdge', {
        'border-color': '#00ff00'
      });

      const expectedXML =
          '<bpmndi:BPMNEdge xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" ' +
                            'xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" ' +
                            'color:border-color="#00ff00" />';

      // when
      const { xml } = await write(bpmnShape);

      // then
      expect(xml).to.eql(expectedXML);
    });


    it('BPMNLabel', async function() {

      // given
      const bpmnLabel = moddle.create('bpmndi:BPMNLabel', {
        color: '#ff0000'
      });

      const expectedXML =
          '<bpmndi:BPMNLabel xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" ' +
                            'xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" ' +
                            'color:color="#ff0000" />';

      // when
      const { xml } = await write(bpmnLabel);

      // then
      expect(xml).to.eql(expectedXML);
    });
  });
});
