import React from 'react';
import { Fragment } from "react";
import './Item.css';


const Item = () => {
    return (
        <Fragment>
            <li className="list-group-item">
                <div className="row w-100">
                    <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                        <label className="name lead">Mike Anamendolla</label>
                        <br />
                        <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
                        <span className="text-muted">5842 Hillcrest Rd</span>
                        <br />
                        <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                        <span className="text-muted small">(870) 288-4149</span>
                        <br />
                        <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
                        <span className="text-muted small text-truncate">mike.ana@example.com</span>
                    </div>
                </div>
            </li>

            <li class="list-group-item">
                <div class="row w-100">
                    <div class="col-12 col-sm-6 col-md-3 px-0">
                        <img src="http://demos.themes.guide/bodeo/assets/images/users/m105.jpg" alt="Seth Frazier" class="img-fluid rounded-circle d-block mx-auto"/>
                        </div>
                        <div class="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span class="name lead">Seth Frazier</span>
                            <br/>
                                <span class="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="7396 E North St"></span>
                                <span class="text-muted">7396 E North St</span>
                                <br/>
                                    <span class="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(560) 180-4143"></span>
                                    <span class="text-muted small">(560) 180-4143</span>
                                    <br/>
                                        <span class="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="seth.frazier@example.com"></span>
                                        <span class="text-muted small text-truncate">seth.frazier@example.com</span>
                        </div>
                    </div>
                </li>
        </Fragment>
                        );
                    };
                    
export default Item;