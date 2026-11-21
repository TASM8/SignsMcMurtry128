# Taylor Signs-McMurtry
# CISW 128 Web App Development
# Final Project


## Note From Taylor

Before I go into detail what I made, this final.... was not my favorite.
It may have been better if I was in Database, but I have not taken that class in 
3 years. So, did I think I was going to have an brain aneurysm? Yes. 
Is part of that my fault because I need/want to complete this class early? Yes. 
I sat at my computer for too long, but I appreciate your willingness to grade this, thank you, I really do appreciate it!

## The Adventurer's Handbook

## About my project

The Adventurer's Handbook is a beginner-friendly D&D topic library.
I created this to help new players who are nervous about playing D&D.

I simplified it a bit from my plan because I realized that I was going to go way over
my head, so I have made pretty good modifications, but much more simple.

I used the CRUD starter, I made changes to customize project. I added a category 
box, and updated the database and use JavaScript.

## Features

- Topic changed to D&D 
- View and save topic with categories
- Able to edit existing topics and categories 
- Delete feature
- Save information to the database

## Categories

- Game Basics
- Character Creation
- Gameplay

## Tools Used

- HTML
- CSS
- JavaScript
- Netlify
- SQL Database

## Custom Changes

I changed the layout to dark green to give it a more of a fantasy feeling.
The box is supposed to look like parchment, like in 'ye olden days. 
With a nice brown button.

The user is also able to name their topic whatever they want to lable it, and then
they have 3 catergories to select from. 

Also the user is able to edit and delete the catergories they list.

## Issues

My mine is a lot of typos, mostly not putting the character in the right place. 

## ${item.id} <------- That is my enemy. I kept putting the $ inside the {}, ridiculous

I was loosing my mind with that code, it inserts a variable or expression into a string.

As you know it is an internal identifier.

Connecting the database servers were also a huge pain for me, I really struggled with that. 

I had to play around with the code, come things were defininetly easy to know what to put, but there were others that I had to look up because I was so confused on what I was doing wrong. 


# CRUD Starter
**CISW 128 — Talamantes**

A simple website that can **Create, Read, Update, and Delete (CRUD)** items saved in a real database.

Your job is to turn this starter project into your own application by modifying its appearance, database structure, and functionality.

---

## What's in This Project

```text
src/                         ← Your website
  index.html                 ← HTML structure
  styles.css                 ← Website styling
  app.js                     ← Frontend JavaScript

netlify/functions/           ← Backend functions
  get-items.mjs              ← READ all items
  add-item.mjs               ← CREATE an item
  update-item.mjs            ← UPDATE an item
  delete-item.mjs            ← DELETE an item

netlify/database/migrations/
  .../migration.sql          ← Database table structure
```

### How It Works

When you click a button, `app.js` uses `fetch()` to communicate with one of the Netlify Functions.

The function runs SQL commands against the database and returns a response.

The browser never communicates directly with the database.

```text
app.js
  ↓ fetch("/api/add-item")
add-item.mjs
  ↓ SQL INSERT
Database
```

---

## Setup (Do This Once)

### Step 1 — Install Node.js

Download and install **Node.js version 22.13 or newer**.

https://nodejs.org

Verify your installation by opening a terminal and running:

```bash
node -v
```

### Step 2 — Open the Project in VS Code

1. Open Visual Studio Code.
2. Open your project folder.
3. Open the integrated terminal using **Terminal → New Terminal**.
4. Make sure your terminal is in the project's main folder.

### Step 3 — Install Dependencies

Run:

```bash
npm install
```

This installs the packages required for the project.

You only need to repeat this if dependencies change or you reinstall the project.

---

## Running the Website Locally

Before deploying your website, test it on your computer.

### Step 1 — Start the Development Server

Open the VS Code terminal and run:

```bash
npm run dev
```

Then open your browser and navigate to:

http://localhost:8888

Keep this terminal running while you work.

### Step 2 — Set Up the Local Database

The project uses a database to store your items. Before testing your application, you must create the database table.

**First-time setup:**

