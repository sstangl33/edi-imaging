import { defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Image Galleries",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Gallery Title",
      type: "string",
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
  ],
});
