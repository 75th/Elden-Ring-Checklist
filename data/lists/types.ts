export interface ListType {
  id: string;
  name: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
  requirements: Array<Requirement>;
}

export interface Requirement {
  id: string;
  description: string;
  url?: string;
  mapLink?: string;
}

export interface KeyBooleanValuePair {
  [key: string]: boolean;
}