With `npm run dev` running in your first terminal, open a **second terminal** in VS Code.

Run:

```bash
npm run db:migrate
```

This applies the SQL migration files and creates the required database table.

You only need to do this once initially, unless you add new migrations.

### Step 3 — Resetting and Updating Your Local Database

As you customize your CRUD application, you may need to modify the database structure.

For example, if you add a new column to the `items` table in the original `migration.sql` file, your existing local database will not automatically update.

To rebuild your local database, run these commands in your second terminal:

**1. Reset the database**

```bash
npm run db:reset
```

This clears and resets your local development database.

**Warning:** Resetting the database will delete the existing local data. Only use this command when you are comfortable losing your test records. Do not run it against a production database.

**2. Apply the migrations**

```bash
npm run db:migrate
```

This recreates the database tables using your migration files.

**3. Refresh your website**

Return to:

http://localhost:8888

Refresh the page and test your CRUD functionality again.

### When Should You Use These Commands?

| Command | When to use it |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start your local development website |
| `npm run db:migrate` | Create initial tables or apply new database migrations |
| `npm run db:reset` | Reset the local database when rebuilding or testing its structure |

**Important:** These commands are for local development and database management. You will use the **Netlify website and GitHub integration** to deploy your finished application.

### Step 4 — Test Your Application

Once your database is ready, test all four CRUD operations:

- **Create:** Add a new item.
- **Read:** Verify the item appears on the webpage.
- **Update:** Edit an existing item.
- **Delete:** Remove an item.

Refresh the browser to verify that your changes were saved in the database.

If your changes are not working, check the browser console and the VS Code terminal for errors.

---

## Deploying Your Website Using Netlify

You will deploy your website using the **Netlify website and GitHub integration**.

You will **NOT use the Netlify CLI to deploy your website**.

### Step 1 — Push Your Project to GitHub

Before deploying, make sure your project is uploaded to GitHub.

1. Open your project in VS Code.
2. Save your changes.
3. Open Source Control.
4. Stage and commit your changes.
5. Push your changes to GitHub.
6. Open GitHub in your browser and verify your files are present.

Your repository should contain your website files, Netlify Functions, database migrations, and project configuration.

**Important:** Do not upload `node_modules`, `.env` files, passwords, or database credentials.

### Step 2 — Sign In to Netlify

1. Visit https://app.netlify.com
2. Create an account or sign in.
3. You may use your GitHub account to sign in.
4. Once signed in, open the Netlify dashboard.

### Step 3 — Import Your GitHub Repository

1. Select **Add new project** (or the equivalent option shown in your dashboard).
2. Choose **Import an existing project**.
3. Select **GitHub** as your Git provider.
4. Authorize Netlify to access your repositories if prompted.
5. Find and select your CRUD project repository.

Netlify will begin configuring your website for deployment.

### Step 4 — Configure the Deployment Settings

Before deploying, verify the following:

| Setting | Value |
|---|---|
| Branch to deploy | `main` |
| Base directory | Leave blank |
| Build command | Use the command specified in `netlify.toml`, if provided |
| Publish directory | `src`, unless overridden by `netlify.toml` |
| Functions directory | `netlify/functions`, unless configured otherwise |

If the starter project already contains a `netlify.toml` file, keep its configuration unless your instructor directs you to change it.

**Do not select the drag-and-drop deployment option.** This project requires backend functions and a database, not just static HTML files.

### Step 5 — Deploy Your Website

1. Review the deployment settings.
2. Select **Deploy**.
3. Wait for Netlify to finish building and publishing your website.
4. Open the URL Netlify provides.

Your website should now be accessible online.

**Important:** A successful website deployment does not automatically mean the database is configured and working.

### Step 6 — Configure Your Production Database

Your deployed website needs access to a database for its CRUD operations.

1. Open your project in the Netlify dashboard.
2. Locate the database setup or integration associated with your starter project.
3. Follow the instructor-provided database provisioning instructions.
4. Ensure the deployed Netlify Functions can access the database.
5. Apply any required database migrations using the supported database workflow.

The exact database setup depends on the database service and configuration used by the starter project.

