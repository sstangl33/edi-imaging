export type headerDataTypes = {
  title: string;
  logoUrl: string;
  navItems: any;
  navTitle1: string;
  navTitle2: string;
  currentSlug: string;
};

export type carouselDataTypes = {
  title: string;
  slideText: string;
  slideImage: any;
  slideImageUrl: string;
  currentSlug: string;
  link: [];
};

export type holidayBannerDataTypes = {
  title: string;
  christmasTitle: string;
  easterTitle: string;
  universalBannerText: string;
  christmasBannerText: string;
  easterBannerText: string;
  christmasBannerStartMonth: number;
  christmasBannerEndMonth: number;
  easterBannerStartMonth: number;
  easterBannerEndMonth: number;
  downloadLink: string;
  primaryChristmasImageUrl: string;
  secondaryChristmasImageUrl: string;
  tertiaryChristmasImageUrl: string;
  primaryEasterImageUrl: string;
  secondaryEasterImageUrl: string;
  tertiaryEasterImageUrl: string;
  primaryChristmasImage: any;
  secondaryChristmasImage: any;
  tertiaryChristmasImage: any;
  primaryEasterImage: any;
  secondaryEasterImage: any;
  tertiaryEasterImage: any;
};

export type universalHolidayBannerDataTypes = {
  title: string;
  universalBannerText: string;
  downloadLink: string;
  primaryChristmasImageUrl: string;
  secondaryChristmasImageUrl: string;
  primaryEasterImageUrl: string;
};

export type categoryDataTypes = {
  title: string;
  navTitle1: string;
  navTitle2: string;
  tagline: string;
  thumbnailImageUrl: string;
  categories: [];
  currentSlug: string;
};

export type footerDataTypes = {
  title: string;
  grayscaleLogoUrl: any;
  streetAddress: string;
  cityStateZip: string;
  email: string;
  emailSubject: string;
};

export type pageDataTypes = {
  title: string;
  navTitle: string;
  currentSlug: string;
  bannerImage: any;
  content: any;
  contactData: any;
  holidayBanner: boolean;
  addJobs: boolean;
  imageGallery: any;
};

export type contactDataTypes = {
  title: string;
  streetAddress: string;
  cityStateZip: string;
  telephone: string;
  telephone2: string;
  email: string;
  email2: string;
  emailSubject: string;
  emailSubject2: string;
};

export type jobsDataTypes = {
  title: string;
  content: any;
  jobsData: any;
};

export type formResponseDataTypes = {
  title: string;
  formResponseText: string;
};

export type notFoundDataTypes = {
  title: string;
  notFoundBannerUrl: string;
  notFoundBannerAlt: string;
  notFoundTitle: string;
  notFoundText: string;
};
