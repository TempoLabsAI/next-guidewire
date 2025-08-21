"use client";

import { Loader } from "@jutro/components";
import { Button } from "@jutro/components";
import { useState } from "react";

export default {
  title: "Jutro/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Loader component from Jutro design system showcasing critical use cases and functionality.",
      },
    },
  },
  argTypes: {
    loaded: {
      control: "boolean",
      description:
        "Controls whether content is loaded or loading state is shown",
    },
    text: {
      control: "text",
      description: "Loading message to display",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    loaded: false,
    text: "Loading...",
    className: "p-4 bg-white border border-gray-200 rounded-lg",
  },
};

// Story 1: Basic Loading State - Most common use case
export const Basic = {
  args: {
    loaded: false,
    text: "Loading content...",
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3">Content Loaded</h3>
        <p>This content appears when loading is complete.</p>
      </div>
    ),
  },
};

// Story 2: Loaded State - Content visible
export const Loaded = {
  args: {
    loaded: true,
    text: "Loading...",
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3">Dashboard Data</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Total Users:</span>
            <span className="font-semibold">1,234</span>
          </div>
          <div className="flex justify-between">
            <span>Active Sessions:</span>
            <span className="font-semibold">567</span>
          </div>
          <div className="flex justify-between">
            <span>Revenue:</span>
            <span className="font-semibold">$12,345</span>
          </div>
        </div>
      </div>
    ),
  },
};

// Story 3: Custom Loading Message - Different contexts
export const CustomMessage = {
  args: {
    loaded: false,
    text: "Fetching user data...",
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3">User Profile</h3>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Role: Administrator</p>
      </div>
    ),
  },
};
