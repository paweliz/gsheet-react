import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import Ajv from 'ajv';

const schema = {
  title: 'Guest',
  type: 'object',
  properties: {
    sectionName: { type: 'string' },
    sectionDateStart: {
      description: 'When did the section start?',
    },
    sectionDateEnd: {
      description: 'When did the section end?',
    },
  },
  required: ['sectionName', 'sectionDateStart', 'sectionDateEnd'],
};

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema) {
  const validator = ajv.compile(schema);
  
  return (model) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);

