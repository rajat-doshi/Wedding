import React from "react";
import { MyContext } from "../../pages/index"
const Slider = () => {
    return (<>
        <section class="welcome-area">
            <div class="welcome-slides owl-carousel">
                <div class="single-welcome-slide bg-img" style={{ "backgroundImage": "url(/static/img/bg-img/bg-banner1.jpg)" }}>
                    <div class="welcome-content h-100">
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 col-md-9 col-lg-6">
                                    <div class="welcome-text">
                                        <h2 data-animation="fadeInUp" data-delay="100ms">We Care About You.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single-welcome-slide bg-img" style={{ "backgroundImage": "url(/static/img/bg-img/bg-banner2.jpg)" }}>
                    <div class="welcome-content h-100">
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 col-md-9 col-lg-6">
                                    <div class="welcome-text">
                                        <h2 data-animation="fadeInUp" data-delay="100ms">We Care About You</h2>
                                        <p data-animation="fadeInUp" data-delay="400ms">The best metrinoail site in the region</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>)
}

export default Slider;