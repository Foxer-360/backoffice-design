interface SeoQueryData {
  id: string;
  plugin: string;
  content: SeoContent;
}

export interface SeoFormQM {
  seo: QueryData<SeoQueryData>;
  updateSeo: (updateData: { data: LooseObject, where: LooseObject }) => Promise<LooseObject>;
}

export interface SeoFormState {
  error?: Error;
  loading: boolean;
  seo: SeoQueryData;
  updateSeo: (updateData: { data: LooseObject, where: LooseObject }) => Promise<LooseObject>;
}

export interface SeoFormDataAndOperations {
  content: SeoContent;
  updateDefault: (key: string, value: string) => void;
  updateFacebook: (key: string, value: string) => void;
  updateTwitter: (key: string, value: string) => void;
  saveSeoContent: () => Promise<LooseObject>;
}

export interface DefaultSeoContent {
  title: string;
  description: string;
  themeColor: string;
  keywords: string;
  focusKeyword: string;
  defaultImage: string;
}

export interface FacebookSeoContent {
  title: string;
  description: string;
  image: string;
}

export interface TwitterSeoContent {
  title: string;
  description: string;
  image: string;
}

export interface SeoContent extends DefaultSeoContent {
  facebook: FacebookSeoContent;
  twitter: TwitterSeoContent;
}