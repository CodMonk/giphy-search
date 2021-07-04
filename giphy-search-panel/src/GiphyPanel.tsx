/***
 * Grafana panel for searching images on giphy. 
 * 
 */
import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SearchPanel } from './SearchPanel';
import axios from 'axios';
import { ImageList, ImageType,GiphyOptions } from './types';
import { GIFY_SEARCH_URL } from './config/urls'

import './assets/css/style.css'
interface Props extends PanelProps<GiphyOptions> { }

export const GiphyPanel: React.FC<Props> = ({ options}) => {
  
  const [imageList, setImageList] = useState<ImageList | null>(null)

  const limit = options.limit?options.limit:10; 

  /**
   * This function makes a api call to giphy to get images of search text provided by the user.
   * @param searchText | Text to be searched on giphy
   */
  const searchImages = async (searchText: string) => {
   
    try {
      if(searchText){
        const resp = await axios.get(`${GIFY_SEARCH_URL}&q=${searchText}&limit=${limit}`)
        if (resp && resp.data) {
          const imageListData: ImageList = { data: resp.data.data.map((item: ImageType) => ({ id: item.id, url: item.images.fixed_height_small.url })) };
          setImageList(imageListData)
        }
      }else{
        setImageList(null)
      }
 
    }
    catch (err) {
      console.log(err, "ERROR OCCURED")
    }
  }

  return (
   
    <div>
      <div >
        <SearchPanel searchImage={searchImages}></SearchPanel>
      </div>
      <div id="imageContainer" className="image-container">
        {imageList && imageList.data.length ? imageList.data.map((image) => 
          { return <img className="image" src={image.url}></img> }) : 
          imageList===null?"":"No image available for entered text"}
      </div>
    </div>
  );
};
