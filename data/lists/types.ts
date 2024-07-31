export interface ListType {
  id: string;
  name: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
  requirements: Array<Requirement>;
  isDLC?: boolean;
  needTwoOfEach?: boolean;
  menuSortOrder?: number;
}

export interface Requirement {
  id: string;
  description: string; // rawHTML
  isDLC?: boolean;
  unmissableUniqueInstances?: number;
  missableUniqueInstances?: number;
  farmable?: boolean;
  missablyFarmable?: boolean;
  menuSortOrder?: number;
  doesNotNeedTwo?: boolean;
}

export interface KeyBooleanValuePair {
  [key: string]: boolean;
}
