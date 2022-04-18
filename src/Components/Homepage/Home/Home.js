import React from 'react';
import Footer from '../../CommonComp/Footer/Footer';
import Header from '../../CommonComp/Header/Header';
import Banner from '../Banner/Banner';
import OnlineService from '../OnlineService/OnlineService';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <OnlineService></OnlineService>
            <Footer></Footer>
        </div>
    );
};

export default Home;