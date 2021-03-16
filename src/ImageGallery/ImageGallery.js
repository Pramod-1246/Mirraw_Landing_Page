import React from 'react';
import './ImageGallery.css';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';



const imageGalleryList = [
    {
        src:"https://assets0.mirraw.com/frontpages/9222/Christmast_%28layout_down%29-01_main.jpg?1608803378",
        alt:"altTitle1",
        text:"Banarasi Silk"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9223/Christmast_%28layout_down%29-02_main.jpg?1608803384",
        alt:"altTitle2",
        text:"Bandhani"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9224/Christmast_%28layout_down%29-03_main.jpg?1608803387",
        alt:"altTitle3",
        text:"Kanchipuram Silk"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9225/Christmast_%28layout_down%29-04_main.jpg?1608803393",
        alt:"altTitle4",
        text:"Handloom Sarees"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9226/Christmast_%28layout_down%29-05_main.jpg?1608803787",
        alt:"altTitle5",
        text:"Earings"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9227/Christmast_%28layout_down%29-06_main.jpg?1608803794",
        alt:"altTitle6",
        text:"Necklace Sets"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9228/Christmast_%28layout_down%29-07_main.jpg?1608803796",
        alt:"altTitle7",
        text:"Bangles"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9229/Christmast_%28layout_down%29-08_main.jpg?1608803803",
        alt:"altTitle8",
        text:"Maang Tikka"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9230/Christmast_%28layout_down%29-09_main.jpg?1608804204",
        alt:"altTitle9",
        text:"Roots Of India"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9231/Christmast_%28layout_down%29-10_main.jpg?1608804212",
        alt:"altTitle10",
        text:"Pallazo Suits"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9232/Christmast_%28layout_down%29-11_main.jpg?1608804220",
        alt:"altTitle11",
        text:"Straight Suits"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9233/Christmast_%28layout_down%29-12_main.jpg?1608804225",
        alt:"altTitle12",
        text:"Beauty Essentials"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9234/Christmast_%28layout_down%29-13_main.jpg?1608804494",
        alt:"altTitle13",
        text:"Bags"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9235/Christmast_%28layout_down%29-14_main.jpg?1608804500",
        alt:"altTitle14",
        text:"Footwear"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9236/Christmast_%28layout_down%29-15_main.jpg?1608804503",
        alt:"altTitle15",
        text:"Stoles & Dupattas"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9237/Christmast_%28layout_down%29-16_main.jpg?1608804509",
        alt:"altTitle16",
        text:"Westernwear"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9357/Christmast_%28layout_down%29-17_main.jpg?1608805778",
        alt:"altTitle17",
        text:"Libaas"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9358/Christmast_%28layout_down%29-18_main.jpg?1608805785",
        alt:"altTitle9",
        text:"Shaily"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9359/Christmast_%28layout_down%29-19_main.jpg?1608805785",
        alt:"altTitle9",
        text:"Jaipur Kurti"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9360/Christmast_%28layout_down%29-20_main.jpg?1608805792",
        alt:"altTitle9",
        text:"Juniper"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9361/Christmast_%28layout_down%29-21_main.jpg?1608805798",
        alt:"altTitle9",
        text:"Classicate From The House Of Chennai..."
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9362/Christmast_%28layout_down%29-22_main.jpg?1608805799",
        alt:"altTitle9",
        text:"Ritu Kumar"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9363/Christmast_%28layout_down%29-23_main.jpg?1608805806",
        alt:"altTitle9",
        text:"Rina Dhaka"
    },
    {
        src:"https://assets0.mirraw.com/frontpages/9364/Christmast_%28layout_down%29-24_main.jpg?1608805806",
        alt:"altTitle9",
        text:"Payal Singhal"
    }

]

function ImageGallery() {

  return (
    <div className="rootGallery">
        {
            imageGalleryList.map((tile,idx) => (
                <GridListTile className="image-tile" component='div' key={idx} >
                    <img src={tile.src} alt={tile.alt} />
                    <GridListTileBar
                        title={tile.text}
                    />
                </GridListTile>
                )
            )
        }
    </div>
  );
}

export default ImageGallery;
