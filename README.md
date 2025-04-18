# GitHub Profile Analyzer

[![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-0.4.1-000000?logo=react)](https://ui.shadcn.com/)

A modern GitHub profile analysis tool built with React and shadcn/ui components, featuring user statistics, repository insights, and contribution visualization.

<div align="center">
  <img src="./public/home.png" alt="Screenshot" />
  <img src="./public/cards.png" alt="Screenshot" />
  <img src="./public/activity.png" alt="Screenshot" />
  <img src="./public/repos.png" alt="Screenshot" />
</div>

## Features

- 🔍 GitHub profile analysis (followers, repos, join date)
- 📊 Language distribution pie chart
- ⭐ Starred repository rankings
- 📅 GitHub contribution calendar
- 🎨 Responsive dark/light mode
- ⚡ Fast performance with Vite

## Technologies Used

- **Framework**: React + TypeScript
- **UI Library**: shadcn/ui
- **HTTP Client**: Axios
- **Visualization**: Recharts, react-github-calendar
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+
- GitHub account (optional)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sahilmalik0786/github-profile-analyzer.git
    cd github-profile-analyzer
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Create a new project on Vercel.
3. Import your repository.
4. Configure settings:
    - Build Command: `npm run build`
    - Output Directory: `dist`

5. Deploy!

### Netlify

1. Create a new site on Netlify.
2. Connect your GitHub repository.
3. Set build settings:
    - Build Command: `npm run build`
    - Publish Directory: `dist`
4. Trigger deployment.

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

Created by Sahil Malik
