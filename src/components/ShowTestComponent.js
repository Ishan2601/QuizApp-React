import React, {Component} from 'react';
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

class ShowTest extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    handleSubmit(values) {
        this.props.questions.map(question => {
            const q = question.question
            alert(values);
        })                
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/test">Tests</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.test.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.test.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className = "col-12">
                    <Form onSubmit={(values) => this.handleSubmit(values)}>
                        {this.props.questions.map(question => {
                            return(
                                <Card className="m-2">
                                    <FormGroup tag="fieldset">
                                        <CardHeader>
                                        <CardTitle>{question.question}</CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" id={question.options.A} name={question.question}
                                                value={question.options.A}/>{' '}
                                                {question.options.A}
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" id={question.options.B} name={question.question} 
                                                value={question.options.B}/>{' '}
                                                {question.options.B}
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" id={question.options.C} name={question.question} 
                                                value={question.options.C}/>{' '}
                                                {question.options.C}
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" id={question.options.D} name={question.question} 
                                                value={question.options.D} />{' '}
                                                {question.options.D}
                                            </Label>
                                        </FormGroup>
                                        </CardBody>
                                    </FormGroup>
                                </Card>
                            )})}
                        <FormGroup row>
                            <Col md={{size: 10}}>
                                <Button type="submit" color="danger">
                                    End Test!
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    </div>     
                </div>
            </div>
        );
    }
}
export default ShowTest;