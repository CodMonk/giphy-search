export interface GiphyOptions {
  limit: Number
  
}
export interface ImageType {
  id: string,
  url:string,
  images: {
    fixed_height_small: {url:string};
  }
}

export const defaults: GiphyOptions = {
  limit: 10,
};


export interface ImageList {
  data: Array<ImageType>;
}
