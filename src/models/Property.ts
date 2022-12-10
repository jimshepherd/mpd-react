import { Item } from './Item';
import {
  Property as PropertyGraphQL,
  PropertyInput,
  PropertySpecification as PropertySpecificationGraphQL,
  PropertySpecificationInput,
  PropertyType as PropertyTypeGraphQL,
  PropertyTypeInput,
} from '../generated/graphql';


export class PropertyType extends Item {

  name?: string;
  description?: string;
  parent?: PropertyType;

  setFromGraphQL(graphQL: PropertyTypeGraphQL) {
    super.setFromGraphQL(graphQL);
    const {
      name, description,
      parent,
    } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.parent = parent ? PropertyType.fromGraphQL(parent) : undefined;
  }

  toInput(all: boolean = false): PropertyTypeInput {
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


export class PropertySpecification extends Item {

  name?: string;
  description?: string;
  propertyType?: PropertyType;
  values?: {[key: string]: any};
  unit?: string;

  setFromGraphQL(graphQL: PropertySpecificationGraphQL) {
    super.setFromGraphQL(graphQL);
    const {
      name, description, values, unit,
      propertyType,
    } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.values = JSON.parse(values) ?? undefined;
    this.unit = unit ?? undefined;
    this.propertyType = propertyType ? PropertyType.fromGraphQL(propertyType) : undefined;
  }

  toInput(all: boolean = false): PropertySpecificationInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
        values: JSON.stringify(this.values),
        unit: this.unit,
        propertyType: this.propertyType?.toInput(),
      }
    }
    return {
      ...input,
    }
  }
}


export class Property extends Item {

  intValue?: number;
  floatValue?: number;
  textValue?: string;
  unit?: string;
  propertyType?: PropertyType;
  specification?: PropertySpecification;

  setFromGraphQL(graphQL: PropertyGraphQL) {
    super.setFromGraphQL(graphQL);
    const {
      intValue, floatValue, textValue, unit,
      propertyType, specification,
    } = graphQL;
    this.intValue = intValue ?? undefined;
    this.floatValue = floatValue ?? undefined;
    this.textValue = textValue ?? undefined;
    this.unit = unit ?? undefined;
    this.propertyType = propertyType ? PropertyType.fromGraphQL(propertyType) : undefined;
    this.specification = specification ? PropertySpecification.fromGraphQL(specification) : undefined;
  }

  toInput(all: boolean = false): PropertyInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        intValue: this.intValue,
        floatValue: this.floatValue,
        textValue: this.textValue,
        unit: this.unit,
        propertyType: this.propertyType?.toInput(),
        specification: this.specification?.toInput(),
      }
    }
    return {
      ...input,
    }
  }
}