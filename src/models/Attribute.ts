import { Item } from './Item';
import {
  Attribute as AttributeGraphQL,
  AttributeInput
} from '../generated/graphql';


export class Attribute extends Item {

  name?: string;
  description?: string;
  parent?: Attribute;

  setFromGraphQL(graphQL: AttributeGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description, parent } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.parent = parent == null ? undefined : Attribute.fromGraphQL(parent);
  }

  toInput(all: boolean = false): AttributeInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
        parent: this.parent?.toInput(),
      }
    }
    return {
      ...input,
      name: this.name,
    }
  }
}