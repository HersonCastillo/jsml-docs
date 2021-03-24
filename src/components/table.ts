import { Component } from '@duox/jsml';

const THead = (child: Component): Component => ({
  tag: 'thead',
  child,
});

const TBody = (child: Component[]): Component => ({
  tag: 'tbody',
  child,
});

const Tr = (child: Component[]): Component => ({
  tag: 'tr',
  child,
});

const Th = (child: string): Component => ({
  tag: 'th',
  child,
  scope: 'col',
});

const Td = (child: string): Component => ({
  tag: 'td',
  child,
});

export const Table = (
  headers: TableHeader[],
  dataSet: any,
): Component => {
  return {
    tag: 'table',
    classes: ['table', 'table-bordered'],
    child: [
      THead(Tr(headers.map(({ label }) => Th(label)))),
      TBody([
        ...dataSet?.map((record: any) => (
          Tr([
            ...headers.map(({ dataIndex }) => Td(record[dataIndex]))
          ])
        ))
      ]),
    ],
  };
};

export interface TableHeader {
  label: string;
  dataIndex: string;
}
