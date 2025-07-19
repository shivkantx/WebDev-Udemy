# Git & Bash Command Notes

---

## 1. `git status`

**Syntax:**

```bash
git status
```

**Example:**

```bash
$ cd /mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
    testone.txt
    testtwo.txt
nothing added to commit but untracked files present (use "git add" to track)
```

---

## 2. `git add`

**Syntax:**

```bash
git add <filename>
```

**Example:**

```bash
$ git add testone.txt
$ git status
Changes to be committed:
  new file:   testone.txt
```

---

## 3. `git commit`

**Syntax:**

```bash
git commit -m "your message"
```

**Example:**

```bash
$ git commit -m "added testone.txt file"
[master (root-commit) f4c9b98] added testone.txt file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 testone.txt
```

---

## 4. `git log`

**Syntax:**

```bash
git log
```

**Example:**

```bash
$ git log
commit 091313b... add second file to code base
commit f4c9b9... added testone.txt file
```

---

## 5. `git log --oneline`

**Syntax:**

```bash
git log --oneline
```

**Example:**

```bash
$ git log --oneline
091313b (HEAD -> master) add second file to code base
f4c9b98 added testone.txt file
```

---

## 6. `touch`

**Syntax:**

```bash
touch <filename1> <filename2>
```

**Example:**

```bash
$ touch testone.txt testtwo.txt
```

---

## 7. `pwd`

**Syntax:**

```bash
pwd
```

**Example:**

```bash
$ pwd
/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
```

---

## 8. `ls`

**Syntax:**

```bash
ls
```

**Example:**

```bash
$ ls
gitine  gitthree  gittwo
```

---

## 9. `cd`

**Syntax:**

```bash
cd <foldername>
```

**Example:**

```bash
$ cd gitone
$ pwd
/mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
```

---

## 10. `mkdir`

**Syntax:**

```bash
mkdir <directory_name>
```

**Example:**

```bash
$ mkdir newProject
$ ls
gitine  gitthree  gittwo  newProject
```

---

## 11. `git config --global core.editor "code ."`

**Syntax:**

```bash
git config --global core.editor "code ."
```

**Example:**

```bash
$ git config --global core.editor "code ."
```

---

## 12. `.gitignore` file

**Syntax:** Create a file named `.gitignore` and list files to ignore.

**Example:**

```bash
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
```

---

## 13. `git init`

**Syntax:**

```bash
git init
```

**Example:**

```bash
$ cd /mnt/chromeos/MyFiles/Downloads/gitCheck/gitone
$ git init
Initialized empty Git repository in /mnt/chromeos/MyFiles/Downloads/gitCheck/gitone/.git/
```

---

## 14. `git add .`

Stages all modified and new files in the current directory.

**Syntax:**

```bash
git add .
```

**Example:**

```bash
shivkant639624@penguin:~/Projects/WebDev-Udemy$ git add .
```

---

## 15. `git commit -m`

**Syntax:**

```bash
git commit -m "your message"
```

**Example:**

```bash
git commit -m "gitNotes added in folder"
```

**Output:**

```bash
[main 1bffe3b] gitNotes added in folder
 1 file changed, 476 insertions(+)
 create mode 100644 gitNotes.md
```

---

## 16. `git push origin main`

**Syntax:**

```bash
git push origin main
```

**Example:**

```bash
git push origin main
```

**Output:**

```bash
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'origin'
hint: Updates were rejected because the remote contains work that you do
not have locally.
```

---

## 17. `git pull origin main`

**Syntax:**

```bash
git pull origin main
```

**Example:**

```bash
git pull origin main
```

**Output:**

```bash
Updating 9cb0..1bff
Fast-forward
 gitNotes.md | 476 +++++++++++++++++++++++++++++++++++++++++++++++
```

---

## 18. `git branch`

**Syntax:**

```bash
git branch
```

**Example:**

```bash
git branch
```

**Output:**

```bash
* master
  footer
```

---

## 19. `git checkout <branch-name>`

**Syntax:**

```bash
git checkout <branch-name>
```

**Example:**

```bash
git checkout footer
```

**Output:**

```bash
Switched to branch 'footer'
```

---

## 20. `git merge <branch-name>`

**Syntax:**

```bash
git merge <branch-name>
```

**Example:**

```bash
git merge footer
```

**Output:**

```bash
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

---

## 21. `git add index.html`

**Syntax:**

```bash
git add index.html
```

**Example:**

```bash
git add index.html
```

---

## 22. `git commit -m "Index file with footer code"`

**Syntax:**

```bash
git commit -m "your message"
```

**Example:**

```bash
git commit -m "Index file with footer code"
```

**Output:**

```bash
[master c83634f] Index file with footer code
 1 file changed, 1 insertion(+), 1 deletion(-)
```

---

## 23. `git log`

**Syntax:**

```bash
git log
```

**Example:**

```bash
git log
```

**Output:**

```bash
commit b8c0cd7f9bfc...
Author: Shiv Kant <email@example.com>
Date:   Thu Jul 17 16:23:10 2025 +0530

    Index file with footer code
```

---

## 24. Bonus: Common Mistyped Commands

```bash
git staus     # ❌ Wrong (should be 'git status')
gir merge     # ❌ Wrong (should be 'git merge')
girt add .    # ❌ Wrong (should be 'git add .')
```

---

## 25. Example Git Workflow

```bash
# Create and switch to footer
git branch footer
git checkout footer

# Edit and commit in footer
git add index.html
git commit -m "Footer content added"

# Switch to master, commit
git checkout master
git add index.html
git commit -m "Header content added"

# Merge footer into master
git merge footer

# If conflict:
# Resolve manually
git add .
git commit -m "merged footer branch"
```
