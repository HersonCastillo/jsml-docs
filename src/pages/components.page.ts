import { Page, PagePhase } from '@duox/jsml';
import { Br } from '../components/br';
import { Div } from '../components/div';
import { Layout } from '../components/layout';
import { P } from '../components/p';
import { Span } from '../components/span';
import { Table, TableHeader } from '../components/table';

const copyCodeBlock = require('@pickra/copy-code-block');

@Page({
  title: 'JSML | Components'
})
export class ComponentsPage implements PagePhase {
  componentExample = `
    import { Component } from '@duox/jsml';

    export const Div = ({ child }): Component => ({
      child,
      id: 'div-element',
      classes: ['container', 'div-class'],
      style: {
        padding: '10px',
        margin: '5px',
        cursor: 'pointer',
      },
      events: [
        {
          name: 'click',
          handler: () => {
            console.log('Click!');
          }
        }
      ],
    });
  `;
  pageUseOfComponent = `
    return [
      Div({ child: 'This is a div, you can click me' }),
    ];
  `;

  componentTableHeader: TableHeader[] = [
    {
      dataIndex: 'name',
      label: 'Property Name'
    },
    {
      dataIndex: 'rules',
      label: 'Rules',
    },
    {
      dataIndex: 'dataType',
      label: 'Data Type',
    },
    {
      dataIndex: 'description',
      label: 'Description',
    },
  ];

  componentTableBody = [
    {
      name: '<code>tag</code>',
      rules: 'required',
      dataType: '<code>string</code>',
      description: `The HTML tag in which it will be rendered.`,
    },
    {
      name: '<code>id</code>',
      rules: 'optional',
      dataType: '<code>string</code>',
      description: `ID prop of the HTML tag.`,
    },
    {
      name: '<code>classes</code>',
      rules: 'optional',
      dataType: '<code>string[]</code>',
      description: `Class list of the HTML tag.`,
    },
    {
      name: '<code>style</code>',
      rules: 'optional',
      dataType: '<code>CSSStyleDeclaration</code>',
      description: `Map of the CSS props that the component will adopt on the renderization.`,
    },
    {
      name: '<code>key</code>',
      rules: 'optional',
      dataType: '<code>string</code>',
      description: `Unique ID that will helps to make re-rendering and other things.`,
    },
    {
      name: '<code>events</code>',
      rules: 'optional',
      dataType: '<code>ComponentEvent[]</code>',
      description: `List of events that the component will adopt, any HTML event are available.`,
    },
    {
      name: '<code>[attr]</code>',
      rules: 'optional?',
      dataType: '<code>any</code>',
      description: `
      Any other attribute, internally the attributes that are not 
      defined will be placed as HTML attributes of the element.`,
    },
  ];

  render() {
    return [
      Layout('Components', [
        Br,
        P(`
          A <b>component</b> is one that will be rendered when the instance of a page is created, 
          it is an object with Javascript properties and this can be a tree of components, 
          one after another.
        `),
        Span('Example'),
        Br,
        Br,
        Div({ child: copyCodeBlock(this.componentExample) }),
        Span('And, on a page you can use it'),
        Br,
        Br,
        Div({ child: copyCodeBlock(this.pageUseOfComponent) }),
        Span('What about the props that a component contains?'),
        Br,
        Br,
        Table(this.componentTableHeader, this.componentTableBody),
      ]),
    ];
  }
}
