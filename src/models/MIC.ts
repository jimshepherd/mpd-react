import { Item } from './Item';
import { MICType } from './MICType';
import { Mic, MicInput } from '../generated/graphql';


export class MIC extends Item {

  name?: string;
  description?: string;
  micType?: MICType;
  values?: string;
  unit?: string;

  setFromGraphQL(graphQL: Mic) {
    super.setFromGraphQL(graphQL);
    const { name, description, micType, values, unit } = graphQL;
    console.log('graphQL', graphQL);
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.micType = micType ? MICType.fromGraphQL(micType) : undefined;
    this.values = values ?? undefined;
    this.unit = unit ?? undefined;
  }

  toInput(all: boolean = false): MicInput {
    const input = super.toInput(all);
    return {
      ...input,
    }
  }
}