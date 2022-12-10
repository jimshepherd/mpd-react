import { Item } from './Item';
import { MICType } from './MICType';
import {
  Mic as MicGraphQL,
  MicInput
} from '../generated/graphql';


export class MIC extends Item {

  name?: string;
  description?: string;
  micType?: MICType;
  values?: string;
  unit?: string;

  setFromGraphQL(graphQL: MicGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description, micType, values, unit } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.micType = micType ? MICType.fromGraphQL(micType) : undefined;
    this.values = values ?? undefined;
    this.unit = unit ?? undefined;
  }

  toInput(all: boolean = false): MicInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
        micType: this.micType?.toInput(),
        values: this.values,
        unit: this.unit,
      }
    }
    return {
      ...input,
    }
  }
}