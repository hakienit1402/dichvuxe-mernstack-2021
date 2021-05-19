import React from 'react'
import FormRent from '../../components/home/form-rent/FormRent'
import MyCarousel from '../../components/home/MyCarousel'
import { Affix, Button } from 'antd';

import './home.css'
import PostConatainer from '../../components/posts/PostConatainer';
const HomePage = () => {
    return (
        <div  className="homepage">
        <div className='session1'>
          <MyCarousel/>
        
          <FormRent/>
         
        </div>
        <PostConatainer/>
        <div className='session2'>
            <div className='paner'>
            </div>
        </div>
        </div>
    )
}

export default HomePage
