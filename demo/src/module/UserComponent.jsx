import React from "react";
import { Card, Row, Col, Space } from "antd";
import data from "./UserComponent.constants";
const { Meta } = Card;

function UserComponent() {
  return (
    <Row>
      {data.map((item) => {
        return (
          <Space>
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="images" src={item.avatar} />}
              >
                <Meta title={item.first_name} description={item.email} />
              </Card>
            </Col>
          </Space>
        );
      })}
    </Row>
  );
}

export default UserComponent;
