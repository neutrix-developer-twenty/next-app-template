'use client';

import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Dialog,
  Group,
  Modal,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import 'react-phone-number-input/style.css';

import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | undefined>('+91 99799 05405');

  const [openedA, { toggle, close: closeA }] = useDisclosure(false);

  return (
    <div>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={openedA} withCloseButton onClose={closeA} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              close();
            }}
          >
            <TextInput
              type="email"
              placeholder="hello@gluesticker.com"
              defaultValue=""
              style={{ flex: 1 }}
              name="email"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </Group>
      </Dialog>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Modal opened={opened} onClose={close} withCloseButton={false}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <TextInput
                label="Subject"
                defaultValue="Dev From Modals"
                placeholder="Your subject"
                required
                radius="md"
                name="subject"
              />
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                radius="md"
                defaultValue="your@mail.com"
                name="email"
              />
              <TextInput
                label="Name"
                placeholder="John Doe Modals"
                mt="md"
                radius="md"
                defaultValue="John Doe Modals"
                name="name"
              />
              <Textarea
                required
                label="Your message"
                placeholder="I want to order your goods"
                minRows={4}
                mt="md"
                radius="md"
                defaultValue="I want to order your goods"
                name="message"
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" radius="md">
                  Send message
                </Button>
              </Group>
            </form>
          </Modal>

          <Button variant="default" onClick={open}>
            Open modal
          </Button>

          <Title>Contact us</Title>
          <Text mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <Group mt="xl">{icons}</Group>
        </div>

        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <PhoneInput placeholder="Enter phone number" value={value} onChange={setValue} />
            <TextInput
              label="Subject"
              defaultValue="Dev"
              placeholder="Your subject"
              required
              radius="md"
              name="subject"
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              radius="md"
              defaultValue="your@mail.com"
              name="email"
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              radius="md"
              defaultValue="John"
              name="name"
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              radius="md"
              defaultValue="I want to order your goods"
              name="message"
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" radius="md">
                Send message
              </Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>
    </div>
  );
}
