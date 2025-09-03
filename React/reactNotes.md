## 🔄 Component Lifecycle

### Lifecycle with Hooks (Modern Approach)

```jsx
import { useEffect, useState } from "react";

const LifecycleComponent = () => {
  const [data, setData] = useState(null);

  // Component Did Mount (runs once)
  useEffect(() => {
    console.log("Component mounted");
    fetchData();

    // Component Will Unmount (cleanup)
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  // Component Did Update (runs on specific dependency change)
  useEffect(() => {
    console.log("Data updated:", data);
  }, [data]);

  // Component Did Update (runs on every render)
  useEffect(() => {
    console.log("Component updated");
  });

  const fetchData = async () => {
    const response = await fetch("/api/data");
    setData(await response.json());
  };

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};
```

### Class Component Lifecycle (Legacy Reference)

```jsx
class LifecycleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    console.log("Component mounted");
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log("Data updated");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  fetchData = async () => {
    const response = await fetch("/api/data");
    const data = await response.json();
    this.setState({ data });
  };

  render() {
    return <div>{this.state.data || "Loading..."}</div>;
  }
}
```

---

## 🚨 Error Boundaries

### Class-based Error Boundary

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log error to reporting service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>🚨 Something went wrong</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <MainContent />
      <Footer />
    </ErrorBoundary>
  );
};
```

### Hook-based Error Handling

```jsx
const useErrorBoundary = () => {
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  const captureError = (error) => {
    setError(error);
  };

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { captureError, resetError };
};
```

---

## 🎯 Refs & DOM Manipulation

### useRef for DOM Access

```jsx
import { useRef, useEffect } from "react";

const ScrollToTop = () => {
  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div ref={topRef}>Top of page</div>
      <div style={{ height: "2000px" }}>Long content...</div>
      <button onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
};
```

### forwardRef

```jsx
import { forwardRef } from "react";

const FancyButton = forwardRef(({ children, ...props }, ref) => {
  return (
    <button ref={ref} className="fancy-button" {...props}>
      {children}
    </button>
  );
});