Your local database and production database may be separate.

### Step 7 — Test Your Live Website

Open your deployed website and verify:

- The page loads correctly.
- CSS styling is applied.
- You can add items.
- Existing items appear.
- You can update items.
- You can delete items.
- Refreshing the page does not erase saved database records.

If your website loads but CRUD operations do not work, check your database configuration and Netlify Function logs.

---

## Updating Your Live Website

Once your GitHub repository is connected to Netlify, you do not need to manually redeploy your website every time.

When you make changes:

1. Edit your project in VS Code.
2. Test the changes locally.
3. Save your files.
4. Commit your changes.
5. Push your changes to GitHub.
6. Netlify will automatically begin a new deployment from your connected branch.

You can monitor the deployment in the **Netlify dashboard → Deploys**.

**Remember:** Test your application locally before pushing major changes. Netlify plans have usage limits, so avoid unnecessary deployments.

---

## Making It Your Own

The starter project is intentionally simple.

You will modify the application to create something unique while maintaining its CRUD functionality.

### Changing the Appearance

Edit the following files:

- `src/index.html` — Change the website's structure and inputs.
- `src/styles.css` — Change the colors, layout, fonts, and overall design.
- `src/app.js` — Change how the website interacts with the user.



## A Quick SQL Cheat Sheet

In the backend functions, SQL commands are written inside the database client's SQL template.

Always use parameterized values rather than combining user input directly into SQL strings.

| What you want | SQL |
|---|---|
| Get all items | `SELECT * FROM items` |
| Add an item | `INSERT INTO items (title) VALUES (${data.title})` |
| Update an item | `UPDATE items SET title = ${data.title} WHERE id = ${data.id}` |
| Delete an item | `DELETE FROM items WHERE id = ${data.id}` |

These examples assume your existing functions use the `db.sql` tagged-template interface.

---

## Troubleshooting

### My Website Works Locally but Not on Netlify

Check the following:

- Did you push your latest changes to GitHub?
- Did Netlify deploy the correct branch?
- Are your Netlify Functions being deployed?
- Is your production database configured?
- Are the required database tables present?

### The Website Loads, but Adding Items Does Nothing

Your frontend may be working while the backend is failing.

1. Open your browser's developer tools.
2. Check the Console and Network tabs.
3. Open the Netlify dashboard.
4. Check the function logs for errors.
5. Verify the database connection.

### Error: `relation "items" does not exist`

This usually means the required database table has not been created in the database being used.

For your local database, run:

```bash
npm run db:migrate
```

If you recently modified the original migration and are willing to erase your local test data, run:

```bash
npm run db:reset
npm run db:migrate
```

For the production database, verify that the required migration has been applied using the appropriate production migration workflow.

### My Changes Are Not Showing on the Live Website

1. Make sure you committed your changes.
2. Push your changes to GitHub.
3. Check the Netlify Deploys page.
4. Wait for the deployment to finish.
5. Refresh the website.

### My Live Website Does Not Show My Local Items

Your local and production environments may use different databases.

This is normal.

### The Website Shows a 404 Error When Calling a Function

Verify that:

- The function file exists.
- The function was included in the deployment.
- The frontend is calling the correct endpoint.
- Your Netlify configuration contains the necessary routing or redirects.

### Node.js Errors

Verify your installed version:

```bash
node -v
```

Make sure you are using Node.js 22.13 or newer.

If necessary, reinstall the project dependencies:

```bash
npm install
```

---

## Important Notes

- Do not store private or sensitive information in this application.
- This starter project does not include user authentication.
- Anyone with access to your public website may be able to modify its database records.
- Test your application before deploying updates.
- Keep your GitHub repository updated.
- Use the Netlify dashboard for deployment and troubleshooting.
- Use `npm run dev` for local testing.
- Use `npm run db:reset` and `npm run db:migrate` to manage your local development database.
- Do not reset your production database.
- Do not use Netlify CLI deployment commands.

**Your goal is to build a working, customized CRUD application that communicates with a real database and is accessible through your deployed Netlify website.**