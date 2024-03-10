import { defineType } from "sanity";

export const pages = defineType({
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Warning: This field is case-sensitive.",
    },
    {
      name: "navTitle1",
      title: "Navigation Title - 1st Row",
      type: "string",
      description:
        "The link names in this site's navigation are designed to have two rows. This case-sensitive field generates the first row of the title that will appear in the navigation.",
    },
    {
      name: "navTitle2",
      title: "Navigation Title - 2nd Row",
      type: "string",
      description:
        "The link names in this site's navigation are designed to have two rows. This case-sensitive field generates the second row of the title that will appear in the navigation.",
    },
    {
      name: "slug",
      title: "URL Slug for your page",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
          description:
            "alt text is the written copy that appears in place of an image on a webpage if the image fails to load on a user's screen. This text helps screen-reading tools describe images to visually impaired readers and allows search engines to better crawl and rank your website.",
        },
      ],
    },
    {
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
          description:
            "Alternative text is the written copy that appears in place of an image on a webpage if the image fails to load on a user's screen. This text also helps screen-reading tools describe images to visually impaired readers and allows search engines to better crawl and rank your website.",
        },
      ],
    },
    {
      name: "holidayBanner",
      title: "Holiday Banner",
      type: "boolean",
      description: "Should this page include the holiday banner?",
    },
    {
      name: "isContact",
      title: "Add Contact Information to this page?",
      type: "boolean",
    },
    {
      name: "addJobs",
      title: "Add a list of available jobs to this page?",
      type: "boolean",
    },
    {
      name: "jobsData",
      title: "Job Opportunities",
      hidden: ({ document }) => !document?.addJobs,
      description:
        "Use the dropdown list below to create a list of available job opportunities.",

      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [{ type: "jobs" }],
        },
      ],
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
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alternative text",
              type: "text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
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
    {
      name: "imageGallery",
      title: "Image Gallery",
      description:
        "Use the dropdown list below to select the image gallery you would like to appear at the bottom of the page.",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [{ type: "gallery" }],
        },
      ],
    },
  ],
});
