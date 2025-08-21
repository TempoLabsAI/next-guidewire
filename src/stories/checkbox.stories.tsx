"use client";

import { Checkbox } from "@jutro/components";

export default {
  title: "Jutro/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Checkbox component from Jutro design system showcasing critical use cases and functionality."
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox label text'
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state'
    },
    initialChecked: {
      control: 'boolean',
      description: 'Initial checked state for uncontrolled usage'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox'
    },
    displayOnly: {
      control: 'boolean',
      description: 'Shows checkbox in display-only mode'
    },
    required: {
      control: 'boolean',
      description: 'Marks checkbox as required'
    },
    hideLabel: {
      control: 'boolean',
      description: 'Hides the label visually but keeps it for accessibility'
    },
    icon: {
      control: { type: 'select' },
      options: ['', 'check', 'star', 'heart', 'bookmark'],
      description: 'Custom icon for the checkbox'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    label: 'Checkbox Label',
    checked: false,
    disabled: false,
    displayOnly: false,
    required: false,
    hideLabel: false,
    className: ''
  }
};

// Story 1: Basic Checkbox - Most common use case
export const Basic = {
  args: {
    label: "I agree to the terms and conditions",
    onChange: (_: any, value: any) => console.log('Checkbox changed:', value)
  }
};

// Story 2: Checked State - Pre-selected checkbox
export const Checked = {
  args: {
    label: "Enable notifications",
    initialChecked: true,
    onChange: (_: any, value: any) => console.log('Notifications:', value)
  }
};

// Story 3: Disabled State - Cannot be interacted with
export const Disabled = {
  args: {
    label: "This option is not available",
    disabled: true,
    onChange: (_: any, value: any) => console.log('This will not fire')
  }
};

// Story 4: Disabled Checked - Disabled but checked state
export const DisabledChecked = {
  args: {
    label: "Premium feature (requires upgrade)",
    disabled: true,
    initialChecked: true,
    onChange: (_: any, value: any) => console.log('This will not fire')
  }
};

// Story 5: Required Checkbox - Form validation
export const Required = {
  args: {
    label: "I accept the privacy policy",
    required: true,
    onChange: (_: any, value: any) => console.log('Privacy policy accepted:', value)
  }
};

// Story 6: Display Only - Read-only state
export const DisplayOnly = {
  args: {
    label: "Account verified",
    displayOnly: true,
    initialChecked: true
  }
};

// Story 7: Custom Icon - Alternative visual representation
export const WithCustomIcon = {
  args: {
    label: "Add to favorites",
    icon: "star",
    onChange: (_: any, value: any) => console.log('Favorite toggled:', value)
  }
};

// Story 8: Form Group - Multiple checkboxes in context
export const FormGroup = () => (
  <div className="space-y-4 p-4 max-w-md">
    <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
    
    <Checkbox
      label="Email notifications"
      initialChecked={true}
      onChange={(_: any, value: any) => console.log('Email notifications:', value)}
    />
    
    <Checkbox
      label="SMS notifications"
      onChange={(_: any, value: any) => console.log('SMS notifications:', value)}
    />
    
    <Checkbox
      label="Push notifications"
      initialChecked={true}
      onChange={(_: any, value: any) => console.log('Push notifications:', value)}
    />
    
    <Checkbox
      label="Marketing emails"
      onChange={(_: any, value: any) => console.log('Marketing emails:', value)}
    />
    
    <div className="pt-4 border-t">
      <Checkbox
        label="I agree to receive communications"
        required={true}
        onChange={(_: any, value: any) => console.log('Agreement:', value)}
      />
    </div>
  </div>
);