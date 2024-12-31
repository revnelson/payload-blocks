import type { GroupField } from "payload"

// TODO: Add validation to make sure regions are unique

export const regionFilter: GroupField = {
	name: "regionFilter",
	interfaceName: "RegionFilter",
	label: false,
	type: "group",
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "hideIn",
					label: "Hide in...",
					type: "relationship",
					relationTo: ["pages"],
					hasMany: true,
					admin: {
						// width: "50%",
						// condition: (_, siblingData) => !siblingData?.showIn?.length,
						description:
							"If region(s)/stores(s) are selected, this will be shown everywhere except the selected region(s)/store(s)."
					}
				},
				{
					name: "showIn",
					label: "Show in...",
					type: "relationship",
					relationTo: ["pages"],
					hasMany: true,
					admin: {
						// width: "50%",
						// condition: (_, siblingData) => !siblingData?.hideIn?.length,
						description:
							"If region(s)/store(s) are selected, this will only be shown in the selected region(s)/store(s)."
					}
				}
			]
		}
	]
}
