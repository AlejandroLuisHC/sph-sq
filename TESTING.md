# Testing Guide

This project uses **Vitest** as the testing framework with **React Testing Library** for component testing.

## Test Structure

```
src/
├── __tests__/           # App-level tests
├── components/
│   └── __tests__/       # Component tests
└── pages/
    └── __tests__/       # Page tests
```

## Available Test Commands

```bash
# Run tests in watch mode (development)
pnpm test

# Run tests once
pnpm test:run

# Run tests with UI (interactive)
pnpm test:ui

# Run tests with coverage report
pnpm test:coverage
```

## Test Coverage

Current coverage: **66.45%** overall

### Coverage by Category:

- **Statements**: 66.45%
- **Branches**: 50%
- **Functions**: 37.5%
- **Lines**: 66.45%

### Well-Tested Components:

- ✅ **App.tsx**: 100% coverage
- ✅ **RuleList.tsx**: 100% coverage
- ✅ **RuleSection.tsx**: 100% coverage
- ✅ **Home.tsx**: 100% coverage
- ✅ **Support.tsx**: 98.9% coverage
- ✅ **Header.tsx**: 93.75% coverage

### Components Needing Tests:

- ❌ **Rules.tsx**: 0% coverage
- ❌ **Sanctions.tsx**: 0% coverage
- ❌ **LanguageSelector.tsx**: 0% coverage
- ❌ **i18n/index.ts**: 0% coverage

## Test Examples

### Component Testing

```typescript
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MyComponent from "../MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Expected Text")).toBeInTheDocument();
  });
});
```

### Mocking Dependencies

```typescript
// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: "es", changeLanguage: vi.fn() },
  }),
}));

// Mock assets
vi.mock("../assets/logo.png", () => ({
  default: "mocked-logo.png",
}));
```

## Test Configuration

- **Framework**: Vitest
- **Environment**: jsdom
- **Coverage Provider**: v8
- **Setup File**: `src/test/setup.ts`

## Adding New Tests

1. Create test files with `.test.tsx` extension
2. Place them in `__tests__` folders
3. Use descriptive test names
4. Mock external dependencies
5. Test both happy path and edge cases

## Best Practices

- ✅ Test component rendering
- ✅ Test user interactions
- ✅ Test props and state changes
- ✅ Mock external dependencies
- ✅ Use semantic queries (getByRole, getByLabelText)
- ✅ Keep tests simple and focused
- ❌ Don't test implementation details
- ❌ Don't test third-party libraries
