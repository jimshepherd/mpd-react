import { Item } from './Item';
import { MaterialSpecificationInput } from '../graphql/types/globalTypes';
import { MaterialSpecifications_materialSpecifications } from '../graphql/types/MaterialSpecifications';


export class MaterialSpecification extends Item {

  name?: string;
  description?: string;
  version?: string;
  parent?: MaterialSpecification;
  //materialType?: MaterialType;
  //attributes?: Attribute[];
  //identifiers?: Identifier[];
  //properties?: Property[];
  //supplier?: Organization[];

  setFromGraphQL(graphQL: MaterialSpecifications_materialSpecifications) {
    super.setFromGraphQL(graphQL);
    const { name, description, version, parent } = graphQL;
    console.log('graphQL', graphQL);
    if (name != null) {
      this.name = name;
    }
    if (description != null) {
      this.description = description;
    }
    if (version != null) {
      this.version = version;
    }
    if (parent != null) {
      this.parent = MaterialSpecification.fromGraphQL(parent);
    }
  }

  toInput(all: boolean = false): MaterialSpecificationInput {
    const input = super.toInput(all);
    return {
      ...input,
    }
  }
}