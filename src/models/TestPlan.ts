import { Item } from './Item';
import { MICType } from './MICType';
import { Product } from './Product';
import { ProductSpecification } from './ProductSpecification';
import {
  TestPlan as TestPlanGraphQL,
  TestPlanInput,
  TestPlanMic as TestPlanMicGraphQL,
  TestPlanMicInput
} from '../generated/graphql';

export class TestPlanMIC extends Item {

  name?: string;
  description?: string;
  micType?: MICType;
  values?: string;
  unit?: string;

  micId?: string;
  sampleType?: string;
  sampleSize?: number;

  setFromGraphQL(graphQL: TestPlanMicGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description, micType, values, unit, micId, sampleType, sampleSize } = graphQL;
    console.log('graphQL', graphQL);
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.micType = micType ? MICType.fromGraphQL(micType) : undefined;
    this.values = values ?? undefined;
    this.unit = unit ?? undefined;
    this.micId = micId ?? undefined;
    this.sampleType = sampleType ?? undefined;
    this.sampleSize = sampleSize ?? undefined;
  }

  toInput(all: boolean = false): TestPlanMicInput {
    const input = super.toInput(all);
    return {
      ...input,
    }
  }
}

export class TestPlan extends Item {

  name?: string;
  description?: string;
  specification?: ProductSpecification;
  product?: Product;
  mics?: TestPlanMIC[];

  setFromGraphQL(graphQL: TestPlanGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description, specification, product, mics } = graphQL;
    console.log('graphQL', graphQL);
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.specification = specification ? ProductSpecification.fromGraphQL(specification) : undefined;
    this.product = product ? Product.fromGraphQL(product) : undefined;
    this.mics = mics?.map(m => TestPlanMIC.fromGraphQL(m));
  }

  toInput(all: boolean = false): TestPlanInput {
    const input = super.toInput(all);
    return {
      ...input,
    }
  }
}
