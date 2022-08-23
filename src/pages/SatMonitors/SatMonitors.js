import React, { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";

import {
  GradientCircleRadialbar,
  BrushChart1,
  DashedLine,
} from "../Charts/ApexCharts/LineCharts/LineCharts";
import { GaugeChart } from "../Charts/ECharts/ECharts";
import { PaginationExample2 } from "../Tables/GridTables/GridTablesData";

const SatMonitors = () => {
  document.title = "Sat Monitors | Velzon - React Admin & Dashboard Template";
  const [removed, setRemoved] = useState(false);
  const [edit, setEdit] = useState(false);

  const dotsTab = (
    <div className='flex-shrink-0'>
      <div className='d-flex gap-1 align-items-center my-n2'>
        <UncontrolledDropdown direction='start'>
          <DropdownToggle
            tag='button'
            className='btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15'
          >
            <FeatherIcon icon='more-horizontal' className='icon-sm' />
          </DropdownToggle>

          <DropdownMenu className='dropdown-menu-end'>
            <DropdownItem>
              <i className='ri-eye-fill align-bottom me-2 text-muted'></i> View
            </DropdownItem>
            <DropdownItem onClick={() => setEdit(!edit)}>
              <i className='ri-pencil-fill align-bottom me-2 text-muted'></i>{" "}
              Edit
            </DropdownItem>
            <div className='dropdown-divider'></div>
            <DropdownItem
              onClick={() => setRemoved(!removed)}
              data-bs-toggle='modal'
              data-bs-target='#removeProjectModal'
            >
              <i className='ri-delete-bin-fill align-bottom me-2 text-muted'></i>{" "}
              Remove
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  );

  return (
    <div className='page-content'>
      <Container fluid>
        <BreadCrumb title='Sat Monitors' pageTitle='Pages' />

        <Row>
          <Col xl={8}>
            <Card>
              <CardHeader>
                <h4 className='card-title mb-0'>Electrical Power Subsystem</h4>
              </CardHeader>
              <div className='card-body'>
                <DashedLine dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
              </div>
            </Card>
          </Col>
          <Row>
            <Col xl='4' lg='5' xs='12' sm='10' md='9'>
              <Card>
                <CardHeader>
                  <div className={`px-3 mx-n3 rounded-top`}>
                    <div className='d-flex align-items-center'>
                      <div className='flex-grow-1'>
                        <h4 className='card-title mb-0'>Battery Temperature</h4>
                      </div>
                      {/* {dotsTab} */}
                    </div>
                  </div>
                </CardHeader>

                <CardBody>
                  <div
                    style={{
                      marginLeft: "0px",
                      marginRight: "0px",
                      marginBottom: "-40px",
                      marginTop: "-40px",
                    }}
                  >
                    <GaugeChart dataColors='["--vz-danger"]' />
                  </div>
                </CardBody>
              </Card>
            </Col>
            {!removed && (
              <Col
                xl='4'
                lg='5'
                xs='12'
                sm='10'
                md='9'
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
              >
                <Card>
                  <CardHeader>
                    <div className={`px-3 mx-n3 rounded-top`}>
                      <div className='d-flex align-items-center'>
                        <div className='flex-grow-1'>
                          <h4 className='card-title mb-0'>
                            Battery Temperature
                          </h4>
                        </div>
                        {dotsTab}
                      </div>
                    </div>
                  </CardHeader>

                  <CardBody>
                    <div
                      style={{
                        marginTop: "-30px",
                      }}
                    >
                      <GradientCircleRadialbar
                        dataColors='["--vz-success"]'
                        edited={edit}
                      />
                    </div>
                    <div style={{ marginTop: "-40px" }}>
                      <BrushChart1 dataColors='["--vz-danger"]' />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            )}
          </Row>
        </Row>
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h4 className='card-title mb-0'>Data Table</h4>
              </CardHeader>

              <CardBody>
                <div id='table-pagination'>
                  <PaginationExample2 />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SatMonitors;