// Usage
const App = () => {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return <FancyButton ref={buttonRef}>Click me!</FancyButton>;
};
```

### useRef for Mutable Values

```jsx
const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const isRunning = useRef(false);

  const start = () => {
    if (!isRunning.current) {
      isRunning.current = true;
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    isRunning.current = false;
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div>
      <p>Time: {time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

---

## 🧩 Fragments

### React.Fragment

```jsx
import { Fragment } from "react";

const TableRow = () => {
  return (
    <Fragment>
      <td>Cell 1</td>
      <td>Cell 2</td>
      <td>Cell 3</td>
    </Fragment>
  );
};

// Short syntax
const TableRowShort = () => {
  return (
    <>
      <td>Cell 1</td>
      <td>Cell 2</td>
      <td>Cell 3</td>
    </>
  );
};

// Fragment with key (for lists)
const Glossary = ({ items }) => {
  return (
    <dl>
      {items.map((item) => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
};
```

---

## 🌀 Portals

### Creating Portals

```jsx
import { createPortal } from "react-dom";
import { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

// Usage
const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Content</h2>
        <p>This is rendered in a portal!</p>
      </Modal>
    </div>
  );
};
```

### Portal for Tooltips

```jsx
const Tooltip = ({ children, text, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({ x: rect.left, y: rect.top });
    setIsVisible(true);
  };

  return (
    <>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>

      {isVisible &&
        createPortal(
          <div
            className={`tooltip tooltip-${position}`}
            style={{ left: coords.x, top: coords.y - 30 }}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
};
```

---

## 🎭 Higher-Order Components (HOCs)

### Basic HOC

```jsx
const withLoading = (Component) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div className="spinner">Loading...</div>;
    }
    return <Component {...props} />;
  };
};

// Usage
const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

const UserListWithLoading = withLoading(UserList);

// In parent component
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  return <UserListWithLoading users={users} isLoading={loading} />;
};
```

### HOC with Authentication

```jsx
const withAuth = (Component) => {
  return function AuthenticatedComponent(props) {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <div>Please log in to access this content.</div>;
    }

    return <Component {...props} user={user} />;
  };
};

// Usage
const Dashboard = withAuth(({ user }) => (
  <div>
    <h1>Welcome, {user.name}!</h1>
    <p>Your dashboard content here</p>
  </div>
));
```

---

## 🎪 Render Props

### Basic Render Props Pattern

```jsx
const DataProvider = ({ render, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading, error });
};

// Usage
const App = () => {
  return (
    <DataProvider
      url="/api/users"
      render={({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        return (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
};
```

### Children as Function

```jsx
const MouseTracker = ({ children }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{children(mouse)}</div>;
};

// Usage
const App = () => {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <div>
          <h1>Mouse position:</h1>
          <p>
            X: {x}, Y: {y}
          </p>
        </div>
      )}
    </MouseTracker>
  );
};
```

---

## ✂️ Code Splitting & Lazy Loading

### React.lazy and Suspense

```jsx
import { lazy, Suspense } from "react";

// Lazy load components
const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));
const Settings = lazy(() => import("./Settings"));

const App = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentView("dashboard")}>Dashboard</button>
        <button onClick={() => setCurrentView("profile")}>Profile</button>
        <button onClick={() => setCurrentView("settings")}>Settings</button>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>{renderView()}</Suspense>
    </div>
  );
};
```

### Route-based Code Splitting

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="page-loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
```

---

## 🧪 Testing

### Testing with React Testing Library

```jsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders counter with initial value", () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByText("Count: 5")).toBeInTheDocument();
  });

  test("increments counter when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementButton);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  test("updates input value", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const input = screen.getByRole("textbox");
    await user.type(input, "Hello World");

    expect(input).toHaveValue("Hello World");
  });
});
```

### Testing Hooks

```jsx
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter Hook", () => {
  test("initializes with default value", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test("increments counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
```

### Testing with Context

```jsx
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "./ThemeContext";
import ThemedButton from "./ThemedButton";

const renderWithTheme = (ui, { theme = "light" } = {}) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider value={{ theme }}>{children}</ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper });
};

test("renders button with correct theme", () => {
  renderWithTheme(<ThemedButton>Click me</ThemedButton>, { theme: "dark" });
  expect(screen.getByRole("button")).toHaveClass("dark-theme");
});
```

---

## 🛣️ Routing (React Router)

### Basic Routing Setup

```jsx
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
```

### useNavigate and useParams

```jsx
import { useNavigate, useParams, useLocation } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id).then(setUser);
  }, [id]);

  const goBack = () => {
    navigate(-1); // Go back in history
  };

  const goToEdit = () => {
    navigate(`/users/${id}/edit`, {
      state: { from: location.pathname },
    });
  };

  return (
    <div>
      <button onClick={goBack}>← Back</button>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <button onClick={goToEdit}>Edit User</button>
        </div>
      )}
    </div>
  );
};
```

### Protected Routes

```jsx
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

// Usage
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
```

---

## 🏪 State Management Patterns

### useReducer with Context (Redux-like)

```jsx
import { createContext, useContext, useReducer } from "react";

// Actions
const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  SET_FILTER: "SET_FILTER",
};

// Reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ACTIONS.SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

// Context
const TodoContext = createContext();

// Provider
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: "all",
  });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook
const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within TodoProvider");
  }
  return context;
};
```

### Zustand-style State Management (Custom)

```jsx
const createStore = (initialState, actions) => {
  let state = initialState;
  const listeners = new Set();

  const getState = () => state;

  const setState = (newState) => {
    state = typeof newState === "function" ? newState(state) : newState;
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const boundActions = {};
  Object.keys(actions).forEach((key) => {
    boundActions[key] = (...args) => actions[key](getState, setState, ...args);
  });

  return { getState, setState, subscribe, ...boundActions };
};

// Usage
const useStore = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    return store.subscribe(setState);
  }, []);

  return state;
};
```

---

## 📘 TypeScript with React

### Component Props with TypeScript

```tsx
interface UserProps {
  id: number;
  name: string;
  email?: string;
  isActive: boolean;
  onClick: (id: number) => void;
}

