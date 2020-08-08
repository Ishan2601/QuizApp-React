import React from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderQuestions({test, questions}) {
    const dispq = questions.map(question => {
        return(
            <div>
            <Card>
                <FormGroup tag="fieldset">
                    <CardHeader>
                    <CardTitle>{question.question}</CardTitle>
                    </CardHeader>
                    <CardBody>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name={question.options.A} />{' '}
                            {question.options.A}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name={question.options.B} />{' '}
                            {question.options.B}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name={question.options.C} />{' '}
                            {question.options.C}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name={question.options.D} />{' '}
                            {question.options.D}
                        </Label>
                    </FormGroup>
                    </CardBody>
                </FormGroup>
            </Card>
            <br></br>
            </div>
        );
    })
    return(
        <div className="col-12">
            <Form>
                {dispq}
                <FormGroup row>
                    <Col md={{size: 10}}>
                        <Button type="submit" color="danger">
                            End Test!
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
}
    function RenderTest({test, questions}) {
            if (test != null)
                return(
                    <Card>
                        <CardImg top src={test.image} alt={test.name} />
                        <CardBody>
                            <CardTitle>{test.name}</CardTitle>
                            {questions.map(question => {
                                return (
                                    <CardText>{question.question}</CardText>
                                );
                            })}
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }

    const ShowTest = (props) => {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/test">Tests</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.test.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.test.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderQuestions test={props.test} questions = {props.questions}/>
                </div>
            </div>
        );
    }
export default ShowTest;