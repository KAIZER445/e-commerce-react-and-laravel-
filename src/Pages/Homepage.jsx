import React from 'react'
import HeroCarousel from '../Components/HeroCarousel';
import Todayselection from '../Components/Todayselection';
import Advertisementbanner from '../Components/Advertisementbanner';
import Justforyou from '../Components/Justforyou';

export default function Homepage() {
    return (
        <>
            <HeroCarousel />
            <Todayselection />
            <Advertisementbanner />
            <Justforyou />
        </>
    )
}
