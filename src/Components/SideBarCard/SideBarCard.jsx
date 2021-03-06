import React from "react";
import { Link } from "react-router-dom";
import { Card, Avatar, Typography, Button, Divider, List, Icon } from "antd";
import "./SideBarCard.scss";

function SideBarCard(props) {
  const { Text } = Typography;
  const {
    orgName = " De Tamarinde",
    email = " someone@gmail.com",
    cardEntity = "Organization",
    languages = [" English,", " Dutch,", " Spanish"],
    location = " Amsterdam",
    page = "./Profile",
    ctaText = "View profile",
    cardCta = [
      <Button type="primary" style={{ width: "100%" }}>
        <Link to={page}>{ctaText}</Link>
      </Button>
    ],
    iconType = "user",
    url
  } = props;
  const data = [
    <div>
      <Icon type="environment" className={"side-bar-ico"} />
      {location}
    </div>,
    <div>
      <Icon type="global" className={"side-bar-ico"} />
      {languages}
    </div>,
    <div>
      <Icon type="mail" className={"side-bar-ico"} />
      {email}
    </div>
  ];
  return (
    <Card style={{ width: "auto" }} className={"tb-margin-bottom-large"}>
      <Avatar
        size={150}
        style={{
          backgroundColor: "#6d6eed",
          margin: "0 auto 24px",
          display: "block"
        }}
        icon={iconType}
      />
      <div className={"tb-user-titles"}>
        <Button
          type="link"
          style={{
            display: "block",
            textAlign: "center",
            width: "100%"
          }}
        >
          <Text strong>{orgName}</Text>
        </Button>
        <Text disabled>{cardEntity}</Text>
      </div>
      <Divider />
      <List
        size="small"
        dataSource={data}
        className={"tb-margin-bottom-medium"}
        renderItem={item => (
          <List.Item
            style={{
              border: "none",
              padding: "0 0 8px",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {item}
          </List.Item>
        )}
      />
      {cardCta}
    </Card>
  );
}
export default SideBarCard;