const User: React.FC<UserProps> = ({ id, name, email, isActive, onClick }) => {
  return (
    <div className={`user ${isActive ? "active" : ""}`}>
      <h3>{name}</h3>
      {email && <p>{email}</p>}
      <button onClick={() => onClick(id)}>Select User</button>
    </div>
  );
};
```

### State with TypeScript

````tsx
interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState# ⚛️ React Development Notes

> A comprehensive guide to React concepts, patterns, and best practices

---

## 🪝 All React Hooks

### useReducer
```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};
````

### useRef

```jsx
import { useRef, useEffect } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  const countRef = useRef(0);

  useEffect(() => {
    // Focus input on mount
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    countRef.current += 1;
    console.log(`Clicked ${countRef.current} times`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Focus me!" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
```

### useLayoutEffect

```jsx
import { useLayoutEffect, useRef, useState } from "react";

const MeasureComponent = () => {
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    // Runs synchronously after all DOM mutations
    if (divRef.current) {
      setHeight(divRef.current.offsetHeight);
    }
  });

  return (
    <div>
      <div ref={divRef}>
        <p>This content has a height of {height}px</p>
      </div>
    </div>
  );
};
```

### useImperativeHandle

```jsx
import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => {
      inputRef.current.value = "";
    },
    getValue: () => inputRef.current.value,
  }));

  return <input ref={inputRef} {...props} />;
});

// Usage
const App = () => {
  const customInputRef = useRef();

  return (
    <div>
      <CustomInput ref={customInputRef} />
      <button onClick={() => customInputRef.current.focus()}>Focus</button>
      <button onClick={() => customInputRef.current.clear()}>Clear</button>
    </div>
  );
};
```

### useId

```jsx
import { useId } from "react";

const FormField = ({ label, type = "text" }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
};
```

### useDeferredValue

```jsx
import { useDeferredValue, useState, useMemo } from "react";

const SearchResults = ({ query }) => {
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    // Expensive search operation
    return performSearch(deferredQuery);
  }, [deferredQuery]);

  return (
    <div>
      <p>Searching for: {query}</p>
      {deferredQuery !== query && <p>Loading...</p>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

### useTransition

```jsx
import { useTransition, useState } from "react";

const TabContainer = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("about");

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => selectTab("about")}>About</button>
        <button onClick={() => selectTab("posts")}>Posts</button>
        <button onClick={() => selectTab("contact")}>Contact</button>
      </div>

      {isPending && <div>Loading...</div>}
      <div className="tab-content">
        {tab === "about" && <AboutTab />}
        {tab === "posts" && <PostsTab />}
        {tab === "contact" && <ContactTab />}
      </div>
    </div>
  );
};
```

---

## 📋 Table of Contents

1. [Components](#-components)
2. [JSX](#-jsx)
3. [Props](#-props)
4. [State & Hooks](#-state--hooks)
5. [Event Handling](#-event-handling)
6. [Conditional Rendering](#-conditional-rendering)
7. [Lists & Keys](#-lists--keys)
8. [Forms](#-forms)
9. [Effect Hook](#-effect-hook)
10. [All React Hooks](#-all-react-hooks)
11. [Custom Hooks](#-custom-hooks)
12. [Context API](#-context-api)
13. [Component Lifecycle](#-component-lifecycle)
14. [Error Boundaries](#-error-boundaries)
15. [Refs & DOM Manipulation](#-refs--dom-manipulation)
16. [Fragments](#-fragments)
17. [Portals](#-portals)
18. [Higher-Order Components (HOCs)](#-higher-order-components-hocs)
19. [Render Props](#-render-props)
20. [Code Splitting & Lazy Loading](#-code-splitting--lazy-loading)
21. [Performance Optimization](#-performance-optimization)
22. [Testing](#-testing)
23. [Routing (React Router)](#-routing-react-router)
24. [State Management Patterns](#-state-management-patterns)
25. [TypeScript with React](#-typescript-with-react)

---

## 🧩 Components

### Functional Components (Modern Approach)

```jsx
// Simple functional component
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};

