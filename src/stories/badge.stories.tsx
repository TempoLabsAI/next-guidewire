"use client";

import { Badge } from "@jutro/components";

export default {
  title: "Jutro/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Badge component from Jutro design system showcasing critical use cases and functionality.",
      },
    },
  },
  argTypes: {
    value: {
      control: "number",
      description: "Numeric value to display in the badge",
    },
    maxValue: {
      control: "number",
      description: 'Maximum value to display before showing "max+"',
    },
    type: {
      control: { type: "select" },
      options: ["neutral", "notification", "primary", "inverse"],
      description: "Visual style type of the badge",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    liveRegionContext: {
      control: "text",
      description: "Context for screen readers",
    },
  },
  args: {
    value: 5,
    maxValue: 99,
    type: "notification",
    className: "p-4 bg-white border border-gray-200 rounded-lg",
    liveRegionContext: "",
  },
};

// Story 1: Basic Badge - Most common notification use case
export const Basic = {
  args: {
    value: 3,
    type: "notification",
    className: "p-4 bg-white border border-gray-200 rounded-lg",
  },
};

// Story 2: High Value Badge - Shows max value behavior
export const HighValue = {
  args: {
    value: 150,
    maxValue: 99,
    type: "notification",
    className: "p-4 bg-white border border-gray-200 rounded-lg",
  },
};

// Story 3: Zero Value Badge - Edge case handling
export const ZeroValue = {
  args: {
    value: 0,
    type: "notification",
    className: "p-4 bg-white border border-gray-200 rounded-lg",
  },
};

// Story 4: Primary Badge - Primary styling
export const Primary = {
  args: {
    value: 5,
    type: "primary",
    liveRegionContext: "completed tasks",
    className: "p-4 bg-white border border-gray-200 rounded-lg",
  },
};

// Story 5: Neutral Badge - Neutral styling
export const Neutral = {
  args: {
    value: 12,
    type: "neutral",
    liveRegionContext: "pending reviews",
    className: "p-4 bg-white border border-gray-200 rounded-lg",
  },
};

// Story 6: Notification Badge - Standard notification styling
export const Notification = {
  args: {
    value: 8,
    type: "notification",
    liveRegionContext: "new messages",
    className: "p-4 bg-white border border-gray-200 rounded-lg",
  },
};

// Story 7: Custom Max Value - Different threshold
export const CustomMaxValue = {
  args: {
    value: 25,
    maxValue: 20,
    type: "notification",
    className: "p-4 bg-white border border-gray-200 rounded-lg",
  },
};
