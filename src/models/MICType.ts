import { Item } from './Item';
//import { MICTypeInput } from '../graphql/types/globalTypes';
import {MICTypeDetail} from '../graphql/types/MICTypeDetail';


export class MICType extends Item {

  name?: string;
  description?: string;

  setFromGraphQL(graphQL: MICTypeDetail) {
    super.setFromGraphQL(graphQL);
    const { name, description } = graphQL;
    console.log('graphQL', graphQL);
    this.name = name ?? undefined;
    this.description = description ?? undefined;
  }

  /*
  toInput(all: boolean = false): MICTypeInput {
    const input = super.toInput(all);
    return {
      ...input,
    }
  }
  */
}