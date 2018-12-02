export class ChartModel {
  constructor(
    public type: chartType,
    public name: string,
    public labels: Array<string>,
    public data: Array<number>
  ) {}
}

export enum chartType {
  UNKNOW = '未知',
  BUILDING = '大樓',
  COMPANY = '公司',
  Right = 'RIGHT',
}
