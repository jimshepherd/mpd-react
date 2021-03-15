import { Item } from './Item';
import { AttributeInput } from '../graphql/types/globalTypes';
import { Attributes_attributes } from '../graphql/types/Attributes';



export class Attribute extends Item {

  name?: string;
  description?: string;
  parent?: Attribute;

  setFromGraphQL(graphQL: Attributes_attributes) {
    super.setFromGraphQL(graphQL);
    const { name, description, parent } = graphQL;
    console.log('graphQL', graphQL);
    if (name != null) {
      this.name = name;
    }
    if (description != null) {
      this.description = description;
    }
    if (parent != null) {
      this.parent = Attribute.fromGraphQL(parent);
    }
  }

  toInput(all: boolean = false): AttributeInput {
    const input = super.toInput(all);
    return {
      ...input,
    }
  }
}