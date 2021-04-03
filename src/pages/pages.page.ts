import { Page, PagePhase, tag } from '@duox/jsml';
import { Layout } from '../components/layout';
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
        tag('br'),
        tag('p', `A page is a <b>fragment</b> of the DOM. In this fragment must be the components that make up the page. <br>
        A page is based on the PagePhase implementation (obtained from <code>@duox/jsml</code>), but for JSML to detect it as a page it must have a decorator 
        called <b>Page</b>. <br>By inserting this decorator, the class is now considered a page and therefore it can be used in the JSML Routing System or its instance 
        (rendered content) can be placed inside a <code>zone</code> (HTML element) with <b>PageResolver</b>.`),
        tag('span', 'What does a page look like?'),
        tag('br'),
        tag('br'),
        tag('div', copyCodeBlock(this.pageClassDeclaration)),
        tag('span', 'Properties of <b>@Page</b> decorator...'),
        tag('br'),
        tag('br'),
        Table(this.tableHeaders, this.tableBody),
        tag('br')
      ]),
      Layout('PagePhase', [
        tag('br'),
        tag('span', 'Now, maybe you have a question, what in the hell is "PagePhase"?'),
        tag('br'),
        tag('br'),
        tag('p', `Well, simply put, the abstract PagePhase class gives you available methods for the page's lifecycle.`),
        tag('br'),
        Table(this.phaseTableHeaders, this.phaseTableBody),
      ]),
    ];
  }
}
