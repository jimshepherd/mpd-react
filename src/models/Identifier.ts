import { Item } from './Item';
import {
  Identifier as IdentifierGraphQL,
  IdentifierInput,
  IdentifierType as IdentifierTypeGraphQL,
  IdentifierTypeInput,
} from '../generated/graphql';


export class IdentifierType extends Item {

  name?: string;
  description?: string;
  parent?: Identifier;

  setFromGraphQL(graphQL: IdentifierTypeGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description, parent } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.parent = parent == null ? undefined : Identifier.fromGraphQL(parent);
  }

  toInput(all: boolean = false): IdentifierTypeInput {
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
      name: this.name,
    }
  }
}


export class Identifier extends Item {

  name?: string;
  value?: string;
  identifierType?: IdentifierType;

  setFromGraphQL(graphQL: IdentifierGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, value, identifierType } = graphQL;
    this.name = name ?? undefined;
    this.value = value ?? undefined;
    this.identifierType = identifierType ? IdentifierType.fromGraphQL(identifierType) : undefined;
  }

  toInput(all: boolean = false): IdentifierInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        identifierType: this.identifierType?.toInput(),
        value: this.value,
      }
    }
    return {
      ...input,
      name: this.name,
    }
  }
}