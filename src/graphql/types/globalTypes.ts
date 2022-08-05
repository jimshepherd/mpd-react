/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AddressInput {
  id?: string | null;
  name?: string | null;
  street?: string | null;
  street2?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  zip?: string | null;
}

export interface AttributeInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  parent?: AttributeInput | null;
}

export interface IdentifierInput {
  id?: string | null;
  name?: string | null;
  identifierType?: IdentifierTypeInput | null;
  value?: string | null;
}

export interface IdentifierTypeInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
}

export interface MaterialSpecificationInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  version?: string | null;
  parent?: MaterialSpecificationInput | null;
  materialType?: MaterialTypeInput | null;
  attributes?: (AttributeInput | null)[] | null;
  identifiers?: (IdentifierInput | null)[] | null;
  properties?: (PropertyInput | null)[] | null;
  supplier?: OrganizationInput | null;
}

export interface MaterialTypeInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
}

export interface OrganizationInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  orgTypes?: (OrganizationTypeInput | null)[] | null;
  addresses?: (AddressInput | null)[] | null;
}

export interface OrganizationTypeInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
}

export interface ProductInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  version?: string | null;
  materialType?: ProductTypeInput | null;
}

export interface ProductTypeInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
}

export interface PropertyInput {
  id?: string | null;
  name?: string | null;
  propertyType?: PropertyTypeInput | null;
  specification?: PropertySpecificationInput | null;
  intValue?: number | null;
  floatValue?: number | null;
  textValue?: string | null;
  unit?: string | null;
}

export interface PropertySpecificationInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  propertyType?: PropertyTypeInput | null;
  values?: any | null;
  unit?: string | null;
}

export interface PropertyTypeInput {
  id?: string | null;
  name?: string | null;
  description?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
