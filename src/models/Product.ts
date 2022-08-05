import { Item } from './Item';
//import { ProductInput } from '../graphql/types/globalTypes';
import { Products_products } from '../graphql/types/Products';
import {MaterialSpecification} from "./MaterialSpecification";


export class Product extends Item {

  name?: string;
  description?: string;
  version?: string;

  setFromGraphQL(graphQL: Products_products) {
    super.setFromGraphQL(graphQL);
    const { name, description, version } = graphQL;
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
  }

  /*
  toInput(all: boolean = false): ProductInput {
    const input = super.toInput(all);
    return {
      ...input,
    }
  }
  */
}