# 1. Total Count of Active Users

Use a MongoDB aggregation pipeline to count all active users.

## Aggregation Stages

1. **$match** — Filter documents to include only the active users.
2. **$count** — Count the number of documents that matched the condition.

## Example

```javascript
db.users.aggregate([
  {
    $match: { isActive: true }, // or adjust the condition to your schema
  },
  {
    $count: "totalActiveUsers",
  },
]);
```

# 2. Avergae age of prasent in users database

1. **$group**
2. **\_id: null**

```javascript
[
  {
    $group: {
      _id: null,
      averageAge: {
        $avg: "$age",
      },
    },
  },
];
```

### output

{
"\_id": null,
"averageAge": 29.835
}

# 3. List the top 5 common favouite fruits among the users

```javascript
[
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
];
```

### Output

{
"\_id": "banana",
"count": 339
}

{
"\_id": "apple",
"count": 338
}

{
"\_id": "strawberry",
"count": 323
}

# 4. total number of male and female

```javascript
[
  {
    $group: {
      _id: "$gender",
      countMalefemale: {
        $sum: 1,
      },
    },
  },
];
```

### Output

{
"\_id": "female",
"countMalefemale": 507
}
{
"\_id": "male",
"countMalefemale": 493
}

# 5. Which country has the higest number of registered user

```javascript
[
  {
    $group: {
      _id: "$company.location.country",
      heightestRegisterUser: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      heightestRegisterUser: -1,
    },
  },
  {
    $limit: 1,
  },
];
```

## output

{
"\_id": "Germany",
"heightestRegisterUser": 261
}

# 6. List all unique eye colors present in the collection.

```javascript
[
  {
    $group: {
      _id: "$eyeColor",
    },
  },
];
```

## output

{
"\_id": "green"
}
{
"\_id": "blue"
}
{
"\_id": "brown"
}

# 7. What is the average number of tags per user?

```javascript
[
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
];
```

### alternative

```javascript
[
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
      totalNumberOfTags: { $avg: "$numberOfTags" },
    },
  },
];
```

## output

{
"\_id": null,
"avgNumberOfTags": 3.556
}

# 5. total number of male and female

```javascript

```

## output

# 5. total number of male and female

```javascript

```

## output
