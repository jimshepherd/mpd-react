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
  order?: number;
  sampleType?: string;
  sampleSize?: number;

  setFromGraphQL(graphQL: TestPlanMicGraphQL) {
    super.setFromGraphQL(graphQL);
    const {
      name, description, micType, values, unit,
      micId, order, sampleType, sampleSize
    } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.micType = micType ? MICType.fromGraphQL(micType) : undefined;
    this.values = values ?? undefined;
    this.unit = unit ?? undefined;
    this.micId = micId ?? undefined;
    this.order = order ?? undefined;
    this.sampleType = sampleType ?? undefined;
    this.sampleSize = sampleSize ?? undefined;
  }

  toInput(all: boolean = false): TestPlanMicInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        micId: this.micId,
        order: this.order,
        sampleSize: this.sampleSize,
        sampleType: this.sampleType,
      }
    }
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
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.specification = specification ? ProductSpecification.fromGraphQL(specification) : undefined;
    this.product = product ? Product.fromGraphQL(product) : undefined;
    this.mics = mics?.map(m => TestPlanMIC.fromGraphQL(m));
  }

  toInput(all: boolean = false): TestPlanInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
        specification: this.specification?.toInput(),
        product: this.product?.toInput(),
        mics: this.mics?.map(m => m.toInput()),
      }
    }
    return {
      ...input,
    }
  }
}
