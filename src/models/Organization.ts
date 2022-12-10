import { Item } from './Item';
import {
  Address as AddressGraphQL,
  AddressInput,
  Organization as OrganizationGraphQL,
  OrganizationInput,
  OrganizationType as OrganizationTypeGraphQL,
  OrganizationTypeInput,
} from '../generated/graphql';


export class OrganizationType extends Item {

  name?: string;
  description?: string;

  setFromGraphQL(graphQL: OrganizationTypeGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description, parent } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
  }

  toInput(all: boolean = false): OrganizationTypeInput {
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
      name: this.name,
    }
  }
}


export class Address extends Item {

  street?: string;
  street2?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;

  setFromGraphQL(graphQL: AddressGraphQL) {
    super.setFromGraphQL(graphQL);
    const { street, street2, city, state, country, zip } = graphQL;
    this.street = street ?? undefined;
    this.street2 = street2 ?? undefined;
    this.city = city ?? undefined;
    this.state = state ?? undefined;
    this.country = country ?? undefined;
    this.zip = zip ?? undefined;
  }

  toInput(all: boolean = false): AddressInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        street: this.street,
        street2: this.street2,
        city: this.city,
        state: this.state,
        country: this.country,
        zip: this.zip,
      }
    }
    return {
      ...input,
    }
  }
}


export class Organization extends Item {

  name?: string;
  description?: string;
  parent?: Organization;
  orgTypes?: OrganizationType[];
  addresses?: Address[];

  setFromGraphQL(graphQL: OrganizationGraphQL) {
    super.setFromGraphQL(graphQL);
    const { name, description, parent, orgTypes, addresses } = graphQL;
    this.name = name ?? undefined;
    this.description = description ?? undefined;
    this.parent = parent == null ? undefined : Organization.fromGraphQL(parent);
    this.orgTypes = orgTypes?.map(o => OrganizationType.fromGraphQL(o));
    this.addresses = addresses?.map(a => Address.fromGraphQL(a));
  }

  toInput(all: boolean = false): OrganizationInput {
    const input = super.toInput(all);
    if (all) {
      return {
        ...input,
        name: this.name,
        description: this.description,
        parent: this.parent?.toInput(),
        orgTypes: this.orgTypes?.map(o => o.toInput()),
        addresses: this.addresses?.map(a => a.toInput()),
      }
    }
    return {
      ...input,
      name: this.name,
    }
  }
}