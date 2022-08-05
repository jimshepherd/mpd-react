import { Item } from './Item';
import { MIC } from './MIC';
import { Product } from './Product';
import {
  ProductSpecification as ProductSpecificationGraphQL,
  ProductSpecificationInput,
} from '../generated/graphql';


export class ProductSpecification extends Item {

  name?: string;
  description?: string;
  version?: string;
  product?: Product;
  mics?: MIC[];

  setFromGraphQL(graphQL: ProductSpecificationGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description, version, product, mics } = graphQL;
    console.log('graphQL', graphQL);
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.version = version ?? undefined;
    this.product = product ? Product.fromGraphQL(product) : undefined;
    this.mics = mics?.map(m => MIC.fromGraphQL(m));
  }

  toInput(all: boolean = false): ProductSpecificationInput {
    const input = super.toInput(all);
    return {
      ...input,
    }
  }
}
