import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, TableComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-import type { table } from "./TableRow.js";/code> component provides a set of sophisticated and convenient functions for responsive table design. It provides a comprehensive set of features for displaying and dealing with vast amounts of data. <br><br> To render the <code>Table</code> properly, the order of the <code>columns</code> should match with the order of the item <code>cells</code> in the <code>rows</code>. <br><br> Desktop and tablet devices are supported. On tablets, special consideration should be given to the number of visible columns and rows due to the limited performance of some devices.

<h3>Selection</h3> To benefit from the selection mechanism of <code>ui5-table</code> component, you can use the available selection modes: <code>SingleSelect</code> and <code>MultiSelect</code>. <br> In additition to the used mode, you can also specify the <code>ui5-table-row</code> type choosing between <code>Active</code> or <code>Inactive</code>. <br><br> In <code>SingleSelect</code> mode, you can select both an <code>Active</code> and <code>Inactive</code> row via mouse or by pressing the <code>Space</code> or <code>Enter</code> keys. <br> In <code>MultiSelect</code> mode, you can select both an <code>Active</code> and <code>Inactive</code> row by pressing the <code>Space</code> key when a row is on focus or via mouse click over the selection checkbox of the row. In order to select all the available rows at once, you can use the selection checkbox presented in the table's header. <br><br> <b>Note:</b> Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br> Furthermore, you can interact with <code>ui5-table</code> via the following keys. <br>

