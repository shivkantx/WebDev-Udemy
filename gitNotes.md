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
