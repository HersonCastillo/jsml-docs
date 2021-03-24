import { Page, PagePhase } from '@duox/jsml';
import { Br } from '../components/br';
import { Div } from '../components/div';
import { Layout } from '../components/layout';
import { P } from '../components/p';
import { Span } from '../components/span';
import { Table, TableHeader } from '../components/table';

const copyCodeBlock = require('@pickra/copy-code-block');

@Page({
  title: 'JSML | Pages',
})
export class PagesPage implements PagePhase {

  pageClassDeclaration = `
    import { Page, PagePhase } from '@duox/jsml';

    @Page()
    export class AppPage implements PagePhase {
      render(): Component[] {
        return [];
      }
    }
  `;
  tableHeaders: TableHeader[] = [
    {
      dataIndex: 'name',
      label: 'Name',
    },
    {
      dataIndex: 'defaultValue',
      label: 'Default Value',
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

  tableBody = [
    {
      name: '<code>key</code>',
      defaultValue: '<code>undefined</code>',
      rules: 'optional',
      dataType: '<code>string</code>',
      description: `
        A unique name to the page indexed to the decorator, 
        does not have a specific functionality but will be useful for future uses.
      `,
    },
    {
      name: '<code>title</code>',
      defaultValue: '<code>undefined</code>',
      rules: 'optional',
      dataType: '<code>string</code>',
      description: `
        Title of the site, replacing the current value of <title> tag.
      `,
    },
    {
      name: '<code>providers</code>',
      defaultValue: '<code>[]</code>',
      rules: 'optional',
      dataType: '<code>ClassProviderType[]</code>',
      description: `
      The providers or services that will be injected when the Page instance is created,
      see Dependency Injection section for more information about it.
      `,
    },
  ];

  phaseTableHeaders: TableHeader[] = [
    {
      dataIndex: 'name',
      label: 'Method Name',
    },
    {
      dataIndex: 'rules',
      label: 'Rules',
    },
    {
      dataIndex: 'argument',
      label: 'Argument',
    },
    {
      dataIndex: 'returnType',
      label: 'Return Type',
    },
    {
      dataIndex: 'description',
      label: 'Description',
    },
  ];

  phaseTableBody = [
    {
      name: '<code>render</code>',
      argument: '-',
      rules: 'required',
      returnType: '<code>Component[]</code>',
      description: `Method that will contain the components of the page.`,
    },
    {
      name: '<code>onStart</code>',
      argument: '(currentInstance: PagePhase)',
      rules: 'optional',
      returnType: '<code>void</code>',
      description: `Method that is executed when the page is instantiated within a zone.`,
    },
    {
      name: '<code>onRender</code>',
      argument: '(pageFragment: PageFragment)',
      rules: 'optional',
      returnType: '<code>void</code>',
      description: `Method that is executed when rendering the components within a fragment.`,
    },
  ];

  render() {
    return [
      Layout('Pages', [
        Br,
        P(`A page is a <b>fragment</b> of the DOM. In this fragment must be the components that make up the page. <br>
        A page is based on the PagePhase implementation (obtained from <code>@duox/jsml</code>), but for JSML to detect it as a page it must have a decorator 
        called <b>Page</b>. <br>By inserting this decorator, the class is now considered a page and therefore it can be used in the JSML Routing System or its instance 
        (rendered content) can be placed inside a <code>zone</code> (HTML element) with <b>PageResolver</b>.`),
        Span('What does a page look like?'),
        Br,
        Br,
        Div({ child: copyCodeBlock(this.pageClassDeclaration) }),
        Span('Properties of <b>@Page</b> decorator...'),
        Br,
        Br,
        Table(this.tableHeaders, this.tableBody),
        Br
      ]),
      Layout('PagePhase', [
        Br,
        Span('Now, maybe you have a question, what in the hell is "PagePhase"?'),
        Br,
        Br,
        P(`Well, simply put, the abstract PagePhase class gives you available methods for the page's lifecycle.`),
        Br,
        Table(this.phaseTableHeaders, this.phaseTableBody),
      ]),
    ];
  }
}
