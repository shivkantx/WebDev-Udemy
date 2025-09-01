# ⚛️ React Development Notes

> A comprehensive guide to React concepts, patterns, and best practices

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
10. [Custom Hooks](#-custom-hooks)
11. [Context API](#-context-api)
12. [Performance Optimization](#-performance-optimization)

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
