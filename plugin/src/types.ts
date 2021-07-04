export interface options {
  limit: string
  
}
export interface ImageType {
  id: string,
  url:string,
  images: {
    fixed_height_small: {url:string};
  }
}

export const defaults: options = {
  limit: ''
};


export interface ImageList {
  data: Array<ImageType>;
}