// Arrow function with implicit return
const Greeting = () => <p>Welcome to React!</p>;

// Component with parameters
const UserCard = ({ name, age, email }) => (
  <div className="user-card">
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Email: {email}</p>
  </div>
);
```

### Class Components (Legacy)

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

> 💡 **Best Practice**: Use functional components with hooks for all new development.

---

## 🏷️ JSX

JSX allows you to write HTML-like syntax in JavaScript.

### Basic JSX Rules

```jsx
const element = (
  <div className="container">
    <h1>Title</h1>
    <p>This is JSX content</p>
    {/* Comments in JSX */}
  </div>
);
```

### JSX Expression Embedding

```jsx
const name = "React";
const element = <h1>Hello, {name}!</h1>;

// Complex expressions
const user = { firstName: "John", lastName: "Doe" };
const element = <h1>Hello, {user.firstName + " " + user.lastName}!</h1>;
```

### Conditional JSX

```jsx
const isLoggedIn = true;
const element = (
  <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}</div>
);
```

---

## 🎛️ Props

Props are read-only properties passed to components.

### Basic Props Usage

```jsx
// Parent component
const App = () => {
  return (
    <div>
      <Welcome name="Alice" age={25} />
      <Welcome name="Bob" age={30} />
    </div>
  );
};

// Child component
const Welcome = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
};
```

### Props Destructuring

```jsx
// Destructure in parameter
const Welcome = ({ name, age, isAdmin = false }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {isAdmin && <span className="admin-badge">Admin</span>}
    </div>
  );
};

// Destructure in component body
const Welcome = (props) => {
  const { name, age, isAdmin } = props;
  return <h1>Hello, {name}!</h1>;
};
```

### Props Validation (PropTypes)

```jsx
import PropTypes from "prop-types";

const Welcome = ({ name, age }) => <h1>Hello, {name}!</h1>;

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

Welcome.defaultProps = {
  age: 18,
};
```

---

## 🔄 State & Hooks

### useState Hook

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
};
```

### State with Objects

```jsx
const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const updateName = (newName) => {
    setUser((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  return (
    <div>
      <input value={user.name} onChange={(e) => updateName(e.target.value)} />
    </div>
  );
};
```

### State with Arrays

```jsx
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
};
```

---

## 🎯 Event Handling

### Basic Event Handling

```jsx
const Button = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Button clicked!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => console.log("Inline handler", e)}>
        Inline Click
      </button>
    </div>
  );
};
```

### Event with Parameters

```jsx
const ItemList = () => {
  const handleItemClick = (id, name) => {
    console.log(`Clicked item ${id}: ${name}`);
  };

  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <button onClick={() => handleItemClick(item.id, item.name)}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
```

---

## 🔀 Conditional Rendering

### If-Else with Ternary Operator

```jsx
const LoginStatus = ({ isLoggedIn, user }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome back, {user.name}!</h1>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please sign in</h1>
          <button>Login</button>
        </div>
      )}
    </div>
  );
};
```

### Logical AND Operator

```jsx
const Notifications = ({ notifications }) => {
  return (
    <div>
      <h1>Notifications</h1>
      {notifications.length > 0 && (
        <p>You have {notifications.length} new notifications</p>
      )}
      {notifications.length === 0 && <p>No new notifications</p>}
    </div>
  );
};
```

### Switch-like Conditional Rendering

```jsx
const StatusMessage = ({ status }) => {
  const renderStatus = () => {
    switch (status) {
      case "loading":
        return <div className="spinner">Loading...</div>;
      case "success":
        return <div className="success">✅ Success!</div>;
      case "error":
        return <div className="error">❌ Error occurred</div>;
      default:
        return <div>Unknown status</div>;
    }
  };

  return <div>{renderStatus()}</div>;
};
```

