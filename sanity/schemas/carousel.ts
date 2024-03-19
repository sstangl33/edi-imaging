import { defineType } from "sanity";

export const carousel = defineType({
  name: "carousel",
  title: "Carousel",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Slide Title",
      type: "string",
    },
    {
      name: "slideText",
      title: "Slide Text",
      type: "string",
    },
    {
      name: "slideImage",
      title: "Slide Image",
      type: "image",
      description: "Carousel images should be 2000x885 pixels.",
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
      name: "link",
      title: "Link",
      description:
        "Use the dropdown list below to select the page you would like the slide to link to.",

      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [{ type: "pages" }],
        },
      ],
    },
  ],
});
