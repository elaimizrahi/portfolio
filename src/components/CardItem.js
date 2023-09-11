import React from "react";
import { Card, Group, Image, Text, Badge, Button } from "@mantine/core";
import commandPalette from "../images/commandPalette.png";

const CardItem = ({ title, description, image, type, link, buttonLabel }) => {
  const typeColor =
    type === "feature" ? "blue" : type === "improvement" ? "pink" : "orange";
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ width: "300px", margin: "25px" }}
    >
      <Card.Section>
        <Image src={image} height={160} alt="No Picture" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
      </Group>
      <Group position="apart" mt="md" mb="xs">
        <Badge color={typeColor} variant="light">
          {type}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" align="left">
        {description}
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => {
          window.open(link);
        }}
      >
        {buttonLabel}
      </Button>
    </Card>
  );
};

export default CardItem;
