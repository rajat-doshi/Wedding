import React from "react";

const Filter = () => {
  return (
    <div class="container-search-job">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1">
            <div class="search-job">
              <h2 class="search-job-title">
                FIND YOUR <span>DREAM</span> PARTNER
              </h2>

              <div class="search-job-form">
                <form action="#" method="get">
                  <div class="row no-gutters">
                    <div class="col-12 col-md-4">
                      <label>Looking For</label>
                      <div class="search-job-form-field first">
                        <label
                          for="searchJob"
                          class="search-job-form-field-label"
                        >
                          <span class="icon icon-search"></span>
                        </label>
                        <select
                          name=""
                          id="searchCat"
                          class="search-job-form-field"
                        >
                          <option value="0">Male</option>
                          <option value="0">Female</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-3">
                      <label>Age Between</label>
                      <div class="search-job-form-field">
                        <label
                          for="searchCat"
                          class="search-job-form-field-label"
                        >
                          <span class="icon icon-tag-black-shape"></span>
                        </label>
                        <select
                          name=""
                          id="searchCat"
                          class="search-job-form-field"
                        >
                          <option value="0">20-25</option>
                          <option value="0">26-30</option>
                          <option value="0">31-35</option>
                          <option value="0">36-40</option>
                          <option value="0">41-45</option>
                          <option value="0">46-50</option>
                          <option value="0">51-55</option>
                          <option value="0">56-60</option>
                          <option value="0">61-65</option>
                          <option value="0">66-70</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-3">
                      <label>Religion</label>
                      <div class="search-job-form-field">
                        <label
                          for="searchWhere"
                          class="search-job-form-field-label"
                        >
                          <span class="icon icon-pin"></span>
                        </label>
                        <select
                          name=""
                          id="searchCat"
                          class="search-job-form-field"
                        >
                          <option value="0">Hindu</option>
                          <option value="0">Muslim</option>
                          <option value="0">Jain</option>
                          <option value="0">Sikh</option>
                          <option value="0">Christian</option>
                          <option value="0">Buddhism</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-2">
                      <label>&nbsp;</label>
                      <button type="submit" class="search-job-form-button">
                        SEARCH PARTNER
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <h3 class="search-job-title-new-job">
                <span>500</span> couples got married in <span>7</span> days
              </h3>

              <div class="row">
                <div class="col-6 col-md-3">
                  <div class="search-job-statistics">
                    <div class="text">USERS</div>
                    <div class="num counter">10012</div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="search-job-statistics">
                    <div class="text">MARRIED</div>
                    <div class="num counter">7989</div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="search-job-statistics">
                    <div class="text">STATES</div>
                    <div class="num counter">28</div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="search-job-statistics">
                    <div class="text">CASTE</div>
                    <div class="num counter">319</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
