"use client";

import { Accordion, AccordionCard } from "@jutro/components";
import { Button } from "@jutro/components";
import { Flex, FlexItem } from "@jutro/layout";

export default {
  title: "Jutro/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Accordion component from Jutro design system showcasing critical use cases and functionality."
      }
    }
  },
  argTypes: {
    hideDivider: {
      control: 'boolean',
      description: 'Hide dividers between accordion cards'
    },
    chevronPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the expand/collapse chevron'
    },
    cardHeadingLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level for accessibility'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    hideDivider: false,
    chevronPosition: 'right',
    cardHeadingLevel: 3,
    className: 'p-4 bg-white border border-gray-200 rounded-lg'
  }
};

// Story 1: Basic Accordion - Most common use case
export const Basic = {
  args: {
    children: [
      <AccordionCard key="1" title="General Information" initialExpanded={true}>
        <div className="p-4">
          <p>This section contains general information about the user account, including basic profile details and preferences.</p>
          <ul className="mt-2 list-disc list-inside">
            <li>Account creation date</li>
            <li>Last login information</li>
            <li>Profile completion status</li>
          </ul>
        </div>
      </AccordionCard>,
      <AccordionCard key="2" title="Security Settings">
        <div className="p-4">
          <p>Manage your security preferences and authentication methods.</p>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between">
              <span>Two-factor authentication:</span>
              <span className="text-green-600">Enabled</span>
            </div>
            <div className="flex justify-between">
              <span>Password strength:</span>
              <span className="text-yellow-600">Medium</span>
            </div>
          </div>
        </div>
      </AccordionCard>,
      <AccordionCard key="3" title="Notifications">
        <div className="p-4">
          <p>Configure how you receive notifications and updates.</p>
          <div className="mt-3 space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              Email notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              SMS notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              Push notifications
            </label>
          </div>
        </div>
      </AccordionCard>
    ]
  }
};

// Story 2: FAQ Accordion - Common content pattern
export const FAQ = {
  args: {
    children: [
      <AccordionCard key="1" title="How do I reset my password?">
        <div className="p-4">
          <p>To reset your password:</p>
          <ol className="mt-2 list-decimal list-inside space-y-1">
            <li>Click on "Forgot Password" on the login page</li>
            <li>Enter your email address</li>
            <li>Check your email for reset instructions</li>
            <li>Follow the link and create a new password</li>
          </ol>
        </div>
      </AccordionCard>,
      <AccordionCard key="2" title="How do I update my billing information?">
        <div className="p-4">
          <p>You can update your billing information by:</p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Going to Account Settings</li>
            <li>Selecting "Billing & Payment"</li>
            <li>Clicking "Update Payment Method"</li>
            <li>Entering your new payment details</li>
          </ul>
        </div>
      </AccordionCard>,
      <AccordionCard key="3" title="Can I cancel my subscription anytime?">
        <div className="p-4">
          <p>Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.</p>
          <div className="mt-3">
            <Button 
              label="Cancel Subscription" 
              variant="secondary" 
              size="small"
              onClick={() => console.log('Cancel subscription clicked')}
            />
          </div>
        </div>
      </AccordionCard>
    ]
  }
};

// Story 3: Left Chevron Position - Alternative layout
export const LeftChevron = {
  args: {
    chevronPosition: 'left',
    children: [
      <AccordionCard key="1" title="Project Overview" initialExpanded={true}>
        <div className="p-4">
          <p>This project aims to improve user experience through better interface design.</p>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <strong>Start Date:</strong> Jan 15, 2024
            </div>
            <div>
              <strong>End Date:</strong> Mar 30, 2024
            </div>
            <div>
              <strong>Team Size:</strong> 8 members
            </div>
            <div>
              <strong>Budget:</strong> $50,000
            </div>
          </div>
        </div>
      </AccordionCard>,
      <AccordionCard key="2" title="Team Members">
        <div className="p-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>John Doe</span>
              <span className="text-gray-600">Project Manager</span>
            </div>
            <div className="flex justify-between">
              <span>Jane Smith</span>
              <span className="text-gray-600">UI Designer</span>
            </div>
            <div className="flex justify-between">
              <span>Mike Johnson</span>
              <span className="text-gray-600">Developer</span>
            </div>
          </div>
        </div>
      </AccordionCard>
    ]
  }
};

// Story 4: No Dividers - Clean layout
export const NoDividers = {
  args: {
    hideDivider: true,
    children: [
      <AccordionCard key="1" title="Personal Information">
        <div className="p-4">
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="john.doe@example.com"
              />
            </div>
          </form>
        </div>
      </AccordionCard>,
      <AccordionCard key="2" title="Address Information">
        <div className="p-4">
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Street Address</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="123 Main St"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="New York"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">ZIP Code</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="10001"
                />
              </div>
            </div>
          </form>
        </div>
      </AccordionCard>
    ]
  }
};

// Story 5: Interactive Accordion with Actions - Complex use case
export const WithActions = {
  args: {
    children: [
      <AccordionCard key="1" title="Document Upload" initialExpanded={true}>
        <div className="p-4">
          <p className="mb-4">Upload and manage your documents securely.</p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-3">Drag and drop files here or click to browse</p>
            <Flex justifyContent="center" gap="medium">
              <FlexItem>
                <Button 
                  label="Browse Files" 
                  variant="primary"
                  icon="plus"
                  onClick={() => console.log('Browse files clicked')}
                />
              </FlexItem>
            </Flex>
          </div>
          <div className="mt-4">
            <h4 className="font-medium mb-2">Recent Uploads:</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span>contract.pdf</span>
                <Button 
                  label="Download" 
                  variant="tertiary" 
                  size="small"
                  icon="download"
                  onClick={() => console.log('Download clicked')}
                />
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span>invoice.xlsx</span>
                <Button 
                  label="Download" 
                  variant="tertiary" 
                  size="small"
                  icon="download"
                  onClick={() => console.log('Download clicked')}
                />
              </div>
            </div>
          </div>
        </div>
      </AccordionCard>,
      <AccordionCard key="2" title="Document Categories">
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 border rounded">
              <h5 className="font-medium">Contracts</h5>
              <p className="text-sm text-gray-600">12 documents</p>
            </div>
            <div className="p-3 border rounded">
              <h5 className="font-medium">Invoices</h5>
              <p className="text-sm text-gray-600">8 documents</p>
            </div>
            <div className="p-3 border rounded">
              <h5 className="font-medium">Reports</h5>
              <p className="text-sm text-gray-600">5 documents</p>
            </div>
            <div className="p-3 border rounded">
              <h5 className="font-medium">Other</h5>
              <p className="text-sm text-gray-600">3 documents</p>
            </div>
          </div>
        </div>
      </AccordionCard>,
      <AccordionCard key="3" title="Settings & Permissions">
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <h5 className="font-medium mb-2">Access Permissions</h5>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Allow public sharing
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Require password for access
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Enable download tracking
                </label>
              </div>
            </div>
            <div className="pt-3 border-t">
              <Flex gap="medium">
                <FlexItem>
                  <Button 
                    label="Save Settings" 
                    variant="primary"
                    onClick={() => console.log('Settings saved')}
                  />
                </FlexItem>
                <FlexItem>
                  <Button 
                    label="Reset" 
                    variant="secondary"
                    onClick={() => console.log('Settings reset')}
                  />
                </FlexItem>
              </Flex>
            </div>
          </div>
        </div>
      </AccordionCard>
    ]
  }
};