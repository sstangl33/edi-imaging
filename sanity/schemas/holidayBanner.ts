import { defineType } from "sanity";

export const holidayBanner = defineType({
  name: "holidayBanner",
  title: "Holiday Banner",
  type: "document",
  options: {
    singleton: true, // Identify this document as a singleton
  },
  fields: [
    {
      name: "title",
      title: "UniversalBanner Title",
      type: "string",
      description:
        "This will be the title when the banner shows Christmas and Easter images.",
      validation: (rule) => rule.required(),
    },
    {
      name: "christmasTitle",
      title: "Christmas Banner Title",
      type: "string",
      description:
        "This will be the title when the banner only shows Christmas images.",
    },
    {
      name: "easterTitle",
      title: "Easter Banner Title",
      type: "string",
      description:
        "This will be the title when the banner only shows Easter images.",
    },
    {
      name: "universalBannerText",
      title: "Universal Banner Text",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "christmasBannerText",
      title: "Christmas Banner Text",
      type: "string",
    },
    {
      name: "easterBannerText",
      title: "Easter Banner Text",
      type: "string",
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "christmasBannerStartMonth",
      title: "Christmas Banner Start Month",
      type: "number",
      description:
        "Select the month you would like to start using the Christmas banner on the Home page. Christmas banner usage will start at the beginning of the selected month.",
      options: {
        list: [
          { title: "July", value: 7 },
          { title: "August", value: 8 },
          { title: "September", value: 9 },
          { title: "October", value: 10 },
          { title: "November", value: 11 },
        ],
      },
    },
    {
      name: "christmasBannerEndMonth",
      title: "Christmas Banner End Month",
      type: "number",
      description:
        "Select the month you would like to stop using the Christmas banner on the Home page. Christmas banner usage will stop at the end of the selected month.",
      options: {
        list: [
          { title: "January", value: 1 },
          { title: "February", value: 2 },
        ],
      },
    },
    {
      name: "easterBannerStartMonth",
      title: "Easter Banner Start Month",
      type: "number",
      description:
        "Select the month you would like to start using the Easter banner on the Home page. Easter banner usage will start at the beginning of the selected month.",
      options: {
        list: [
          { title: "January", value: 1 },
          { title: "February", value: 2 },
          { title: "March", value: 3 },
          { title: "April", value: 4 },
        ],
      },
    },
    {
      name: "easterBannerEndMonth",
      title: "Easter Banner End Month",
      type: "number",
      description:
        "Select the month you would like to stop using the Easter banner on the Home page. Banner usage will stop at the end of the selected month.",
      options: {
        list: [
          { title: "April", value: 4 },
          { title: "May", value: 5 },
          { title: "June", value: 6 },
          { title: "July", value: 7 },
          { title: "August", value: 8 },
        ],
      },
    },
    {
      name: "primaryChristmasImage",
      title: "Primary Christmas Image",
      type: "image",
      validation: (rule) => rule.required(),
      description:
        "This image will always be seen in the Universal and Christmas banners. This image should be 400x286 pixels.",
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
      name: "secondaryChristmasImage",
      title: "Secondary Christmas Image",
      type: "image",
      validation: (rule) => rule.required(),
      description:
        "This image will always be seen in the Christmas banner, but may not be visible in the Universal banner on some devices. This image should be 400x286 pixels.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
    {
      name: "tertiaryChristmasImage",
      title: "Tertiary Christmas Image",
      type: "image",
      description:
        "This image will not be seen in the Universal banner, and may not be visible in the Christmas banner on some devices. This image should be 400x286 pixels.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
    {
      name: "primaryEasterImage",
      title: "Primary Easter Image",
      type: "image",
      validation: (rule) => rule.required(),
      description:
        "This image will always be seen in the Universal, and Easter banners. This image should be 400x286 pixels.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
    {
      name: "secondaryEasterImage",
      title: "Secondary Easter Image",
      type: "image",
      description:
        "This image will always be seen in the Easter banner, but will not be visible in the Universal banner. This image should be 400x286 pixels.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
    {
      name: "tertiaryEasterImage",
      title: "Tertiary Easter Image",
      type: "image",
      description:
        "This image will not be seen in the Universal banner, and may not be visible in the Easter banner on some devices. This image should be 400x286 pixels.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
  ],
});
