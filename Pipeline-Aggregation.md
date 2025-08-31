# MongoDB Aggregation Pipeline Reference Guide

_A comprehensive guide to common MongoDB aggregation patterns and queries_

---

## Table of Contents

1. [Basic Operations](#basic-operations)
2. [User Analytics](#user-analytics)
3. [Data Categorization](#data-categorization)
4. [Advanced Queries](#advanced-queries)
5. [Join Operations](#join-operations)

---

## Basic Operations

### 1. Count Active Users

**Objective:** Get the total count of all active users in the database.

**Pipeline Stages:**

- `$match` → Filter for active users only
- `$count` → Count matching documents

```javascript
db.users.aggregate([
  {
    $match: { isActive: true },
  },
  {
    $count: "totalActiveUsers",
  },
]);
```

**Key Learning:** Use `$match` first to filter data before processing for better performance.

---

## User Analytics

### 2. Average User Age

**Objective:** Calculate the average age of all users in the database.

**Pipeline Stages:**

- `$group` → Group all documents together
- `$avg` → Calculate average of age field

```javascript
db.users.aggregate([
  {
    $group: {
      _id: null,
      averageAge: {
        $avg: "$age",
      },
    },
  },
]);
```

**Sample Output:**

```json
{
  "_id": null,
  "averageAge": 29.835
}
```

**💡 Tip:** Setting `_id: null` groups all documents into a single group.

---

### 3. Top 5 Favorite Fruits

**Objective:** Identify the most popular fruits among users.

**Pipeline Stages:**

- `$group` → Group by favorite fruit and count occurrences
- `$sort` → Sort by count in descending order
- `$limit` → Take only top 5 results

```javascript
db.users.aggregate([
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 5,
  },
]);
```

**Sample Output:**

```json
[
  { "_id": "banana", "count": 339 },
  { "_id": "apple", "count": 338 },
  { "_id": "strawberry", "count": 323 }
]
```

---

### 4. Gender Distribution

**Objective:** Count total number of male and female users.

```javascript
db.users.aggregate([
  {
    $group: {
      _id: "$gender",
      count: {
        $sum: 1,
      },
    },
  },
]);
```

**Sample Output:**

```json
[
  { "_id": "female", "count": 507 },
  { "_id": "male", "count": 493 }
]
```

---

## Data Categorization

### 5. Country with Highest User Registration

**Objective:** Find which country has the most registered users.

```javascript
db.users.aggregate([
  {
    $group: {
      _id: "$company.location.country",
      userCount: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      userCount: -1,
    },
  },
  {
    $limit: 1,
  },
]);
```

**Sample Output:**

```json
{
  "_id": "Germany",
  "userCount": 261
}
```

**🔍 Note:** Accessing nested fields using dot notation (`company.location.country`).

---

### 6. Unique Eye Colors

**Objective:** List all distinct eye colors in the collection.

```javascript
db.users.aggregate([
  {
    $group: {
      _id: "$eyeColor",
    },
  },
]);
```

**Sample Output:**

```json
[{ "_id": "green" }, { "_id": "blue" }, { "_id": "brown" }]
```

**Alternative using `$distinct`:**

```javascript
db.users.distinct("eyeColor");
```

---

## Advanced Queries

### 7. Average Number of Tags Per User

**Objective:** Calculate how many tags each user has on average.

**Method 1: Using `$unwind`**

```javascript
db.users.aggregate([
  {
    $unwind: "$tags",
  },
  {
    $group: {
      _id: "$_id",
      numberOfTags: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      avgNumberOfTags: {
        $avg: "$numberOfTags",
      },
    },
  },
]);
```

**Method 2: Using `$size` (More Efficient)**

```javascript
db.users.aggregate([
  {
    $addFields: {
      numberOfTags: {
        $size: { $ifNull: ["$tags", []] },
      },
    },
  },
  {
    $group: {
      _id: null,
      avgNumberOfTags: {
        $avg: "$numberOfTags",
      },
    },
  },
]);
```

**Sample Output:**

```json
{
  "_id": null,
  "avgNumberOfTags": 3.556
}
```

**⚡ Performance Tip:** Method 2 is more efficient as it doesn't require unwinding arrays.

---

### 8. Users with Specific Tag

**Objective:** Count users who have 'enim' as one of their tags.

```javascript
db.users.aggregate([
  {
    $match: {
      tags: "enim",
    },
  },
  {
    $count: "usersWithEnimTag",
  },
]);
```

**Sample Output:**

```json
{
  "usersWithEnimTag": 62
}
```

---

### 9. Conditional User Search

**Objective:** Find names and ages of inactive users who have 'velit' as a tag.

```javascript
db.users.aggregate([
  {
    $match: {
      tags: "velit",
      isActive: false,
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
      _id: 0, // Exclude _id for cleaner output
    },
  },
]);
```

**Sample Output:**

```json
[
  { "name": "Aurelia Gonzales", "age": 20 },
  { "name": "Hahn Pope", "age": 21 },
  { "name": "Milagros Levy", "age": 33 },
  { "name": "Becker Lara", "age": 32 },
  { "name": "Obrien Tucker", "age": 20 }
]
```

---

### 10. Phone Number Pattern Matching

**Objective:** Count users with phone numbers starting with '+1 (940)'.

```javascript
db.users.aggregate([
  {
    $match: {
      "company.phone": /^\+1 \(940\)/,
    },
  },
  {
    $count: "usersWithSpecificAreaCode",
  },
]);
```

**Sample Output:**

```json
{
  "usersWithSpecificAreaCode": 5
}
```

**📱 Regex Explanation:** `^` = start of string, `\(` = escaped parenthesis

---

### 11. Most Recently Registered Users

**Objective:** Find the 5 most recently registered users.

```javascript
db.users.aggregate([
  {
    $sort: {
      registered: -1, // -1 for descending (newest first)
    },
  },
  {
    $limit: 5,
  },
  {
    $project: {
      name: 1,
      favoriteFruit: 1,
      registered: 1,
      _id: 0,
    },
  },
]);
```

**Sample Output:**

```json
[
  {
    "name": "Stephenson Griffith",
    "registered": "2018-04-14T03:16:20.000Z",
    "favoriteFruit": "apple"
  },
  {
    "name": "Sonja Galloway",
    "registered": "2018-04-11T12:52:12.000Z",
    "favoriteFruit": "strawberry"
  }
]
```

---

### 12. User Categorization by Preferences

**Objective:** Group all users by their favorite fruit.

```javascript
db.users.aggregate([
  {
    $group: {
      _id: "$favoriteFruit",
      users: {
        $push: "$name",
      },
      userCount: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      userCount: -1,
    },
  },
]);
```

**Enhanced Output with Count:**

```json
[
  {
    "_id": "banana",
    "userCount": 339,
    "users": ["Aurelia Gonzales", "Alison Farmer", "..."]
  },
  {
    "_id": "apple",
    "userCount": 338,
    "users": ["Kitty Snow", "Grace Larson", "..."]
  }
]
```

---

### 13. Array Position Matching

**Objective:** Find users who have 'ad' as their second tag.

```javascript
db.users.aggregate([
  {
    $match: {
      "tags.1": "ad", // Array index 1 = second position
    },
  },
  {
    $count: "usersWithAdAsSecondTag",
  },
]);
```

**Sample Output:**

```json
{
  "usersWithAdAsSecondTag": 12
}
```

**📝 Array Indexing:** MongoDB uses 0-based indexing, so `tags.1` refers to the second element.

---

### 14. Multiple Tag Matching

**Objective:** Find users who have both 'enim' AND 'id' in their tags.

```javascript
db.users.aggregate([
  {
    $match: {
      tags: {
        $all: ["enim", "id"],
      },
    },
  },
  {
    $project: {
      name: 1,
      tags: 1,
      _id: 0,
    },
  },
]);
```

**Sample Output:**

```json
[
  { "name": "Aurelia Gonzales", "tags": ["enim", "id", "other"] },
  { "name": "Mcgowan Rosales", "tags": ["id", "enim", "more"] }
]
```

**🎯 `$all` Operator:** Matches documents where the array field contains ALL specified elements.

---

## Join Operations

### 15. Company Data with User Count

**Objective:** List all US companies with their user counts.

```javascript
db.users.aggregate([
  {
    $match: {
      "company.location.country": "USA",
    },
  },
  {
    $group: {
      _id: "$company.title",
      userCount: {
        $sum: 1,
      },
      users: {
        $push: "$name",
      },
    },
  },
  {
    $sort: {
      userCount: -1,
    },
  },
]);
```

---

### 16. Lookup Operations (Joins)

**Objective:** Join user data with author details from another collection.

**Method 1: Using `$first`**

```javascript
db.books.aggregate([
  {
    $lookup: {
      from: "authors", // Collection to join
      localField: "author_id", // Field in current collection
      foreignField: "_id", // Field in target collection
      as: "author_details", // Output array field name
    },
  },
  {
    $addFields: {
      author_details: {
        $first: "$author_details", // Extract first element
      },
    },
  },
]);
```

**Method 2: Using `$arrayElemAt`**

```javascript
db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "author_details",
    },
  },
  {
    $addFields: {
      author_details: {
        $arrayElemAt: ["$author_details", 0], // Take first element
      },
    },
  },
]);
```

**Sample Output:**

```json
{
  "_id": 1,
  "title": "The Great Gatsby",
  "author_id": 100,
  "genre": "Classic",
  "author_details": {
    "_id": 100,
    "name": "F. Scott Fitzgerald",
    "birth_year": 1896
  }
}
```

---

## Quick Reference Card

| Operation  | Stage        | Purpose                                  |
| ---------- | ------------ | ---------------------------------------- |
| Filter     | `$match`     | Select documents based on criteria       |
| Count      | `$count`     | Count documents in pipeline              |
| Group      | `$group`     | Group documents and perform aggregations |
| Sort       | `$sort`      | Order results (1=asc, -1=desc)           |
| Limit      | `$limit`     | Restrict number of results               |
| Project    | `$project`   | Select/exclude specific fields           |
| Unwind     | `$unwind`    | Deconstruct array fields                 |
| Lookup     | `$lookup`    | Join with other collections              |
| Add Fields | `$addFields` | Add new computed fields                  |

---

## Performance Tips

🚀 **Optimization Best Practices:**

1. **Filter Early:** Always use `$match` at the beginning to reduce dataset size
2. **Index Support:** Ensure your `$match` conditions use indexed fields
3. **Avoid `$unwind` when possible:** Use `$size` for array length instead
4. **Project Late:** Use `$project` at the end to reduce data transfer
5. **Limit Results:** Always use `$limit` when you don't need all results

---

## Common Patterns

### Counting Pattern

```javascript
[
  {
    $match: {
      /* condition */
    },
  },
  { $count: "fieldName" },
];
```

### Top N Pattern

```javascript
[
  {
    $group: {
      /* grouping logic */
    },
  },
  { $sort: { count: -1 } },
  { $limit: N },
];
```

### Array Analysis Pattern

```javascript
[
  { $unwind: "$arrayField" },
  {
    $group: {
      /* analysis */
    },
  },
];
```

---

_Last Updated: August 2025_
