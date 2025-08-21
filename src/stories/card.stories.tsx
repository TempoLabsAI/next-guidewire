"use client";

import { Card } from "@jutro/components";
import { Button } from "@jutro/components";
import { Flex, FlexItem } from "@jutro/layout";

export default {
  title: "Jutro/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Card component from Jutro design system showcasing critical use cases and functionality.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Card title displayed in header",
    },
    subTitle: {
      control: "text",
      description: "Card subtitle displayed below title",
    },
    headerAlignment: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Alignment of header content",
    },
    isPanel: {
      control: "boolean",
      description: "Renders card as a panel with different styling",
    },
    fullWidth: {
      control: "boolean",
      description: "Makes card take full width of container",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    title: "Card Title",
    subTitle: "",
    headerAlignment: "left",
    isPanel: false,
    fullWidth: false,
    className: "",
  },
};

// Story 1: Basic Card - Most common use case
export const Basic = {
  args: {
    title: "Basic Card",
    children: (
      <div className="p-4">
        <p>
          This is a basic card with simple content. Cards are used to group
          related information and actions together.
        </p>
      </div>
    ),
  },
};

// Story 2: Card with Title and Subtitle
export const WithTitleAndSubtitle = {
  args: {
    title: "User Profile",
    subTitle: "Manage your account settings",
    children: (
      <div className="p-4">
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Role: Administrator</p>
      </div>
    ),
  },
};

// Story 3: Panel Card - Alternative styling
export const Panel = {
  args: {
    title: "System Status",
    isPanel: true,
    children: (
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Database:</span>
            <span className="text-green-600">Online</span>
          </div>
          <div className="flex justify-between">
            <span>API:</span>
            <span className="text-green-600">Healthy</span>
          </div>
          <div className="flex justify-between">
            <span>Cache:</span>
            <span className="text-yellow-600">Warning</span>
          </div>
        </div>
      </div>
    ),
  },
};

// Story 4: Full Width Card - Layout use case
export const FullWidth = {
  args: {
    title: "Dashboard Overview",
    fullWidth: true,
    children: (
      <div className="p-4">
        <p>
          This card spans the full width of its container, useful for dashboard
          layouts and main content areas.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm text-gray-600">Total Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">567</div>
            <div className="text-sm text-gray-600">Active Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">89%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    ),
  },
  decorators: [
    (Story: any) => (
      <div style={{ width: "600px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

// Story 5: Card with Actions - Interactive content
export const WithActions = {
  args: {
    title: "Document Management",
    subTitle: "Upload and organize your files",
    children: (
      <div className="p-4">
        <p className="mb-4">
          Manage your documents efficiently with our file management system.
        </p>
        <Flex gap="medium">
          <FlexItem>
            <Button
              label="Upload File"
              variant="primary"
              icon="plus"
              onClick={() => console.log("Upload clicked")}
            />
          </FlexItem>
          <FlexItem>
            <Button
              label="View All"
              variant="secondary"
              onClick={() => console.log("View all clicked")}
            />
          </FlexItem>
        </Flex>
      </div>
    ),
  },
};

// Story 6: Center Header Alignment - Centered header
export const CenterHeaderAlignment = {
  args: {
    title: "Center Aligned Header",
    subTitle: "Header content is centered",
    headerAlignment: "center",
    children: (
      <div className="p-4">
        <p>Header content is centered for emphasis or design purposes.</p>
      </div>
    ),
  },
};

// Story 7: Content-Only Card - No header
export const ContentOnly = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3">Custom Content</h3>
        <p className="mb-4">
          This card has no predefined header, allowing for completely custom
          content layout.
        </p>
        <div className="bg-gray-100 p-3 rounded">
          <p className="text-sm">
            You have full control over the content structure and styling.
          </p>
        </div>
      </div>
    ),
  },
};

// Story 8: Form Card - Common pattern
export const FormCard = {
  args: {
    title: "Contact Information",
    subTitle: "Please fill in your details",
    children: (
      <div className="p-4">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded h-20"
              placeholder="Enter your message"
            />
          </div>
          <Flex gap="medium">
            <FlexItem>
              <Button
                label="Submit"
                variant="primary"
                onClick={() => console.log("Form submitted")}
              />
            </FlexItem>
            <FlexItem>
              <Button
                label="Cancel"
                variant="secondary"
                onClick={() => console.log("Form cancelled")}
              />
            </FlexItem>
          </Flex>
        </form>
      </div>
    ),
  },
};
