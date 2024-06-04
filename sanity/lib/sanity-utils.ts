import { client } from "@/sanity/lib/client";

export async function getHeaderData() {
  const query = `*[_type == 'siteData'] {
    title,
    navTitle1,
    navTitle2,
    "logoUrl": logo.asset -> url, 
    navItems[] -> {
      navTitle1,
      navTitle2,
      "currentSlug": slug.current,
    }
  }`;
  const siteData = await client.fetch(query);

  return siteData;
}

export async function getCarouselData() {
  const query = `*[_type == 'siteData'][0] {
    carouselSlides[] -> {
      title,
      slideText,
      slideImage,
      "slideImageUrl": slideImage.asset -> url, 
      link[] -> {
        "currentSlug": slug.current,
      }
    },
    slideDuration,
  }`;
  const siteData = await client.fetch(query);

  return siteData;
}

export async function getHolidayBannerData() {
  const query = `*[_type == 'holidayBanner'][0] {
    title,
    ...,
    "primaryChristmasImageUrl": primaryChristmasImage.asset -> url,
    "secondaryChristmasImageUrl": secondaryChristmasImage.asset -> url,
    "tertiaryChristmasImageUrl": tertiaryChristmasImage.asset -> url,
    "primaryEasterImageUrl": primaryEasterImage.asset -> url,
    "secondaryEasterImageUrl": secondaryEasterImage.asset -> url,
    "tertiaryEasterImageUrl": tertiaryEasterImage.asset -> url,
  }`;
  const siteData = await client.fetch(query);

  return siteData;
}

export async function getUniversalHolidayBannerData() {
  const query = `*[_type == 'holidayBanner'][0] {
    title,
    universalBannerText,
    downloadLink,
    primaryChristmasImage,
    secondaryChristmasImage,
    primaryEasterImage,
    "primaryChristmasImageUrl": primaryChristmasImage.asset -> url,
    "secondaryChristmasImageUrl": secondaryChristmasImage.asset -> url,
    "primaryEasterImageUrl": primaryEasterImage.asset -> url,
  }`;
  const siteData = await client.fetch(query);

  return siteData;
}

export async function getCategoryData() {
  const query = `*[_type == 'siteData'] {
    title,
    navTitle1,
    tagline,
    categories[] -> {
      navTitle1,
      navTitle2,
      thumbnailImage,
      "thumbnailImageUrl": thumbnailImage.asset -> url,
      "currentSlug": slug.current,
    }
  }`;
  const siteData = await client.fetch(query);

  return siteData;
}

export async function getFooterData() {
  const query = `*[_type == 'siteData'] {
    title,
    streetAddress,
    cityStateZip,
    email,
    emailSubject,
    "grayscaleLogoUrl": grayscaleLogo.asset -> url,
  }`;
  const siteData = await client.fetch(query);

  return siteData;
}

export async function getPageData(slug: string) {
  const query = `*[_type == "pages" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    ...,
    contactData[] -> {
      title,
      streetAddress,
      cityStateZip,
      telephone,
      telephone2,
      email,
      email2,
      emailSubject,
      emailSubject2,
    },
    imageGallery[] -> {
      imageGallery[] {
        "imageUrl": asset -> url
      }
    },
    content[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug
        }
      }
    }
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export async function getJobsData(slug: string) {
  const query = `*[_type == "pages" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    jobsData[] -> {
      title,
      content[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "slug": @.reference->slug
          }
        }
      }
    },
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export async function getGalleryData() {
  const query = `*[_type == "gallery"] {
    imageGallery[] {
      "imageUrl": asset -> url
    }
  }`;

  const data = await client.fetch(query);

  return data;
}

export async function getFormResponseData() {
  const query = `*[_type == "siteData"][0] {
    title,
    formResponseText
  }`;

  const data = await client.fetch(query);

  return data;
}

export async function getNotFoundData() {
  const query = `*[_type == "siteData"][0] {
    title,
    notFoundTitle,
    notFoundText,
    "notFoundBannerUrl": notFoundBanner.asset -> url,
    "notFoundBannerAlt": notFoundBanner.asset -> alt,
  }`;

  const data = await client.fetch(query);

  return data;
}
