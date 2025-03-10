import { ErrorSchema, RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import renderer from 'react-test-renderer';

import Form from '../src';

/** Mock the `react-component-ref` component used by semantic-ui to simply render the children, otherwise tests fail */
jest.mock('@fluentui/react-component-ref', () => ({
  ...jest.requireActual('@fluentui/react-component-ref'),
  Ref: jest.fn().mockImplementation(({ children }) => children),
}));

describe('single fields', () => {
  describe('string field', () => {
    test('regular', () => {
      const schema: RJSFSchema = {
        type: 'string',
      };
      const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    test('format email', () => {
      const schema: RJSFSchema = {
        type: 'string',
        format: 'email',
      };
      const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    test('format uri', () => {
      const schema: RJSFSchema = {
        type: 'string',
        format: 'uri',
      };
      const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    test('format data-url', () => {
      const schema: RJSFSchema = {
        type: 'string',
        format: 'data-url',
      };
      const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  test('string field with placeholder', () => {
    const schema: RJSFSchema = {
      type: 'string',
    };
    const uiSchema = {
      'ui:placeholder': 'placeholder',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('number field', () => {
    const schema: RJSFSchema = {
      type: 'number',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('number field 0', () => {
    const schema: RJSFSchema = {
      type: 'number',
    };
    const formData = 0;
    const tree = renderer.create(<Form schema={schema} validator={validator} formData={formData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('null field', () => {
    const schema: RJSFSchema = {
      type: 'null',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('unsupported field', () => {
    const schema: RJSFSchema = {
      type: undefined,
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('format color', () => {
    const schema: RJSFSchema = {
      type: 'string',
      format: 'color',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('format date', () => {
    const schema: RJSFSchema = {
      type: 'string',
      format: 'date',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('format datetime', () => {
    const schema: RJSFSchema = {
      type: 'string',
      format: 'datetime',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('format time', () => {
    const schema: RJSFSchema = {
      type: 'string',
      format: 'time',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('password field', () => {
    const schema: RJSFSchema = {
      type: 'string',
    };
    const uiSchema = {
      'ui:widget': 'password',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('up/down field', () => {
    const schema: RJSFSchema = {
      type: 'number',
    };
    const uiSchema = {
      'ui:widget': 'updown',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('textarea field', () => {
    const schema: RJSFSchema = {
      type: 'string',
    };
    const uiSchema = {
      'ui:widget': 'textarea',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('select field', () => {
    const schema: RJSFSchema = {
      type: 'string',
      enum: ['foo', 'bar'],
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('checkbox field', () => {
    const schema: RJSFSchema = {
      type: 'boolean',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('checkbox field with label', () => {
    const schema: RJSFSchema = {
      type: 'boolean',
      title: 'test',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('checkboxes field', () => {
    const schema: RJSFSchema = {
      type: 'array',
      items: {
        type: 'string',
        enum: ['foo', 'bar', 'fuzz', 'qux'],
      },
      uniqueItems: true,
    };
    const uiSchema = {
      'ui:widget': 'checkboxes',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('radio field', () => {
    const schema: RJSFSchema = {
      type: 'boolean',
    };
    const uiSchema = {
      'ui:widget': 'radio',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('slider field', () => {
    const schema: RJSFSchema = {
      type: 'integer',
      minimum: 42,
      maximum: 100,
    };
    const uiSchema = {
      'ui:widget': 'range',
    };
    const tree = renderer
      .create(<Form schema={schema} validator={validator} uiSchema={uiSchema} formData={75} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('hidden field', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: {
        'my-field': {
          type: 'string',
        },
      },
    };
    const uiSchema = {
      'my-field': {
        'ui:widget': 'hidden',
      },
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('field with description', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: {
        'my-field': {
          type: 'string',
          description: 'some description',
        },
      },
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('field with description in uiSchema', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: {
        'my-field': {
          type: 'string',
          description: 'some description',
        },
      },
    };
    const uiSchema = {
      'my-field': {
        'ui:description': 'some other description',
      },
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('title field', () => {
    const schema: RJSFSchema = {
      type: 'object',
      properties: {
        title: {
          type: 'string',
        },
      },
    };
    const uiSchema = {
      'ui:title': 'Titre 1',
      title: {
        'ui:title': 'Titre 2',
      },
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('hidden label', () => {
    const schema: RJSFSchema = {
      type: 'string',
    };
    const uiSchema = {
      'ui:options': {
        label: false,
      },
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('using custom tagName', () => {
    const schema: RJSFSchema = {
      type: 'string',
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} tagName='div' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('field with special semantic options', () => {
    const schema: RJSFSchema = {
      title: 'A registration form',
      description: 'A simple test theme form example.',
      type: 'object',
      required: ['test'],
      properties: {
        test: {
          enum: [1, 2, 3],
          title: 'test',
        },
      },
    };
    const uiSchema = {
      test: {
        'ui:options': {
          semantic: {
            fluid: true,
          },
        },
      },
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} uiSchema={uiSchema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('schema examples', () => {
    const schema: RJSFSchema = {
      type: 'string',
      examples: ['Firefox', 'Chrome', 'Opera', 'Vivaldi', 'Safari'],
    };
    const tree = renderer.create(<Form schema={schema} validator={validator} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('help and error display', () => {
    const schema: RJSFSchema = {
      type: 'string',
    };
    const uiSchema = {
      'ui:help': 'help me!',
    };
    const errors: string[] = ['an error'];
    const extraErrors = { __errors: errors } as ErrorSchema;
    const tree = renderer
      .create(<Form schema={schema} uiSchema={uiSchema} validator={validator} extraErrors={extraErrors} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
