import cloneDeep from 'lodash/cloneDeep';

export interface ItemInput {
  id?: string | null;
}

interface ItemGraphQL {
  id?: string,
}

export class Item {
  id?: string;

  static fromGraphQL<T extends typeof Item, S>(this: T, graphQL: S|null) {
    const item = new this() as InstanceType<T>;
    if (graphQL != null) {
      item.setFromGraphQL(graphQL);
    }
    return item;
  }

  setFromGraphQL(graphQL: ItemGraphQL) {
    if (graphQL?.id != null) {
      this.id = graphQL.id;
    }
  }

  toInput(all: boolean = false): ItemInput {
    if (this.id != null) {
      return {id: this.id};
    }
    return {};
  }

  clone() {
    return cloneDeep(this) || null;
  }
}
