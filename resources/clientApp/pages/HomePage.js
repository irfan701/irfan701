import React, {Component} from 'react';
import HomeBanner from "../components/HomeBanner";
import CourseFeature from "../components/CourseFeature";
import CoursePlan from "../components/CoursePlan";
import PaymentGuide from "../components/PaymentGuide";
import MoreSeries from "../components/MoreSeries";
import Footer from "../components/Footer";

class HomePage extends Component {
    render() {
        return (
            <>
                <HomeBanner/>
                <CourseFeature/>
                <CoursePlan/>
                <PaymentGuide/>
                <MoreSeries/>
                <Footer/>
            </>
        );
    }
}

export default HomePage;
