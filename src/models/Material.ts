import { Item } from './Item';
import { Attribute } from './Attribute';
import { Identifier } from './Identifier';
import { Organization } from './Organization';
import { Property } from './Property';
import {
  Material as MaterialGraphQL,
  MaterialInput,
  MaterialSpecification as MaterialSpecificationGraphQL,
  MaterialSpecificationInput,
  MaterialType as MaterialTypeGraphQL,
  MaterialTypeInput,
} from '../generated/graphql';


export class MaterialType extends Item {

  name?: string;
  description?: string;
  parent?: MaterialType;

  setFromGraphQL(graphQL: MaterialTypeGraphQL) {
    super.setFromGraphQL(graphQL);
    const {
      name, description,
      parent,
    } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.parent = parent ? MaterialType.fromGraphQL(parent) : undefined;
  }

  toInput(all: boolean = false): MaterialTypeInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
        parent: this.parent?.toInput(),
      }
    }
    return {
      ...input,
    }
  }
}


export class MaterialSpecification extends Item {

  name?: string;
  description?: string;
  version?: string;
  parent?: MaterialSpecification;
  materialType?: MaterialType;
  supplier?: Organization;
  attributes?: Attribute[];
  identifiers?: Identifier[];
  properties?: Property[];

  setFromGraphQL(graphQL: MaterialSpecificationGraphQL) {
    super.setFromGraphQL(graphQL);
    const {
      name, description, version,
      parent, materialType, supplier,
      attributes, identifiers, properties,
    } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.version = version ?? undefined;
    this.parent = parent ? MaterialSpecification.fromGraphQL(parent) : undefined;
    this.materialType = materialType ? MaterialType.fromGraphQL(materialType) : undefined;
    this.supplier = supplier ? Organization.fromGraphQL(supplier) : undefined;
    this.attributes = attributes?.map(a => Attribute.fromGraphQL(a));
    this.identifiers = identifiers?.map(i => Identifier.fromGraphQL(i));
    this.properties = properties?.map(p => Property.fromGraphQL(p));

  }

  toInput(all: boolean = false): MaterialSpecificationInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
        version: this.version,
        parent: this.parent?.toInput(),
        materialType: this.materialType?.toInput(),
        supplier: this.supplier?.toInput(),
        attributes: this.attributes?.map(a => a.toInput()),
        identifiers: this.identifiers?.map(i => i.toInput()),
        properties: this.properties?.map(p => p.toInput()),
      }
    }
    return {
      ...input,
    }
  }
}


export class Material extends Item {

  name?: string;
  description?: string;
  specification?: MaterialSpecification;
  attributes?: Attribute[];
  identifiers?: Identifier[];
  properties?: Property[];

  setFromGraphQL(graphQL: MaterialGraphQL) {
    super.setFromGraphQL(graphQL);
    const {
      name, description,
      specification,
      attributes, identifiers, properties,
    } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.specification = specification ? MaterialSpecification.fromGraphQL(specification) : undefined;
    this.attributes = attributes?.map(a => Attribute.fromGraphQL(a));
    this.identifiers = identifiers?.map(i => Identifier.fromGraphQL(i));
    this.properties = properties?.map(p => Property.fromGraphQL(p));

  }

  toInput(all: boolean = false): MaterialInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
        specification: this.specification?.toInput(),
        attributes: this.attributes?.map(a => a.toInput()),
        identifiers: this.identifiers?.map(i => i.toInput()),
        properties: this.properties?.map(p => p.toInput()),
      }
    }
    return {
      ...input,
    }
  }
}