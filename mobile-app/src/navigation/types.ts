export type RootTabParamList = {
  HomeTab: undefined;
  AboutTab: undefined;
  ScheduleTab: undefined;
  GalleryTab: undefined;
  ContactTab: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type AboutStackParamList = {
  About: undefined;
};

export type ScheduleStackParamList = {
  Schedule: undefined;
};

export type GalleryStackParamList = {
  GalleryList: undefined;
  GalleryDetail: { slug: string };
  Books: undefined;
};

export type ContactStackParamList = {
  Contact: undefined;
};
