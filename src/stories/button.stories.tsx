"use client";

import { Button } from "@jutro/components";

export default {
  title: "Jutro/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "neutral", "inverse"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    icon: {
      control: { type: "select" },
      options: [
        "",
        "arrow-right",
        "arrow-left",
        "check",
        "plus",
        "edit",
        "trash-2",
        "download",
        "save",
      ],
    },
    disabled: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
};

// Primary Button - Most common use case
export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
    size: "medium",
    onClick: () => console.log("Primary clicked"),
  },
};

// Secondary Button - Alternative action
export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    size: "medium",
    onClick: () => console.log("Secondary clicked"),
  },
};

// Button with Icon - Common pattern
export const WithIcon = {
  args: {
    label: "Get Started",
    variant: "primary",
    size: "medium",
    icon: "arrow-right",
    iconPosition: "right",
    onClick: () => console.log("Icon button clicked"),
  },
};

// Disabled State - Important for forms
export const Disabled = {
  args: {
    label: "Disabled Button",
    variant: "primary",
    size: "medium",
    disabled: true,
    onClick: () => console.log("This won't fire"),
  },
};

// Small Button - Compact spaces
export const Small = {
  args: {
    label: "Small Button",
    variant: "primary",
    size: "small",
    onClick: () => console.log("Small button clicked"),
  },
};

// Full Width - Forms and mobile
export const FullWidth = {
  args: {
    label: "Full Width Button",
    variant: "primary",
    size: "medium",
    fullWidth: true,
    onClick: () => console.log("Full width clicked"),
  },
  decorators: [
    (Story: any) => (
      <div style={{ width: "300px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

// Tertiary Button - Subtle actions
export const Tertiary = {
  args: {
    label: "Tertiary Button",
    variant: "tertiary",
    size: "medium",
    onClick: () => console.log("Tertiary clicked"),
  },
};

// Action Button with Left Icon - Common CRUD pattern
export const ActionButton = {
  args: {
    label: "Save Changes",
    variant: "primary",
    size: "medium",
    icon: "save",
    iconPosition: "left",
    onClick: () => console.log("Save clicked"),
  },
};
