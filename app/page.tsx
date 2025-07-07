'use client';

import { toast } from 'sonner';
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

import 'react-phone-number-input/style.css';

import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<any | undefined>();

  return (
    <div>
      <Modal opened={opened} onClose={close} title="Form inside modal" centered>
        <b>Handle dynamic content:</b>
        <Text size="sm" c="green" mb="md" fw="bold">
          if forms are added later (SPA content, modal pop-ups, etc.), the script should notice and
          start tracking them as well.
        </Text>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success('Form submitted successfully!');
          }}
        >
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md" mb="md">
            <select
              name="queryType"
              id="type"
              className="cursor-pointer w-full -mx-[4px] mq700:-mx-[6px] py-[14px] mq700:py-[9.6px] font-text-base-font-base text-base mq700:text-[14px] bg-transparent outline-none"
            >
              <option className="" value="">
                Select Insurance
              </option>
              <option value="Auto Insurance">Auto Insurance</option>
              <option value="Term Life Insurance">Term Life Insurance</option>
              <option value="Homeowner's Insurance">Homeowner's Insurance</option>
              <option value="Motorcycle Insurance">Motorcycle Insurance</option>
              <option value="Renter's Insurance">Renter's Insurance</option>
              <option value="RV Insurance">RV Insurance</option>
              <option value="Snowmobile Insurance">Snowmobile Insurance</option>
              <option value="Boat Insurance">Boat Insurance</option>
            </select>

            <PhoneInput
              countrySelectProps={{
                name: 'phoneCountry',
              }}
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />

            <TextInput
              label="First Name"
              placeholder=""
              name="fullName"
              radius="md"
              variant="default"
              defaultValue="John"
              required
            />
            <TextInput
              label="Email"
              placeholder=""
              name="email"
              radius="md"
              variant="default"
              type="text"
              defaultValue="mail@mail.com"
              required
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
          <Text size="sm" c="red" fw="bold">
            This form have password so it should not create any leads.
          </Text>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success('Form submitted successfully!');
            }}
          >
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
            <Text size="sm" c="green" fw="bold">
              This form should create lead.
            </Text>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success('Form submitted successfully!');
              }}
            >
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

      <Container mt="xl" mb="xl">
        <div className="order-1 lg:order-none bg-white rounded-2xl p-10 shadow">
          <Card title="Ignore this Form" shadow="sm" padding="lg" radius="md" withBorder>
            <b>Handling the page unload case:</b>
            <Text size="sm" c="green" mb="md" fw="bold">
              If a form causes a full page reload (typical for a non-AJAX {`<form action="...">`}),
              our handler will execute just before the unload. We must send the data quickly. We
              will leverage the same technique already used in the script for sending data on
              unload: navigator.sendBeacon(). In fact, the script already uses sendBeacon to record
              session data when the page is closing, because beacon calls allow background sending
              without blocking the unload. We can similarly package the lead info and use sendBeacon
              to the /site-leads endpoint.
            </Text>
            <form action="/">
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

              <Button type="submit">Submit</Button>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
}
