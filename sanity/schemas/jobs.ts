import { defineType } from "sanity";

export const jobs = defineType({
  name: "jobs",
  title: "Jobs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "contactData",
      title: "Contact Data",
      description:
        "Use the dropdown list below to import contact data from the Site Data schema.",
      hidden: true,
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [{ type: "siteData" }],
        },
      ],
    },
  ],
});
