import { Item } from './Item';
import {
  MicType as MicTypeGraphQL,
  MicTypeInput,
} from '../generated/graphql';


export class MICType extends Item {

  name?: string;
  description?: string;

  setFromGraphQL(graphQL: MicTypeGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
  }

  toInput(all: boolean = false): MicTypeInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
      }
    }
    return {
      ...input,
    }
  }
}