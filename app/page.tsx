'use client';

import {
  Button,
  Card,
  Checkbox,
  Container,
  Modal,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Modal opened={opened} onClose={close} title="Form inside modal" centered>
        <form onSubmit={(e) => e.preventDefault()}>
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md" mb="md">
            <TextInput
              label="First Name"
              placeholder=""
              name="fullName"
              radius="md"
              variant="default"
            />
            <TextInput
              label="Email"
              placeholder=""
              name="email"
              radius="md"
              variant="default"
              type="text"
            />
          </SimpleGrid>

          <Button type="submit">Login</Button>
        </form>
      </Modal>
      <Container mt="xl" mb="xl">
        <Button variant="default" onClick={open}>
          Open modal
        </Button>
      </Container>
      <Container mt="xl" mb="xl">
        <Card title="Ignore this Form" shadow="sm" padding="lg" radius="md" withBorder>
          <Text size="sm" c="red">
            This form have password so it should not create any leads.
          </Text>

          <form onSubmit={(e) => e.preventDefault()}>
            <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md" mb="md">
              <TextInput
                label="First Name"
                placeholder=""
                name="firstName"
                radius="md"
                variant="default"
              />
              <TextInput
                label="Password"
                placeholder=""
                name="lastName"
                radius="md"
                variant="default"
                type="password"
              />
            </SimpleGrid>

            <Button type="submit">Login</Button>
          </form>
        </Card>
      </Container>
      <Container mt="xl" mb="xl">
        <div className="order-1 lg:order-none bg-white rounded-2xl p-10 shadow">
          <Card title="Ignore this Form" shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="sm" c="green">
              This form should create lead.
            </Text>
            <form onSubmit={(e) => e.preventDefault()}>
              <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md" mb="md">
                <TextInput
                  label="First Name"
                  placeholder=""
                  name="firstName"
                  radius="md"
                  variant="default"
                  required
                />
                <TextInput
                  label="Last Name"
                  placeholder=""
                  name="lastName"
                  radius="md"
                  variant="default"
                  required
                />
              </SimpleGrid>

              <TextInput
                label="Email"
                placeholder=""
                type="email"
                name="email"
                radius="md"
                variant="default"
                required
                mb="md"
              />

              <TextInput
                label="Your Mobile Number"
                placeholder=""
                name="mobile"
                radius="md"
                variant="default"
                mb="md"
              />

              <Textarea
                label="Tell Us Something"
                placeholder=""
                name="message"
                rows={5}
                radius="md"
                variant="default"
                mb="md"
              />

              <Checkbox
                required
                label="I agree with the processing of personal data."
                name="check"
                mb="md"
              />

              <Button type="submit">Let's Talk</Button>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
}
