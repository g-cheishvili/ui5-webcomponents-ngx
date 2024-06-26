/**
 * Type for import specifier
 */
export interface ImportSpecifier {
  /** The name of the imported symbol for local use */
  local: string | (() => string);
  /** The name of the exported symbol to import */
  imported: string | (() => string);
}

export interface ImportData {
  /** The list of the imported symbols */
  specifiers: ImportSpecifier[];
  /** The path to import from, either string or the function which returns the path */
  path: string | ((caller: any) => string);
}
