import React from 'react'
import HeroCarousel from '../Components/HeroCarousel';
import Todayselection from '../Components/Todayselection';
import Advertisementbanner from '../Components/Advertisementbanner';

export default function Homepage() {
    return (
        <div>
            <HeroCarousel />
            <Todayselection />
            <Advertisementbanner />
        </div>
    )
}
