Slack Clone
===========

A feature-rich **Slack Clone**, a real-time communication platform with comprehensive messaging and workspace management.

Features
--------

### Messaging Capabilities

*   📡 **Real-time communication**
    
*   👍 **Message reactions**
    
*   🧵 **Threads & Replies**
    
*   ✏️ **Editing messages**
    
*   🗑️ **Deleting messages**
    
*   🖼️ **Image attachments**
    
*   💬 **Direct messaging**
    

### Workspace Management

*   🏢 **Workspace creation**
    
*   📺 **Channel management**
    
*   ✉️ **Invite system & invite codes**
    
*   🔐 **Role-based access control**
    
*   👥 **User profiles & presence**
    

### Technical Stack

*   ⚛️ **Next.js 14** – A powerful React framework that enables server-side rendering, static generation, and full-stack development with API routes.
    
*   🔒 **Next Auth v5** – A flexible authentication library for Next.js, supporting multiple providers and JWT-based authentication.
    
*   📡 **WebSockets** – Enables real-time communication between users for an interactive messaging experience.
    
*   📦 **Convex** – A modern backend-as-a-service that provides a **real-time database** and **serverless functions**, simplifying backend development and ensuring seamless data synchronization.
    
*   🎨 **Shadcn UI Components** – A customizable and accessible component library for building modern UIs with ease.
    
*   🎨 **Tailwind CSS** – A utility-first CSS framework for fast and responsive UI design.
    
*   🚀 **Vercel Deployment** – A seamless cloud platform for hosting and deploying Next.js applications.
    

Screenshots
-----------
![Thread](/assets/Screenshot1.png)
![Profile](/assets/Screenshot2.png)
![Invite To Workspace](/assets/Screenshot3.png)
![Invite To Workspace](/assets/Screenshot4.png)
![Invite To Join](/assets/Screenshot5.png)
![Search](/assets/Screenshot6.png)
![Create Channel](/assets/Screenshot7.png)


Installation & Setup
--------------------

### Prerequisites

Ensure you have the following installed on your system:

*   **Node.js (v18 or later)**
    
*   **Yarn or npm**
    
*   **A Convex account for backend services**
    

### Clone the Repository

```bash

git clone https://github.com/jadzeino/next14-slack-clone.git  cd next14-slack-clone
```

### Install Dependencies

```bash
npm install
```

### Setup Convex

```bash
npx convex dev
```
resgister using github and if you need more info read the documtion here

https://docs.convex.dev/tutorial/

### Run the Project Locally

Run this command in parrarel with convex 

```bash
npm run dev
```

The app will be accessible at http://localhost:3000

Deployment
----------

### Deploying to Vercel

1.  Install the [Vercel CLI](https://vercel.com/docs/cli)
    
2.  vercel
    
3.  Follow the prompts to set up your project
    
4.  Your app will be deployed and accessible via a Vercel-provided URL
    

## Try it online

THe repo is deployed on Vecel on this url

Open [https://next14-slack-clone-theta.vercel.app/](https://next14-slack-clone-theta.vercel.app/)