# Git & Branching Guide

## 🧠 What is Git?
Git is a **distributed version control system** that lets multiple developers track changes to source code over time. It allows teams to work in parallel, manage versions, and collaborate efficiently.

## 🌐 What is GitHub?
GitHub is a **cloud-based hosting service** for Git repositories. It provides a web interface and tools for collaboration, code review, pull requests, CI/CD, and issue tracking.

## 🛠️ What is GitLab?
GitLab is an **open-source DevOps platform** that provides Git repository management, CI/CD, and other DevOps tools. It’s similar to GitHub but can be self-hosted or used via GitLab.com.

---

## 🧰 10 Important Git Commands

| Command                                 | Description |
|--------                                 |-------------|
| `git init`                              | Initialize a new Git repository |
| `git clone <repo-url>`                  | Clone a remote repository |
| `git status`                            | Show changes and staging info |
| `git add <file>`                        | Stage files for commit |
| `git commit -m "message"`               | Commit staged changes with a message |
| `git pull`                              | Fetch and merge changes from remote |
| `git push`                              | Push local commits to remote repository |
| `git branch`                            | List all branches |
| `git checkout <branch>`                 | Switch to another branch |
| `git merge <branch>`                    | Merge another branch into current branch |

---

## 🌿 Git Branching Explained
Branches allow you to work on different features, fixes, or experiments independently without affecting the main branch.

### 1. `feature/<name>`
- **Purpose**: For developing new features
- **Example**: `feature/login-page`

### 2. `bugfix/<name>` or `fix/<name>`
- **Purpose**: For fixing non-critical bugs
- **Example**: `bugfix/fix-login-error`

### 3. `hotfix/<name>`
- **Purpose**: For urgent fixes directly to production
- **Example**: `hotfix/crash-on-startup`

### 4. `release/<version>`
- **Purpose**: For preparing a release version
- **Example**: `release/1.2.0`

### 5. `experiment/<name>`
- **Purpose**: For testing ideas or prototypes
- **Example**: `experiment/new-method`
