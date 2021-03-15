export interface ItemInput {
  id?: string | null;
}

interface ItemGraphQL {
  id?: string,
}

export class Item {
  id?: string;

  static fromGraphQL<T extends typeof Item>(this: T, graphQL: ItemGraphQL|null) {
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
}
