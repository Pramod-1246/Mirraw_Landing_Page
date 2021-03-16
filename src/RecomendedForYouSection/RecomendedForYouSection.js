import React from 'react';
import './RecomendedForYouSection.css';

import SidelineHeader from '../CommonComponents/SidelineHeader/SidelineHeader';
import MultiItemCarousel from '../CommonComponents/MultiItemCarousel/MultiItemCarousel';

const imageList = [
    { 
        src:"https://assets1.mirraw.com//images/2028195/6_small.jpg?1458730479",
        alt:"image1"
    },
    {
        src:"https://assets1.mirraw.com//images/4087304/WHBL_042016_small.jpg?1533196566",
        alt:"image2"
    },
    {
        src:"https://assets1.mirraw.com//images/6153006/Peach_grey_Lehenga_small.jpg?1533198181",
        alt:"image3"
    },
    {
        src:"https://assets1.mirraw.com//images/6153036/Blue_Jequard_Flower_small.jpg?1544518864",
        alt:"image4"
    },
    {
        src:"https://assets1.mirraw.com//images/8065790/image_small.jpeg?1592658993",
        alt:"image5"
    },
    {
        src:"https://assets1.mirraw.com//images/7681834/image_small.jpeg?1577358301",
        alt:"image6"
    },
    {
        src:"https://assets1.mirraw.com//images/7595805/image_small.jpeg?1575108580",
        alt:"image7"
    },
    {
        src:"https://assets1.mirraw.com//images/7595571/image_small.jpeg?1575107858",
        alt:"image8"
    },
    {
        src:"https://assets1.mirraw.com//images/7560261/WhatsApp_Image_2019-11-14_at_6.02.12_PM_small.jpeg?1574080172",
        alt:"image9"
    },
    {
        src:"https://assets1.mirraw.com//images/7600232/image_small.jpeg?1575280421",
        alt:"image10"
    },
    {
        src:"https://assets1.mirraw.com//images/8242173/KSKK0334A_small.jpg?1598771215",
        alt:"image11"
    },
    {
        src:"https://assets1.mirraw.com//images/8242164/KSKK0333A_small.jpg?1598771089",
        alt:"image12"
    },
    {
        src:"https://assets1.mirraw.com//images/8242164/KSKK0333A_small.jpg?1598771089",
        alt:"image13"
    },
    {
        src:"https://assets1.mirraw.com//images/6122146/Peach_Palazzo_small.jpg?1544518797",
        alt:"image14"
    },
    {
        src:"https://assets1.mirraw.com//images/6552084/1068-1_small.jpg?1542809130",
        alt:"image15"
    }
]

function RecomendedForYouSection () {
    return(
        <div className="recomended-for-you-carousel">
           <SidelineHeader title={"RECOMENDED FOR YOU"} />
           <MultiItemCarousel items={imageList}/>
        </div>
    );
}

export default RecomendedForYouSection;