'use client';

import { Button, Checkbox, SimpleGrid, Textarea, TextInput } from '@mantine/core';

export default function ContactUs() {
  return (
    <div>
      <div className="order-1 lg:order-none bg-white rounded-2xl p-10 shadow">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission logic here
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
              label="Last Name"
              placeholder=""
              name="lastName"
              radius="md"
              variant="default"
            />
          </SimpleGrid>

          <TextInput
            label="Email"
            placeholder=""
            type="email"
            name="email"
            radius="md"
            variant="default"
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

          <Checkbox label="I agree with the processing of personal data." name="check" mb="md" />

          <Button type="submit">Let's Talk</Button>
        </form>
      </div>
    </div>
  );
}
