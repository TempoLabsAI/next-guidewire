"use client";

import { DatePicker } from "@jutro/components/new";
import { Card } from "@jutro/components";
import { Flex, FlexItem } from "@jutro/layout";
import { useState, useCallback } from "react";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component:
          "DatePicker component from Jutro design system showcasing critical use cases and functionality.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Select Date",
    },
    placeholder: {
      control: "text",
      defaultValue: "Choose a date...",
    },
    required: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      defaultValue: false,
    },
    displayOnly: {
      control: "boolean",
      defaultValue: false,
    },
    hideLabel: {
      control: "boolean",
      defaultValue: false,
    },
    hideTodayButton: {
      control: "boolean",
      defaultValue: false,
    },
    displayFormat: {
      control: "select",
      options: ["vshort", "short", "long", "abbreviated", "full"],
      defaultValue: "short",
    },
  },
  args: {
    label: "Select Date",
    placeholder: "Choose a date...",
    required: false,
    disabled: false,
    readOnly: false,
    displayOnly: false,
    hideLabel: false,
    hideTodayButton: false,
    displayFormat: "short",
  },
};

// Template for most stories
const Template = (args: any) => {
  const [value, setValue] = useState(args.initialValue || null);

  return (
    <Card className="p-6 max-w-md">
      <DatePicker
        {...args}
        value={value}
        onChange={(event: any, newValue: any) => {
          setValue(newValue);
          console.log("Date changed:", newValue);
        }}
      />
    </Card>
  );
};

// Story 1: Default - Uses all controls
export const Default = Template.bind({});

// Story 2: Required State
export const Required = {
  ...Template,
  args: {
    required: true,
    label: "Birth Date",
    placeholder: "MM/DD/YYYY",
  },
};

// Story 3: With Initial Value
export const WithInitialValue = {
  ...Template,
  args: {
    label: "Appointment Date",
    placeholder: "Select appointment date",
    initialValue: { year: 2024, month: 12, day: 25 },
  },
};

// Story 4: Disabled State
export const Disabled = (args: any) => (
  <Card className="p-6 max-w-md">
    <DatePicker
      {...args}
      value={{ year: 2024, month: 1, day: 15 }}
      disabled={true}
    />
  </Card>
);
Disabled.args = {
  label: "System Generated Date",
};

// Story 5: Read-only State
export const ReadOnly = (args: any) => (
  <Card className="p-6 max-w-md">
    <DatePicker
      {...args}
      value={{ year: 2024, month: 6, day: 1 }}
      readOnly={true}
    />
  </Card>
);
ReadOnly.args = {
  label: "Policy Start Date",
};

// Story 6: With Date Constraints
export const WithDateConstraints = {
  ...Template,
  args: {
    label: "Event Date",
    placeholder: "Select future date only",
    minDate: { year: 2024, month: 1, day: 1 },
    maxDate: { year: 2025, month: 12, day: 31 },
  },
};

// Story 7: Very Short Format - Compact date display
export const VeryShortFormat = (args: any) => (
  <Card className="p-6 max-w-md">
    <DatePicker
      {...args}
      displayFormat="vshort"
      value={{ year: 2024, month: 3, day: 15 }}
    />
  </Card>
);
VeryShortFormat.args = {
  label: "Very Short Format",
  placeholder: "Select date",
};

// Story 8: Short Format - Standard date display
export const ShortFormat = (args: any) => (
  <Card className="p-6 max-w-md">
    <DatePicker
      {...args}
      displayFormat="short"
      value={{ year: 2024, month: 3, day: 15 }}
    />
  </Card>
);
ShortFormat.args = {
  label: "Short Format",
  placeholder: "Select date",
};

// Story 9: Long Format - Extended date display
export const LongFormat = (args: any) => (
  <Card className="p-6 max-w-md">
    <DatePicker
      {...args}
      displayFormat="long"
      value={{ year: 2024, month: 3, day: 15 }}
    />
  </Card>
);
LongFormat.args = {
  label: "Long Format",
  placeholder: "Select date",
};

// Story 10: Abbreviated Format - Month abbreviated
export const AbbreviatedFormat = (args: any) => (
  <Card className="p-6 max-w-md">
    <DatePicker
      {...args}
      displayFormat="abbreviated"
      value={{ year: 2024, month: 3, day: 15 }}
    />
  </Card>
);
AbbreviatedFormat.args = {
  label: "Abbreviated Format",
  placeholder: "Select date",
};

// Story 11: Full Format - Complete date display
export const FullFormat = (args: any) => (
  <Card className="p-6 max-w-md">
    <DatePicker
      {...args}
      displayFormat="full"
      value={{ year: 2024, month: 3, day: 15 }}
    />
  </Card>
);
FullFormat.args = {
  label: "Full Format",
  placeholder: "Select date",
};

// Story 12: Validation Example
export const WithValidation = () => {
  const [validationMessages, setValidationMessages] = useState({});
  const minDate = { day: 1, month: 1, year: 2024 };
  const maxDate = { day: 31, month: 12, year: 2024 };

  function JutroDateToString(date: any) {
    return `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`;
  }

  const parseErrorCode = (errorObject: any) => {
    if (!errorObject) {
      return;
    }

    const { errorCode } = errorObject;

    if (errorCode === "INVALID_DATE") {
      return { error: ["Please enter a valid date."] };
    }

    if (errorCode === "MIN_EXCEEDED") {
      return {
        error: [`Please enter a date after ${JutroDateToString(minDate)}.`],
      };
    }

    if (errorCode === "MAX_EXCEEDED") {
      return {
        error: [`Please enter a date before ${JutroDateToString(maxDate)}.`],
      };
    }
  };

  const onChange = useCallback((e: any, newValue: any, errorObject: any) => {
    setValidationMessages({});
    const errorDetected = parseErrorCode(errorObject);

    if (errorDetected) {
      setValidationMessages(errorDetected);
    }
  }, []);

  return (
    <Card className="p-6 max-w-md">
      <DatePicker
        id="validation-datepicker"
        label="Choose date (2024 only)"
        placeholder="MM/DD/YYYY"
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        stateMessages={validationMessages}
      />
      <p className="text-sm text-gray-600 mt-2">
        Try entering dates outside 2024 or invalid dates
      </p>
    </Card>
  );
};