import { defineField, defineType } from "sanity";

export const siteData = defineType({
  name: "siteData",
  title: "Site Data",
  type: "document",
  options: {
    singleton: true, // Identify this document as a singleton
  },
  fields: [
    {
      name: "title",
      title: "Title (Business Name)",
      type: "string",
    },
    {
      name: "navTitle1",
      title: "Navigation Title - 1st Row",
      type: "string",
      description:
        "The link names in this site's navigation are designed to have two rows and to be uppercase. This case-sensitive field generates the first row of the title for the home page that will appear in the navigation. This field will also generate the business title that appears on the Home page.",
    },
    {
      name: "navTitle2",
      title: "Navigation Title - 2nd Row",
      type: "string",
      description:
        "The link names in this site's navigation are designed to have two rows. This case-sensitive field generates the second row of the title for the home page that will appear in the navigation.",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "streetAddress",
      title: "Business Street Address",
      type: "string",
    },
    {
      name: "cityStateZip",
      title: "Business City, State, and Zip Code",
      type: "string",
    },
    {
      name: "telephone",
      title: "Business Telephone Number",
      type: "string",
    },
    {
      name: "telephone2",
      title: "Business Telephone Number 2",
      type: "string",
    },
    {
      name: "email",
      title: "Business Email Address",
      type: "string",
    },
    {
      name: "emailSubject",
      title: "Email Subject",
      type: "string",
      description:
        "All emails sent from this site will contain the Subject that is entered here.",
    },
    {
      name: "email2",
      title: "Business Email Address 2",
      type: "string",
    },
    {
      name: "emailSubject2",
      title: "Email Subject 2",
      type: "string",
      description:
        "All emails sent from this site will contain the Subject that is entered here.",
    },
    {
      name: "certSeal",
      title: "Certification Seal",
      type: "image",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "grayscaleLogo",
      title: "Grayscale Logo",
      type: "image",
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
      description:
        "The supplied favicon must be a 512x512px SVG. Additional file types and sizes will be automatically generated from the provided SVG.",
    },
    {
      name: "navItems",
      title: "Navigation Items",
      description:
        "Use the drop-down list below to select the links  that will be displayed on the navigation of your website. The links can be re-ordered by dragging and dropping.",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [{ type: "pages" }],
        },
      ],
    },
    {
      name: "carouselSlides",
      title: "Carousel Slides",
      description:
        "Use the drop-down list below to select the carousel slides that will be displayed on the Home page of your website. The slides can be re-ordered by dragging and dropping.",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [{ type: "carousel" }],
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      description:
        "Use the drop-down list below to select the categories that will be displayed on the Home page of your website. The categories can be re-ordered by dragging and dropping.",
      type: "array",
      of: [
        {
          title: "Reference",
          type: "reference",
          to: [{ type: "pages" }],
        },
      ],
    },
    {
      name: "notFoundBanner",
      title: "404 Banner Image",
      type: "image",
      description:
        "This is the banner that will appear on the 404 page. This image should be 1224x500px.",
    },
    {
      name: "notFoundTitle",
      title: "404 Title",
      type: "string",
      description: "This is the title that will appear on the 404 page.",
    },
    {
      name: "notFoundText",
      title: "404 Text",
      type: "string",
      description: "This is the text that will appear on the 404 page.",
    },
  ],
});
