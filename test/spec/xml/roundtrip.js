import {
  createModdle
} from '../../helper';

import {
  fromFile,
  toXML,
  validate
} from '../../xml-helper';


describe('roundtrip', function() {

  this.timeout(10000);

  let moddle;

  function test(file) {
    return async function() {

      // given
      const { rootElement: definitions } = await fromFile(moddle, file);

      // when
      const { xml } = await toXML(definitions, { format: true });

      // then
      return validate(xml);
    };
  }


  beforeEach(() => {
    moddle = createModdle();
  });


  it('should work with simple diagram', test('test/fixtures/bpmn/simple.bpmn'));


  it('should work with bpmn.io extensions diagram', test('test/fixtures/bpmn/simple.bpmn'));


  it('should work with BPMN in Color sample diagram', test('test/fixtures/bpmn/simple.bpmn'));
});
