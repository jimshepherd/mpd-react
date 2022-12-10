import { Item } from './Item';
import {
  Product as ProductGraphQL,
  ProductInput,
} from '../generated/graphql';


export class Product extends Item {

  name?: string;
  description?: string;
  version?: string;

  setFromGraphQL(graphQL: ProductGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description, version } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.version = version ?? undefined;
  }

  toInput(all: boolean = false): ProductInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
        version: this.version,
      }
    }
    return {
      ...input,
    }
  }
}