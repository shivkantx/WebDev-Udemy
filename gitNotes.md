<<<<<<< HEAD
```
# 1. git status
Work: Shows the current status of the working directory and staging area.
Syntax: git status
Example:
$ cd /mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	testone.txt
	testtwo.txt
nothing added to commit but untracked files present (use "git add" to track)

# 2. git add
Work: Adds file(s) to the staging area for the next commit.
Syntax: git add <filename>
Example:
$ git add testone.txt
$ git status
Changes to be committed:
  new file:   testone.txt

# 3. git commit
Work: Commits the staged changes with a message to the repository.
Syntax: git commit -m "your message"
Example:
$ git commit -m "added testone.txt file"
[master (root-commit) f4c9b98] added testone.txt file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 testone.txt

# 4. git log
Work: Displays the commit history.
Syntax: git log
Example:
$ git log
commit 091313b... add second file to code base
commit f4c9b9... added testone.txt file

# 5. git log --oneline
Work: Shows each commit in one line for a compact view.
Syntax: git log --oneline
Example:
$ git log --oneline
091313b (HEAD -> master) add second file to code base
f4c9b98 added testone.txt file

# 6. touch
Work: Creates empty file(s).
Syntax: touch <filename1> <filename2>
Example:
$ touch testone.txt testtwo.txt

# 7. pwd
Work: Prints the current directory path.
Syntax: pwd
Example:
$ pwd
/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone

# 8. ls
Work: Lists files and directories in the current directory.
Syntax: ls
Example:
$ ls
gitine  gitthree  gittwo

# 9. cd
Work: Changes the current working directory.
Syntax: cd <foldername>
Example:
$ cd gitone
$ pwd
/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone

# 10. mkdir
Work: Creates a new directory.
Syntax: mkdir <directory_name>
Example:
$ mkdir newProject
$ ls
gitine  gitthree  gittwo  newProject

# 11. git config --global core.editor "code ."
Work: Sets VS Code as the default Git editor globally.
Syntax: git config --global core.editor "code ."
Example:
$ git config --global core.editor "code ."

# 12. .gitignore file
Work: Excludes files/folders from being tracked by Git.
Syntax: Create a file named `.gitignore` and list files to ignore.
Example:
$ echo "node_modules/" >> .gitignore
$ echo "*.log" >> .gitignore
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore
$ git add .gitignore
$ git commit -m "added .gitignore file"
[master abc1234] added .gitignore file
 1 file changed, 2 insertions(+)
 create mode 100644 .gitignore

# 13. git init
Work: Initializes a new Git repository.
Syntax: git init
Example:
$ cd /mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
$ git init
Initialized empty Git repository in /mnt/chromeos/MyFiles/Downloads/gitCheck/gitone/.git/
```
=======
# 🚀 Git & GitHub Notes – Shiv Kant

_Complete Git & GitHub Reference Guide_

---

## 📁 1. Creating Project Folders

```bash
# Go to Downloads directory
cd ~/Downloads

# Create a new folder for Git practice
mkdir gitCheck

# Move into it
cd gitCheck

# Create subfolders for practice projects
mkdir gitone gittwo gitthree gitine

# Move into one to begin Git setup
cd gitone
```

---

## 🔃 2. Initializing a Git Repository

```bash
git init
```

**Your Example:**

```bash
shivkant639624@penguin:/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone$ git init
Initialized empty Git repository in /home/shivkant639624/Downloads/gitCheck/gitone/.git/
```

> This command sets up a new Git repository by creating a `.git` folder.

---

## 📄 3. Creating New Files

```bash
touch testone.txt testtwo.txt
```

**Your Example:**

```bash
shivkant639624@penguin:/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone$ touch testone.txt testtwo.txt
```

> Creates two empty files in your Git project.

---

## 🔍 4. Checking Git Status

```bash
git status
```

**Your Example:**

```bash
shivkant639624@penguin:/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone$ git status
On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        testone.txt
        testtwo.txt
```

> This shows the current state:
>
> - Which files are tracked or untracked
> - What is staged for commit

---

## ➕ 5. Staging Files for Commit

```bash
git add testone.txt
git add testtwo.txt
```

**Your Example:**

```bash
git add testone.txt
git status
# Shows testone.txt is now staged

git add testtwo.txt
git status
# Shows both files are staged
```

**Alternative - Stage all files at once:**

```bash
git add .
```

---

## ✅ 6. Committing Changes

```bash
git commit -m "added testone.txt file"
git commit -m "add second file to code base"
```

**Your Example:**

```bash
shivkant639624@penguin:/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone$ git commit -m "added testone.txt file"
[master (root-commit) f4c9b98] added testone.txt file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 testone.txt
shivkant639624@penguin:/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone$ git commit -m "add second file to code base"
[master 091313b] add second file to code base
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 testtwo.txt
```

---

## 📜 7. Viewing Commit History

```bash
git log
git log --oneline
```

**Your Example:**

```bash
shivkant639624@penguin:/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone$ git log --oneline
091313b (HEAD -> master) add second file to code base
f4c9b98 added testone.txt file
```

**Options:**