---

## 📝 Lists & Keys

### Basic List Rendering

```jsx
const ItemList = () => {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
```

### List with Objects and Proper Keys

```jsx
const UserList = () => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};
```

> ⚠️ **Important**: Always use unique, stable keys. Avoid using array indices when the list can change.

---

## 📋 Forms

### Controlled Components

```jsx
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={4}
      />

      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
```

---

## ⚡ Effect Hook

### Basic useEffect

```jsx
import { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect runs after every render
  useEffect(() => {
    console.log("Component rendered");
  });

  // Effect runs only once (on mount)
  useEffect(() => {
    fetchData();
  }, []);

  // Effect with dependency
  useEffect(() => {
    document.title = `Data: ${data?.length || 0} items`;
  }, [data]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/data");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Data loaded: {data?.length} items</p>}
    </div>
  );
};
```

### Cleanup with useEffect

```jsx
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Timer: {seconds} seconds</div>;
};
```

---

## 🔧 Custom Hooks

### Simple Custom Hook

```jsx
// useCounter hook
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

// Usage
const CounterApp = () => {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

### Advanced Custom Hook (Data Fetching)

```jsx
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Usage
const UserProfile = ({ userId }) => {
  const { data: user, loading, error } = useFetch(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
```

---

## 🌐 Context API

### Creating and Using Context

```jsx
import { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext();

// Provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

// Components using context
const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </header>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};
```

---

## ⚡ Performance Optimization

### React.memo

```jsx
import { memo } from "react";

const ExpensiveComponent = memo(({ data, onUpdate }) => {
  console.log("Rendering ExpensiveComponent");

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
});

// Custom comparison function
const ComplexComponent = memo(
  ({ user, settings }) => {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.user.id === nextProps.user.id;
  }
);
```

### useCallback

```jsx
import { useCallback, useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // Memoized callback
  const handleItemClick = useCallback((id) => {
    console.log(`Item ${id} clicked`);
  }, []); // Empty dependency array means this never changes

  const addItem = useCallback(() => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), name: `Item ${prev.length + 1}` },
    ]);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={addItem}>Add Item</button>
      <ItemList items={items} onItemClick={handleItemClick} />
    </div>
  );
};
```

### useMemo

```jsx
import { useMemo, useState } from "react";

const ExpensiveCalculation = ({ items, filter }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  // Memoize expensive calculation
  const processedItems = useMemo(() => {
    console.log("Processing items...");

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filtered.sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  }, [items, filter, sortOrder]);

  return (
    <div>
      <button
        onClick={() =>
          setSortOrder((order) => (order === "asc" ? "desc" : "asc"))
        }
      >
        Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
      </button>

      <ul>
        {processedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
```

---

## 🎯 Best Practices & Tips

### ✅ Do's

- Use functional components with hooks
- Keep components small and focused
- Use meaningful names for components and variables
- Extract custom hooks for reusable logic
- Use TypeScript for better type safety
- Implement proper error boundaries
- Use React DevTools for debugging

### ❌ Don'ts

- Don't mutate state directly
- Don't use array indices as keys for dynamic lists
- Don't forget to cleanup effects
- Don't put too much logic in JSX
- Don't ignore React warnings in console
- Don't forget to handle loading and error states

### 🔥 Pro Tips

```jsx
// Use optional chaining for safe property access
const user = data?.user?.profile?.name || "Unknown";

// Use early returns for cleaner code
const UserProfile = ({ user }) => {
  if (!user) return <div>No user data</div>;
  if (user.loading) return <div>Loading...</div>;

  return <div>{user.name}</div>;
};

// Use object shorthand in useState
const [state, setState] = useState({
  loading: false,
  data: null,
  error: null,
});

// Prefer template literals for dynamic classes
const className = `button ${isActive ? "active" : ""} ${variant}`;
```

---

_Happy coding with React! 🚀_
