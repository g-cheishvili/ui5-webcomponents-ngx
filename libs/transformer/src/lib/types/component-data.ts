import { ImportData } from "./import-types";

export interface InputType {
  description: string;
  publicName: string,
  name: string,
  type: string | ComponentData[],
  defaultValue: string,
  isArray: boolean,
}

export interface OutputType {
  description: string;
  name: string,
  publicName: string,
  type: string,
  placeholderValues: Record<string, ComponentData[] | string>
}

export interface SlotType {
  description: string;
  name: string,
  type: string,
  supportedElements: Array<ComponentData>,
  isArray: boolean,
}

export interface ParameterType {
  name: string,
  type: string
}

export interface MethodType {
  name: string;
  description: string;
}

export interface ComponentData {
  description: string;
  baseName: string;
  dependencies: Array<ComponentData>,
  selector: string,
  implements: Array<string>,
  path: string,
  inputs: InputType[],
  outputs: OutputType[],
  slots: SlotType[],
  methods: MethodType[],
  imports: ImportData[],
  formData: {
    property: InputType,
    events: Array<OutputType>,
  }[]
}
