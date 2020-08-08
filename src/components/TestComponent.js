import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  function RenderTest ({test}) {
      return (
          <Card>
              <Link to={`/test/${test.id}`} >
                  <CardImg width="100%" src={test.image} alt={test.name} />
                  <CardImgOverlay>
                      <CardTitle>{test.name}</CardTitle>
                  </CardImgOverlay>
              </Link>
          </Card>
      );
  }

class Test extends Component {

    render (){

        const tests = this.props.tests.map((test) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <RenderTest test={test} />
              </div>
            );
          });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Tests</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Tests</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {tests}
                </div>
            </div>
            );

    }
    
  }


export default Test;