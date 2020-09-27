import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkkdown from "react-markdown";

const Jobs = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="mb-1">
      <Card.Body className=" d-flex justify-content-between overflow-auto  ">
        <div>
          <Card.Title>
            <div>
              {props.jobs.title} -{" "}
              <span className="text-muted font-weight-light overflow-auto ">
                {" "}
                {props.jobs.company}
              </span>
            </div>
          </Card.Title>
          <Card.Subtitle className="text-muted mb-2 overflow-auto">
            <div>{new Date(props.jobs.created_at).toLocaleDateString()}</div>
          </Card.Subtitle>
          <Badge className="mr-4 overflow-auto" variant="secondary">
            {props.jobs.type}{" "}
          </Badge>
          <Badge className="overflow-auto" variant="secondary">
            {props.jobs.location}{" "}
          </Badge>

          <ReactMarkkdown source={props.jobs.how_to_apply}> </ReactMarkkdown>
          <Button
            variant="primary"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {" "}
            {open ? "Hide View" : "View More"}
          </Button>

          <Collapse in={open}>
            <ReactMarkkdown source={props.jobs.description}> </ReactMarkkdown>
          </Collapse>
        </div>
        <div>
          <img
            className="overflow-auto"
            src={props.jobs.company_logo}
            alt={props.jobs.company}
            style={{ height: "50px" }}
          />
        </div>
      </Card.Body>
      <p> </p>
    </Card>
  );
};

export default Jobs;