<ul> <li>[F7] - If focus is on an interactive control inside an item, moves focus to the corresponding item.</li> <li>[CTRL]+[A] - Selects all items, if MultiSelect mode is enabled.</li> <li>[HOME]/[END] - Focuses the first/last item.</li> <li>[PAGEUP]/[PAGEDOWN] - Moves focus up/down by page size (20 items by default).</li> <li>[ALT]+[DOWN]/[UP] - Switches focus between header, last focused item, and More button (if applies) in either direction.</li> <li>[SHIFT]+[DOWN]/[UP] - Selects the next/previous item in a MultiSelect table, if the current item is selected (Range selection). Otherwise, deselects them (Range deselection).</li> <li>[SHIFT]+[HOME]/[END] - Range selection to the first/last item of the List.</li> <li>[CTRL]+[HOME]/[END] - Same behavior as HOME & END.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { TableComponent } from "@ui5/webcomponents-ngx/compat/table";</code> (for <code>ui5-table-cell</code>)`;
export default {
  title: 'UI5 Web Components / Compat / Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const Table: Story<TableComponent> = (
  args: TableComponent & any
) => ({
  props: args,
  template: `

		<ui5-table>
				<!-- Columns -->
				<ui5-table-column slot="columns">
					<span>Product</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="600" popin-text="Supplier" demand-popin>
					<span>Supplier</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="800" popin-text="Country" demand-popin class="table-header-text-alignment">
					<span>Country</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" class="table-header-text-alignment">
					<span>Price</span>
				</ui5-table-column>

				<!-- Rows -->
				<ui5-table-row>
					<ui5-table-cell><span>Apple</span></ui5-table-cell>
					<ui5-table-cell><span>Green Gardens Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
					<ui5-table-cell><span>1 eur / kg</span></ui5-table-cell>
				</ui5-table-row>

				<ui5-table-row>
					<ui5-table-cell><span>Banana</span></ui5-table-cell>
					<ui5-table-cell><span>Yellow Company Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Ecuador</span></ui5-table-cell>
					<ui5-table-cell><span>2 eur / kg</span></ui5-table-cell>
				</ui5-table-row>

				<ui5-table-row>
					<ui5-table-cell><span>Tomato</span></ui5-table-cell>
					<ui5-table-cell><span>Red Gardens Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
					<ui5-table-cell><span>1 eur / kg</span></ui5-table-cell>
				</ui5-table-row>


				<ui5-table-row>
					<ui5-table-cell><span>Mango</span></ui5-table-cell>
					<ui5-table-cell><span>Costa Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Costa Rica</span></ui5-table-cell>
					<ui5-table-cell><span>5 eur / kg</span></ui5-table-cell>
				</ui5-table-row>
		</ui5-table>
	`,
});

export const tableInSingleSelectMode: Story<TableComponent> = (
  args: TableComponent & any
) => ({
  props: args,
  template: `
		<ui5-table mode="SingleSelect">
				<!-- Columns -->
				<ui5-table-column slot="columns">
					<span>Product</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="600" popin-text="Supplier" demand-popin>
					<span>Supplier</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="800" popin-text="Country" demand-popin class="table-header-text-alignment">
					<span>Country</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" class="table-header-text-alignment">
					<span>Price</span>
				</ui5-table-column>

				<!-- Rows -->
				<ui5-table-row>
					<ui5-table-cell><span>Apple</span></ui5-table-cell>
					<ui5-table-cell><span>Green Gardens Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
					<ui5-table-cell><span>1 eur / kg</span></ui5-table-cell>
				</ui5-table-row>

				<ui5-table-row selected>
					<ui5-table-cell><span>Banana</span></ui5-table-cell>
					<ui5-table-cell><span>Yellow Company Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Ecuador</span></ui5-table-cell>
					<ui5-table-cell><span>2 eur / kg</span></ui5-table-cell>
				</ui5-table-row>

				<ui5-table-row>
					<ui5-table-cell><span>Tomato</span></ui5-table-cell>
					<ui5-table-cell><span>Red Gardens Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
					<ui5-table-cell><span>1 eur / kg</span></ui5-table-cell>
				</ui5-table-row>


				<ui5-table-row>
					<ui5-table-cell><span>Mango</span></ui5-table-cell>
					<ui5-table-cell><span>Costa Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Costa Rica</span></ui5-table-cell>
					<ui5-table-cell><span>5 eur / kg</span></ui5-table-cell>
				</ui5-table-row>
		</ui5-table>
	`,
});

export const tableInMultiSelectMode: Story<TableComponent> = (
  args: TableComponent & any
) => ({
  props: args,
  template: `
		<ui5-table mode="MultiSelect">
				<!-- Columns -->
				<ui5-table-column slot="columns">
					<span>Product</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="600" popin-text="Supplier" demand-popin>
					<span>Supplier</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="800" popin-text="Country" demand-popin class="table-header-text-alignment">
					<span>Country</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" class="table-header-text-alignment">
					<span>Price</span>
				</ui5-table-column>

				<!-- Rows -->
				<ui5-table-row>
					<ui5-table-cell><span>Apple</span></ui5-table-cell>
					<ui5-table-cell><span>Green Gardens Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
					<ui5-table-cell><span>1 eur / kg</span></ui5-table-cell>
				</ui5-table-row>

				<ui5-table-row selected>
					<ui5-table-cell><span>Banana</span></ui5-table-cell>
					<ui5-table-cell><span>Yellow Company Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Ecuador</span></ui5-table-cell>
					<ui5-table-cell><span>2 eur / kg</span></ui5-table-cell>
				</ui5-table-row>

				<ui5-table-row selected>
					<ui5-table-cell><span>Tomato</span></ui5-table-cell>
					<ui5-table-cell><span>Red Gardens Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
					<ui5-table-cell><span>1 eur / kg</span></ui5-table-cell>
				</ui5-table-row>


				<ui5-table-row>
					<ui5-table-cell><span>Mango</span></ui5-table-cell>
					<ui5-table-cell><span>Costa Inc.</span></ui5-table-cell>
					<ui5-table-cell><span>Costa Rica</span></ui5-table-cell>
					<ui5-table-cell><span>5 eur / kg</span></ui5-table-cell>
				</ui5-table-row>
		</ui5-table>
	`,
});


export const tableWithNoData: Story<TableComponent> = (
  args: TableComponent & any
) => ({
  props: args,
  template: `
			<ui5-table class="demo-table" no-data-text="No Data">
				<!-- Columns -->
				<ui5-table-column slot="columns">
					<span style="line-height: 1.4rem">Product</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="800" popin-text="Supplier">
					<span style="line-height: 1.4rem">Supplier</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin>
					<span style="line-height: 1.4rem">Dimensions</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin>
					<span style="line-height: 1.4rem">Weight</span>
				</ui5-table-column>

				<ui5-table-column slot="columns">
					<span style="line-height: 1.4rem">Price</span>
				</ui5-table-column>
			</ui5-table>
		`,
});


export const tableWithGroupingAndSingleSelect: Story<
  TableComponent
> = (args: TableComponent & any) => ({
  props: args,
  template: `
		<ui5-table class="demo-table-single" mode="SingleSelect">
			<ui5-table-column id="column-1" slot="columns">
				<ui5-label>City</ui5-label>
			</ui5-table-column>
			<ui5-table-column id="column-2" slot="columns" min-width="500" popin-text="Supplier" demand-popin>
				<ui5-label>Supplier</ui5-label>
			</ui5-table-column>
			<ui5-table-column id="column-3" slot="columns" min-width="500">
				<ui5-label>Country</ui5-label>
			</ui5-table-column>

			<ui5-table-group-row>Country: Bulgaria</ui5-table-group-row>

			<ui5-table-row>
				<ui5-table-cell><span>Sofia</span></ui5-table-cell>
				<ui5-table-cell><span>Company 1</span></ui5-table-cell>
				<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row selected>
				<ui5-table-cell><span>Plovdiv</span></ui5-table-cell>
				<ui5-table-cell><span>Company 2</span></ui5-table-cell>
				<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
			</ui5-table-row>

			<ui5-table-group-row><span>Country: USA</span></ui5-table-group-row>

			<ui5-table-row>
				<ui5-table-cell><span>Denver</span></ui5-table-cell>
				<ui5-table-cell><span>Company 3</span></ui5-table-cell>
				<ui5-table-cell><span>USA</span></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row>
				<ui5-table-cell><span>Boston</span></ui5-table-cell>
				<ui5-table-cell><span>Company 4</span></ui5-table-cell>
				<ui5-table-cell><span>USA</span></ui5-table-cell>
			</ui5-table-row>
		</ui5-table>
	`,
});

export const tableWithGroupingAndMultiSelect: Story<TableComponent> = (
  args: TableComponent & any
) => ({
  props: args,
  template: `
		<ui5-table class="demo-table-multi" mode="MultiSelect">
			<ui5-table-column id="column-1" slot="columns">
				<ui5-label>City</ui5-label>
			</ui5-table-column>
			<ui5-table-column id="column-2" slot="columns" min-width="500" popin-text="Supplier" demand-popin>
				<ui5-label>Supplier</ui5-label>
			</ui5-table-column>
			<ui5-table-column id="column-3" slot="columns" min-width="500">
				<ui5-label>Country</ui5-label>
			</ui5-table-column>

			<ui5-table-group-row>Country: Bulgaria</ui5-table-group-row>

			<ui5-table-row>
				<ui5-table-cell><span>Sofia</span></ui5-table-cell>
				<ui5-table-cell><span>Company 1</span></ui5-table-cell>
				<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row selected>
				<ui5-table-cell><span>Plovdiv</span></ui5-table-cell>
				<ui5-table-cell><span>Company 2</span></ui5-table-cell>
				<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
			</ui5-table-row>

			<ui5-table-group-row><span>Country: USA</span></ui5-table-group-row>

			<ui5-table-row>
				<ui5-table-cell><span>Denver</span></ui5-table-cell>
				<ui5-table-cell><span>Company 3</span></ui5-table-cell>
				<ui5-table-cell><span>USA</span></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row>
				<ui5-table-cell><span>Boston</span></ui5-table-cell>
				<ui5-table-cell><span>Company 4</span></ui5-table-cell>
				<ui5-table-cell><span>USA</span></ui5-table-cell>
			</ui5-table-row>
		</ui5-table>
	`,
});