- `git log`: Detailed log view
- `git log --oneline`: Short summary of each commit
- `git log --graph`: Shows branch structure
- `git log --author="name"`: Filter by author

---

## 🌿 8. Working with Branches

```bash
# Create a new branch
git branch <branch-name>

# Switch to a branch
git checkout <branch-name>

# Create and switch to a branch in one command
git checkout -b <branch-name>

# List all branches
git branch

# Delete a branch
git branch -d <branch-name>
```

**Example:**

```bash
# Create and switch to a new branch
git checkout -b feature-branch

# List branches
git branch

# Switch back to master
git checkout master
```

---

## 🔀 9. Merging Branches

```bash
# Switch to the branch you want to merge into
git checkout master

# Merge another branch into current branch
git merge <branch-name>
```

**Example:**

```bash
git checkout master
git merge feature-branch
```

---

## 📝 10. Editing Files and Tracking Changes

```bash
# Edit files using nano or any text editor
nano testone.txt

# Check what changed
git diff

# Check status after editing
git status
```

**Example workflow:**

```bash
# Edit file
echo "Hello Git!" > testone.txt

# Check differences
git diff

# Stage changes
git add testone.txt

# Commit changes
git commit -m "updated testone.txt with content"
```

---

## 🔄 11. Undoing Changes

```bash
# Unstage a file
git reset HEAD <file>
# Discard changes in working directory
git checkout -- <file>
# Revert a commit
git revert <commit-hash>
# Reset to a previous commit (dangerous!)
git reset --hard <commit-hash>
```

---

## 🌐 12. Remote Repositories (GitHub)

```bash
# Add a remote repository
git remote add origin <repository-url>

# View remote repositories
git remote -v

# Push to remote repository
git push -u origin master

# Pull from remote repository
git pull origin master

# Clone a repository
git clone <repository-url>
```

**Example:**

```bash
# Add GitHub remote
git remote add origin https://github.com/username/repo-name.git

# Push to GitHub
git push -u origin master
```

---

## 📋 13. Git Configuration

```bash
# Set global username
git config --global user.name "Your Name"

# Set global email
git config --global user.email "your.email@example.com"

# View current config
git config --list

# Set local config for current repo only
git config user.name "Project Specific Name"
```

---

## 🏷️ 14. Tags

```bash
# Create a tag
git tag v1.0

# Create annotated tag
git tag -a v1.0 -m "Version 1.0 release"

# List tags
git tag

# Push tags to remote
git push origin --tags
```

---

## 📦 15. Stashing Changes

```bash
# Stash current changes
git stash
# List stashes
git stash list
# Apply most recent stash
git stash apply
# Apply and remove stash
git stash pop
# Drop a stash
git stash drop
```

---

## 🔍 16. Useful Git Commands

```bash
# Show file differences
git diff
# Show staged differences
git diff --cached
# Show commit details
git show <commit-hash>
# Find text in commit history
git grep "search-term"
# Blame - see who changed what
git blame <file>
```

---

## 🚫 17. .gitignore File

```bash
# Create .gitignore file
touch .gitignore
```

**Common .gitignore patterns:**

```
# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/

# Dependencies
node_modules/
*.log

# Build files
dist/
build/
```

---

## 📊 18. GitHub Workflow

```bash
# Fork a repository on GitHub
# Clone your fork
git clone https://github.com/yourusername/repo-name.git
# Add upstream remote
git remote add upstream https://github.com/original-owner/repo-name.git
# Create feature branch
git checkout -b feature-name
# Make changes and commit
git add .
git commit -m "Add new feature"
# Push to your fork
git push origin feature-name
# Create Pull Request on GitHub
```

---

## 🛠️ 19. Troubleshooting Common Issues

```bash
# If you get merge conflicts
git status  # See conflicted files
# Edit files to resolve conflicts
git add <resolved-file>
git commit

# If you need to change last commit message
git commit --amend -m "New commit message"

# If you pushed to wrong branch
git push origin <correct-branch>
```

---

## 📚 20. Best Practices

- Write clear, descriptive commit messages
- Commit frequently with small, logical changes
- Use branches for new features
- Always pull before pushing
- Review changes before committing
- Use .gitignore to exclude unnecessary files
- Keep repository clean and organized

---

## 🎯 21. Quick Reference Commands

```bash
# Essential daily commands
git status          # Check status
git add .           # Stage all changes
git commit -m "msg" # Commit with message
git push            # Push to remote
git pull            # Pull from remote
git log --oneline   # View commit history
git branch          # List branches
git checkout -b new # Create new branch
```

---

## 🔗 22. GitHub Features

- **Issues**: Track bugs and feature requests
- **Pull Requests**: Code review and collaboration
- **Actions**: CI/CD automation
- **Projects**: Project management
- **Wiki**: Documentation
- **Releases**: Version management
- **Discussions**: Community discussions

---

## 📖 23. Additional Resources

- [Git Official Documentation](https://git-scm.com/docs)
- [GitHub Guides](https://guides.github.com/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Happy Coding! 🚀**
_Created by Shiv Kant - Your Git & GitHub Journey Starts Here_
>>>>>>> 1bffe3b (gitNotes added in folder)
